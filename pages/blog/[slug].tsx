import { GetStaticProps, GetStaticPaths } from 'next'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import capitalize from 'remark-capitalize'
import readingTime from 'reading-time'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'
import styles from './post.module.scss'

const components = {
  // a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Button: dynamic(() => import('components/button')),
  Head,
}

export type Meta = {
  image: string
  publishedAt: string
  readingTime: {
    text: string
    minutes: number
    time: number
    words: number
  }
  summary: string
  title: string
}

type PostProps = {
  source: {
    compiledSource: string
    renderedOutput: string
    scope: Meta
  }
}

const Post = ({ source }: PostProps): JSX.Element => {
  const content = hydrate(source, { components })
  const { scope: meta } = source
  return (
    <Page>
      <PageHeader title={meta.title} description={meta.summary} />
      <p>{meta.readingTime.text}</p>
      <main>{content}</main>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(p => p.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(s => ({ params: { slug: s } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [slug, headings, capitalize],
      rehypePlugins: [],
    },
    scope: { ...data, readingTime: readingTime(content) },
  })

  return {
    props: {
      source: mdxSource,
    },
  }
}

export default Post
