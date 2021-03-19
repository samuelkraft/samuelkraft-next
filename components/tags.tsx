import slugify from 'slugify'
import Link from 'next/link'
import type { TagsType } from 'pages/blog/[slug]'

import styles from './tags.module.scss'

type TagsProps = {
  tags: TagsType
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
