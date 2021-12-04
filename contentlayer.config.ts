import { defineDocumentType, makeSource, ComputedFields } from 'contentlayer/source-files' // eslint-disable-line
import readingTime from 'reading-time'
import rehypePrism from 'rehype-prism-plus'
import codeTitle from 'remark-code-titles'

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
  readingTime: { type: 'json', resolve: doc => readingTime(doc.body.raw) },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    updatedAt: { type: 'string', required: false },
    og: { type: 'string', required: true },
    image: { type: 'string', required: true },
    tags: { type: 'json', required: false },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'data/blog',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [codeTitle],
  },
})
