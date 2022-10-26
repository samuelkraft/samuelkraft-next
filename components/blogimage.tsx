import Image from 'next/image'
import cn from 'classnames'
import styles from './blogimage.module.scss'

type BlogImageProps = {
  src: string
  alt: string
  className?: string
}

const BlogImage = ({ src, alt, className }: BlogImageProps): JSX.Element => (
  <div className={cn(styles.wrapper, className)}>
    <Image src={src} alt={alt} width={746} height={373} />
  </div>
)

export default BlogImage
