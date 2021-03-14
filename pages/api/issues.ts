import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllIssues } from 'lib/linear'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getAllIssues()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ issues: [] })
  }

  const issues = await response

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    issues,
  })
}
