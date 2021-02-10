import faunadb from 'faunadb'

module.exports = async (req, res) => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY,
  })
  const { slug } = req.query
  if (!slug) {
    return res.status(400).json({
      message: 'Article slug not provided',
    })
  }
  // Check and see if the doc exists.
  const doesDocExist = await client.query(q.Exists(q.Match(q.Index('likes_by_slug'), slug)))
  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection('likes'), {
        data: { slug, likes: 0 },
      }),
    )
  }

  type documentType = { ref: string; data: { likes: number } }

  // Fetch the document for-real
  const document = (await client.query(q.Get(q.Match(q.Index('likes_by_slug'), slug)))) as documentType

  if (req.method === 'POST') {
    await client.query(
      q.Update(document.ref, {
        data: {
          likes: document.data.likes + 1,
        },
      }),
    )
    const updatedDocument = (await client.query(q.Get(q.Match(q.Index('likes_by_slug'), slug)))) as documentType
    return res.status(200).json({
      likes: updatedDocument.data.likes,
    })
  }
  return res.status(200).json({
    likes: document.data.likes,
  })
}
