const GITHUB_USERNAME = 'samuelkraft'

export const getRepos = async () => {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
  const data = await res.json()

  if (data.length) {
    return data
      .filter(repo => !repo.fork)
      .filter((x, i) => i < 5)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  }
  return []
}
