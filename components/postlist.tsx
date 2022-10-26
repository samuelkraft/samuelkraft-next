import Link from 'next/link'

// Components
import BlogImage from 'components/blogimage'
import ParallaxCover from 'components/blog/parallaxcover'

// Utils
import { formatDate } from 'lib/formatdate'
import type { Post } from 'contentlayer/generated'

import styles from './postlist.module.scss'

type PostListProps = {
  posts: Post[]
}

const PostList = ({ posts }: PostListProps): JSX.Element => (
  <ul className={styles.list}>
    {posts.length === 0 && <p className={styles.noResults}>🧐 No posts found</p>}
    {posts.map(post => {
      const { summary, title, readingTime: readTime, publishedAt, image, slug } = post
      return (
        <li key={slug}>
          {slug === 'spring-parallax-framer-motion-guide' ? (
            <Link href="/blog/spring-parallax-framer-motion-guide">
              <ParallaxCover />
            </Link>
          ) : (
            <>
              {image && (
                <Link as={`/blog/${slug}`} href="/blog/[slug]" aria-label={title}>
                  <BlogImage src={image} alt={title} />
                </Link>
              )}
            </>
          )}
          <Link as={`/blog/${slug}`} href="/blog/[slug]" className={styles.title}>
            {title}
          </Link>
          <p className={styles.summary}>{summary}</p>
          <p className={styles.meta}>
            Published on <time dateTime={publishedAt}>{formatDate(publishedAt)}</time> &middot; {readTime.text}
          </p>
        </li>
      )
    })}
  </ul>
)

export default PostList
