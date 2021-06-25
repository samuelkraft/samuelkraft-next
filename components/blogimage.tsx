import Image from 'next/image'
import cn from 'classnames'
import styles from './blogimage.module.scss'

type BlogImageProps = {
  src: string
  alt: string
  className?: string
}

const BlogImage = ({ src, alt, className }: BlogImageProps): JSX.Element => (
  <span className={cn(styles.wrapper, className)}>
    <Image src={src} alt={alt} width={2024} height={1012} layout="responsive" />
  </span>
)

export default BlogImage
