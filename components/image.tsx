import Image from 'next/image'
import styles from './image.module.scss'

type CustomImageProps = {
  src: string
  width: number
  height: number
  alt: string
  caption?: string
  layout?: 'intrinsic' | 'fixed' | 'responsive'
}
const CustomImage = ({ src, width, height, alt, caption, layout = 'intrinsic' }: CustomImageProps): JSX.Element => (
  <figure className={styles.wrapper}>
    <div>
      <Image src={src} width={width} height={height} alt={alt} layout={layout} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </div>
  </figure>
)

export default CustomImage
