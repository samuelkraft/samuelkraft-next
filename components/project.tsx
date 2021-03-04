import { useState, useRef, useLayoutEffect } from 'react'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'
import { Link2 } from 'react-feather'
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

const Project = ({ title, description, link, image, imageWidth, imageHeight, linkText, small }: ProjectProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0)
  const [pageHeight, setPageHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()
  const yRange = useTransform(scrollY, [elementTop - pageHeight, elementTop], [30, 0])
  const y = useSpring(yRange, { stiffness: 400, damping: 90 })

  useLayoutEffect(() => {
    const element = ref.current
    setElementTop(element.offsetTop)
    setPageHeight(window.innerHeight)
  }, [ref])

  return (
    <div className={styles.project} ref={ref}>
      <a href={`https://${link}`} target="_blank" rel="noreferrer" aria-label={title}>
        <div className={cn(styles.imageWrapper, small && styles.small)}>
          {image && (
            <motion.div className={styles.imageAnimationWrapper} style={{ y }}>
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
}

export default Project
