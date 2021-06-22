import Image from 'next/image'
import styles from './blogimage.module.scss'

type BlogImageProps = {
  src: string
  alt: string
  blurDataURL?: string
}

const BlogImage = ({ src, alt, blurDataURL }: BlogImageProps): JSX.Element => (
  <span className={styles.wrapper}>
    <Image
      src={src}
      alt={alt}
      width={2024}
      height={1012}
      blurDataURL={blurDataURL}
      placeholder={blurDataURL ? 'blur' : null}
      layout="responsive"
    />
  </span>
)

export default BlogImage
