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
import { NextSeo } from 'next-seo'
import mdxPrism from 'mdx-prism'
import codeTitle from 'remark-code-titles'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import CustomImage from 'components/image'
import Warning from 'components/warning'
import HitCounter from 'components/hitcounter'
import LikeButton from 'components/likebutton'
import { NowPlayingIcon } from 'components/nowplaying'
import Subscribe from 'components/subscribe'
import BlogImage from 'components/blogimage'
import SegmentedControl from 'components/segmentedcontrol'
import Messages, { TailBreakdown } from 'components/messages'
import AnimatedMessages from 'components/animatedmessages'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'
import { formatDate } from 'lib/formatdate'

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
  Image: CustomImage,
  Warning,
  Link: CustomLink,
  NowPlayingIcon,
  SegmentedControl,
  Messages,
  AnimatedMessages,
  TailBreakdown,
}

export type Meta = {
  og?: string
  image?: string
  publishedAt: string
  updatedAt?: string
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

  const seoTitle = `${meta.title} | Samuel Kraft`
  const seoDesc = `${meta.summary}`
  const url = `https://samuelkraft.com/blog/${meta.slug}`

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: seoDesc,
          images: [
            {
              url: meta.og
                ? `https://samuelkraft.com${meta.og}`
                : `https://og-image.samuelkraft.vercel.app/${encodeURIComponent(meta.title)}?desc=${encodeURIComponent(
                    seoDesc,
                  )}&theme=dark.png`,
              alt: meta.title,
            },
          ],
          site_name: 'Samuel Kraft',
          type: 'article',
          article: {
            publishedTime: meta.publishedAt,
            modifiedTime: meta.updatedAt,
            authors: ['https://samuelkrat.com'],
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      {meta.image && <BlogImage src={meta.image} alt={meta.title} />}
      <PageHeader title={meta.title} compact>
        <p className={styles.meta}>
          Published on <time dateTime={meta.publishedAt}>{formatDate(meta.publishedAt)}</time>
          {meta.updatedAt ? ` (Updated ${formatDate(meta.updatedAt)})` : ''} <span>&middot;</span> {meta.readingTime.text}
          <HitCounter slug={meta.slug} />
        </p>
      </PageHeader>
      <article className={styles.article}>{content}</article>
      <div className={styles.buttons}>
        <LikeButton slug={meta.slug} />
      </div>
      <Subscribe />
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
      remarkPlugins: [capitalize, codeTitle],
      rehypePlugins: [mdxPrism],
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
