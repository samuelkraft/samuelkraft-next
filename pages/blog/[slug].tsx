import { GetStaticProps, GetStaticPaths } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks' // eslint-disable-line
import Head from 'next/head'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'

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
import Parallax from 'components/parallax'
import Tags from 'components/tags'
import PostList from 'components/postlist'
import Button from 'components/button'
import { RatingPlayground } from 'components/blog/rating'

// Utils
import { pick } from '@contentlayer/client'
import { allPosts, Post as PostType } from 'contentlayer/generated'

import styles from './post.module.scss'

const ParallaxCover = dynamic(() => import('components/blog/parallaxcover'))

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
  Parallax,
  Rating: RatingPlayground,
}

type PostProps = {
  post: PostType
  related: PostType[]
}

const Post = ({ post, related }: PostProps): JSX.Element => {
  const Component = useMDXComponent(post.body.code)

  const formattedPublishDate = new Date(post.publishedAt).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
  const formattedUpdatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      })
    : null

  const seoTitle = `${post.title} | Samuel Kraft`
  const seoDesc = `${post.summary}`
  const url = `https://samuelkraft.com/blog/${post.slug}`

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
              url: post.og
                ? `https://samuelkraft.com${post.og}`
                : `https://og-image.samuelkraft.vercel.app/${encodeURIComponent(post.title)}?desc=${encodeURIComponent(
                    seoDesc,
                  )}&theme=dark.png`,
              alt: post.title,
            },
          ],
          site_name: 'Samuel Kraft',
          type: 'article',
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: ['https://samuelkrat.com'],
          },
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      {post.slug === 'spring-parallax-framer-motion-guide' ? (
        <ParallaxCover />
      ) : (
        <>{post.image && <BlogImage src={post.image} alt={post.title} className={styles.image} />}</>
      )}
      <PageHeader title={post.title} compact>
        <p className={styles.meta}>
          Published on <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
          {post.updatedAt ? ` (Updated ${formattedUpdatedDate})` : ''} <span>&middot;</span> {post.readingTime.text}
          <HitCounter slug={post.slug} />
        </p>
      </PageHeader>
      <article className={styles.article}>
        <Component components={components} />
      </article>
      <div className={styles.buttons}>
        <LikeButton slug={post.slug} />
      </div>
      <Tags tags={post.tags} />
      <Subscribe className={styles.subscribe} />
      {related.length > 0 && (
        <>
          <h2 className={styles.relatedHeading}>Related Posts</h2>
          <PostList posts={related} />
        </>
      )}
      <div className={styles.buttons}>
        <Button href="/blog">Back to the blog</Button>
      </div>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find(p => p.slug === params?.slug)
  const related = allPosts
    /* remove current post */
    .filter(p => p.slug !== params?.slug)
    /* Find other posts where tags are matching */
    .filter(p => p.tags?.some(tag => post.tags?.includes(tag)))
    /* return the first three */
    .filter((_, i) => i < 3)
    /* only return what's needed to render the list */
    .map(p => pick(p, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime']))

  return {
    props: {
      post,
      related,
    },
  }
}

export default Post
