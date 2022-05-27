import { useState, useCallback } from 'react'
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import { Search } from 'react-feather'
import debounce from 'lodash.debounce'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Subscribe from 'components/subscribe'
import Input from 'components/input'
import PostList from 'components/postlist'

// Utils
import * as gtag from 'lib/gtag'
import { pick } from '@contentlayer/client'
import { allPosts, Post } from 'contentlayer/generated'

import styles from './index.module.scss'

type BlogProps = {
  posts: Post[]
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
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(({ title, summary, tags }) => {
      const searchString = `${title.toLowerCase()} ${summary.toLowerCase()} ${tags?.join(' ')}`
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
      <PostList posts={filteredPosts} />
      <Subscribe title="Subscribe to the newsletter" />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime']))

  return {
    props: { posts },
  }
}

export default Blog
