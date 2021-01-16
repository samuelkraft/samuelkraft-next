import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { NextSeo } from 'next-seo'
import readingTime from 'reading-time'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'

// Types
import type { Meta } from 'pages/blog/[slug]'

import styles from './blog.module.scss'

type BlogProps = {
  posts: Array<{ content: string; filePath: string; meta: Meta }>
}

const Blog = ({ posts }: BlogProps): JSX.Element => {
  const seoTitle = 'Blog | Samuel Kraft'
  const seoDesc = 'My personal blog'
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/blog/`,
          description: seoDesc,
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader title="Blog" description={seoDesc} />
      <ul className={styles.list}>
        {posts.map(post => {
          const {
            meta: { summary, title, readingTime: readTime, publishedAt },
          } = post
          const formattedDate = new Date(publishedAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
          return (
            <li key={post.filePath}>
              <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href="/blog/[slug]">
                <a className={styles.title}>{title}</a>
              </Link>
              <p className={styles.summary}>{summary}</p>
              <p className={styles.meta}>
                Published on {formattedDate} &middot; {readTime.text}
              </p>
            </li>
          )
        })}
      </ul>
    </Page>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      meta: { ...data, readingTime: readingTime(content) },
      filePath,
    }
  })

  return { props: { posts } }
}

export default Blog
