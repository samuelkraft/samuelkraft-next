import { Star, GitBranch } from 'react-feather'
import styles from './repo.module.scss'

export type RepoProps = {
  name: string
  id: number
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
}

const Repo = ({ id, html_url: htmlUrl, name, description, stargazers_count: stargazersCount, forks_count: forksCount }: RepoProps) => {
  return (
    <a href={htmlUrl} key={id} className={styles.repo}>
      <header className={styles.header}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.stats}>
          <p className={styles.stat}>
            <Star />
            {stargazersCount}
          </p>
          <span className={styles.separator}>&middot;</span>
          <p className={styles.stat}>
            <GitBranch />
            {forksCount}
          </p>
        </div>
      </header>
      <p className={styles.description}>{description}</p>
    </a>
  )
}

export default Repo
