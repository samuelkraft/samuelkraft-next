import Image from 'next/image'
import styles from './blogimage.module.scss'

type BlogImageProps = {
  src: string
  alt: string
}

const BlogImage = ({ src, alt }: BlogImageProps): JSX.Element => (
  <span className={styles.wrapper}>
    <Image src={src} alt={alt} width={2024} height={1012} layout="responsive" />
  </span>
)

export default BlogImage
