import Image from 'next/image'
import styles from './image.module.scss'

type CustomImageProps = {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
}

const CustomImage = ({ src, width, height, alt, caption }: CustomImageProps): JSX.Element => (
  <figure className={styles.wrapper}>
    <Image src={src} width={width} height={height} alt={alt} />
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
)

export default CustomImage
