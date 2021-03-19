import fs from 'fs'
import { GetStaticProps, GetStaticPaths } from 'next'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import slugify from 'slugify'
import { useRouter } from 'next/router'

// Components
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import PostList from 'components/postlist'

// Utils
import { postFilePaths, POSTS_PATH } from 'utils/mdxutils'

// Types
import type { BlogPosts } from 'pages/blog'
import type { Meta } from 'pages/blog/[slug]'

type TagProps = {
  posts: BlogPosts
}

const Tag = ({ posts }: TagProps): JSX.Element => {
  const { query } = useRouter()
  const { slug } = query as { slug: string }

  const FormattedSlug = () => <span style={{ textTransform: 'capitalize' }}>{slug.replace('-', ' ')}</span>

  return (
    <Page>
      <PageHeader
        title={<FormattedSlug />}
        description={
          <>
            Posts &amp; tutorials about <FormattedSlug />
          </>
        }
      />
      <PostList posts={posts} />
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const {
        data: { tags },
      } = matter(source)

      return tags
    })
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue), [])
    .filter(Boolean)
    .map(tag => `/blog/tag/${slugify(tag, { lower: true })}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const posts = postFilePaths
    .map(filePath => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
      const { content, data } = matter(source)

      const { slug } = context.params

      if (data.tags?.some(x => slugify(x, { lower: true }) === slug)) {
        return {
          content,
          meta: { ...data, readingTime: readingTime(content) } as Meta,
          filePath,
        }
      }

      return null
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.meta.publishedAt).getTime() - new Date(a.meta.publishedAt).getTime())

  return { props: { posts } }
}

export default Tag
