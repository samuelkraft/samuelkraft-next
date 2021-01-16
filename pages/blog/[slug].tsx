import { GetStaticProps, GetStaticPaths } from 'next'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import Head from 'next/head'
import capitalize from 'remark-capitalize'
import readingTime from 'reading-time'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'
import styles from './post.module.scss'

const CustomLink = (props: { href: string }) => {
  const { href } = props

  /* eslint-disable */
  if (href?.startsWith('/')) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
  /* eslint-enable */
}

const components = {
  Head,
  a: CustomLink,
  Image,
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
  slug: string
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
  const formattedDate = new Date(meta.publishedAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  const seoTitle = `${meta.title} - Samuel Kraft`
  const seoDesc = `${meta.summary}`

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/blog/${meta.slug}`,
          description: seoDesc,
          images: [
            {
              url: meta.image,
              alt: meta.title,
            },
          ],
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader title={meta.title}>
        <p className={styles.meta}>
          Published on {formattedDate} &middot; {meta.readingTime.text}
        </p>
      </PageHeader>

      <article className={styles.article}>{content}</article>
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
      remarkPlugins: [capitalize],
      rehypePlugins: [],
    },
    scope: { ...data, readingTime: readingTime(content), slug: params.slug },
  })

  return {
    props: {
      source: mdxSource,
    },
  }
}

export default Post
