import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files"; // eslint-disable-line
import readingTime from "reading-time";
import rehypePrism from "rehype-prism-plus";
import codeTitle from "remark-code-titles";

const getSlug = (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "");

const projectComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}.png`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/projects/${getSlug(doc)}.png`,
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: projectComputedFields,
}));

const postComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc),
  },
  image: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/image.png`,
  },
  og: {
    type: "string",
    resolve: (doc) => `/blog/${getSlug(doc)}/og.png`,
  },
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    updatedAt: { type: "string", required: false },
    tags: { type: "json", required: false },
  },
  computedFields: postComputedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [codeTitle],
  },
});
