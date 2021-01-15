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

import styles from './blog.module.scss'

type BlogProps = {
  posts: any
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
      <ul>
        {posts.map(post => {
          return (
            <li key={post.filePath}>
              <Link as={`/blog/${post.filePath.replace(/\.mdx?$/, '')}`} href="/blog/[slug]">
                <a>{post.meta.title}</a>
              </Link>
              <p>{post.meta.readingTime.text}</p>
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
