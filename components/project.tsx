import { Link2 } from 'react-feather'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cn from 'classnames'
import styles from './project.module.scss'

type ProjectProps = {
  title: string
  description: string
  link: string
  linkText?: string
  image: string
  imageWidth: number
  imageHeight: number
  small?: boolean
}

const Project = ({ title, description, link, image, imageWidth, imageHeight, linkText, small }: ProjectProps): JSX.Element => (
  <div className={styles.project}>
    <a href={`https://${link}`} target="_blank" rel="noreferrer" aria-label={title}>
      <div className={cn(styles.imageWrapper, small && styles.small)}>
        {image && (
          <motion.div whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 50 }} className={styles.imageAnimationWrapper}>
            <div className={styles.image} style={{ maxWidth: imageWidth / 2, maxHeight: imageHeight / 2 }}>
              <Image src={image} width={imageWidth} height={imageHeight} />
            </div>
          </motion.div>
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

export default Project
