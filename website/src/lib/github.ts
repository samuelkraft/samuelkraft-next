const GITHUB_USERNAME = "samuelkraft";

export type Repo = {
  name: string;
  description: string;
  url: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
};

export const getRepos = async () => {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
  );
  const data = (await res.json()) as Repo[];

  if (data.length) {
    return data
      .filter((repo) => !repo.fork)
      .filter((_, i) => i < 5)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  }
  return [];
};
