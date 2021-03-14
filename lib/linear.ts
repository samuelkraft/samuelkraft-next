import { LinearClient } from '@linear/sdk'

const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY,
})

export const getAllIssues = async () => {
  const issues = await linearClient.issues()

  if (issues.nodes.length) {
    return issues.nodes
  }
  return []
}
