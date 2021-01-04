import Link from 'next/link'
import { Link2, ArrowRight } from 'react-feather'
import styles from './project.module.scss'

type ProjectProps = {
  title: string
  description: string
  link?: string
  href?: string
}

const Project = ({ title, description, link, href }: ProjectProps): JSX.Element => (
  <div className={styles.project}>
    <div className={styles.imageWrapper} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    {href && (
      <Link href={href}>
        <a className={styles.link}>
          View project <ArrowRight />
        </a>
      </Link>
    )}
    {link && (
      <a href={`https://${link}`} className={styles.link}>
        Visit {link} <Link2 />
      </a>
    )}
  </div>
)

export default Project
