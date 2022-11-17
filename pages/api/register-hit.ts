import faunadb from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message?: string;
  hits?: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const q = faunadb.query;
  const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY || "",
  });
  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({
      message: "Article slug not provided",
    });
  }
  // Check and see if the doc exists.
  const doesDocExist = await client.query(
    q.Exists(q.Match(q.Index("hits_by_slug"), slug))
  );
  if (!doesDocExist) {
    await client.query(
      q.Create(q.Collection("hits"), {
        data: { slug, hits: 0 },
      })
    );
  }
  // Fetch the document for-real
  const document = (await client.query(
    q.Get(q.Match(q.Index("hits_by_slug"), slug))
  )) as { ref: string; data: { hits: number } };
  await client.query(
    q.Update(document.ref, {
      data: {
        hits: document.data.hits + 1,
      },
    })
  );
  return res.status(200).json({
    hits: document.data.hits,
  });
}
