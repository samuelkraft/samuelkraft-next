import { Link2 } from 'react-feather'
import cn from 'classnames'
import Image from 'next/image'
import styles from './project.module.scss'

type ProjectProps = {
  title: string
  description: string
  link: string
  linkText?: string
  image: any
  small?: boolean
  priority?: boolean
}

const Project = ({ title, description, link, image, linkText, small, priority }: ProjectProps): JSX.Element => {
  return (
    <div className={styles.project}>
      <a href={`https://${link}`} target="_blank" rel="noreferrer" aria-label={title}>
        <div className={cn(styles.background, small && styles.backgroundSmall)}>
          {image && (
            <div className={styles.imageWrapper}>
              <div className={styles.image}>
                <Image src={image} priority={priority} layout="responsive" sizes="(max-width: 700px) 90vw, 700px" />
              </div>
            </div>
          )}
        </div>
      </a>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {link && (
        <a href={`https://${link}`} className={styles.link}>
          {linkText || `Visit ${link}`}
          <Link2 />
        </a>
      )}
    </div>
  )
}

export default Project
