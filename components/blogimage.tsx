import Image from 'next/image'
import styles from './blogimage.module.scss'

type BlogImageProps = {
  src: string
  alt: string
}

const BlogImage = ({ src, alt }: BlogImageProps): JSX.Element => (
  <span className="block -mx-5 mb-5 overflow-hidden border-t border-b border-default sm:-mx-7 sm:mb-8 sm:border sm:rounded-xl">
    <Image src={src} alt={alt} width={2024} height={1012} layout="responsive" />
  </span>
)

export default BlogImage
