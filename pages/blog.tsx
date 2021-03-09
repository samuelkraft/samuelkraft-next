import { useState, useCallback } from 'react'
import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import { NextSeo } from 'next-seo'
import readingTime from 'reading-time'
import { Search } from 'react-feather'
import debounce from 'lodash.debounce'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Subscribe from 'components/subscribe'
import BlogImage from 'components/blogimage'
import Input from 'components/input'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'
import * as gtag from 'lib/gtag'

// Types
import type { Meta } from 'pages/blog/[slug]'

import styles from './blog.module.scss'

type BlogProps = {
  posts: Array<{ content: string; filePath: string; meta: Meta }>
}

const Blog = ({ posts }: BlogProps): JSX.Element => {
  const [currentSearch, setCurrentSearch] = useState('')
  const trackSearch = useCallback(
    debounce((value: string) => gtag.search(value), 500),
    [],
  )
  const seoTitle = 'Blog | Samuel Kraft'
  const seoDesc = 'I write about development, design, React, CSS, animation and more!'
  const filteredPosts = posts
    .sort((a, b) => new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime())
    .filter(({ meta: { title, summary } }) => {
      const searchString = `${title.toLowerCase()} ${summary.toLowerCase()}`
      return searchString.includes(currentSearch.toLowerCase())
    })

  const handleInputChange = e => {
    const searchString = e.target.value
    if (searchString !== '') {
      trackSearch(searchString) // Save what people are interested in reading
    }
    return setCurrentSearch(searchString)
  }

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
      <PageHeader title="Blog" description={seoDesc}>
        <div className={styles.inputWrapper}>
          <Input className={styles.input} value={currentSearch} onChange={handleInputChange} placeholder="Search posts…" type="search" />
          <Search className={styles.inputIcon} />
        </div>
      </PageHeader>
      <ul className={styles.list}>
        {filteredPosts.length === 0 && <p className={styles.noResults}>🧐 No posts found</p>}
        {filteredPosts.map(post => {
          const {
            meta: { summary, title, readingTime: readTime, publishedAt, image },
          } = post
          const formattedDate = new Date(publishedAt).toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
          const slug = post.filePath.replace(/\.mdx?$/, '')
          return (
            <li key={post.filePath}>
              {image && (
                <Link as={`/blog/${slug}`} href="/blog/[slug]">
                  <a aria-label={title}>
                    <BlogImage src={image} alt={title} />
                  </a>
                </Link>
              )}
              <Link as={`/blog/${slug}`} href="/blog/[slug]">
                <a className={styles.title}>{title}</a>
              </Link>
              <p className={styles.summary}>{summary}</p>
              <p className={styles.meta}>
                Published on <time dateTime={publishedAt}>{formattedDate}</time> &middot; {readTime.text}
              </p>
            </li>
          )
        })}
      </ul>
      <Subscribe title="Subscribe to the newsletter" />
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
