import slugify from 'slugify'
import Link from 'next/link'

import styles from './tags.module.scss'

type TagsProps = {
  tags: string[]
}

const Tags = ({ tags }: TagsProps): JSX.Element | null => {
  if (!tags?.length) {
    return null
  }
  return (
    <ul className={styles.tags}>
      {tags.map(tag => {
        return (
          <li key={tag}>
            <Link href={`/blog/tag/${slugify(tag, { lower: true })}`}>{`#${tag}`}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Tags
