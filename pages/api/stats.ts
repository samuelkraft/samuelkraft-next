import type { NextApiRequest, NextApiResponse } from 'next'
import faunadb from 'faunadb'
import { pick } from '@contentlayer/client'
import { getMentionsForSlug } from 'lib/webmentions'
import { allPosts } from '.contentlayer/data'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const q = faunadb.query
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY || '',
  })

  const posts = allPosts.map(post => pick(post, ['slug', 'title', 'publishedAt']))

  const postsWithLikes = await Promise.all(
    posts.map(async post => {
      // Fetch webmentions
      const numberOfmentions = await getMentionsForSlug(post.slug)

      // Fetch fauna likes
      type documentType = { ref: string; data: { likes: number } }
      const likesDocument = (await client.query(q.Get(q.Match(q.Index('likes_by_slug'), post.slug)))) as documentType
      const totalLikes = numberOfmentions > 0 ? likesDocument.data.likes + numberOfmentions : likesDocument.data.likes

      // Fetch fauna hits
      const hitsDocument = (await client.query(q.Get(q.Match(q.Index('hits_by_slug'), post.slug)))) as {
        ref: string
        data: { hits: number }
      }

      return {
        ...post,
        id: post.slug,
        likes: totalLikes,
        views: hitsDocument.data.hits,
      }
    }),
  )

  res.status(200).json({ posts: postsWithLikes })
}
