import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";
import { rehypeMetaAttribute } from "./src/lib/rehype-meta-attribute";
import { getTypes } from "./src/utils/getTypes";
import {
  getComponentName,
  getComponentPaths,
  getDocName,
  getDocPaths,
} from "./src/utils/fs";
import { createGitHubLink } from "./src/utils/github";

const getSlug = (sourceFileName: string) =>
  sourceFileName.replace(/\.mdx$/, "").replace(/\.docs$/, "");
const getPathName = (slug: string) =>
  getComponentPaths().find((x) => getComponentName(x) === slug) as string;

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => getSlug(doc._raw.sourceFileName).toLowerCase(),
  },
  types: {
    type: "json",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      const componentPathname = pathname?.replace("docs.mdx", "tsx");
      return getTypes(componentPathname)[slug];
    },
  },
  docsLink: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      return createGitHubLink(pathname.replace(/^\/.*design-system/i, ""));
    },
  },
  sourceLink: {
    type: "string",
    resolve: (doc) => {
      const slug = getSlug(doc._raw.sourceFileName);
      const pathname = getPathName(slug);
      const componentPathname = pathname?.replace("docs.mdx", "tsx");
      return createGitHubLink(
        componentPathname.replace(/^\/.*design-system/i, "")
      );
    },
  },
};

export const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: `design-system/src/components/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields,
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/content/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    category: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => getSlug(doc._raw.sourceFileName).toLowerCase(),
    },
    docsLink: {
      type: "string",
      resolve: (doc) => {
        const slug = getSlug(doc._raw.sourceFileName);
        const pathname = getDocPaths().find(
          (x) => getDocName(x) === slug
        ) as string;
        return createGitHubLink(pathname.replace(/^\/.*design-system/i, ""));
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "../",
  contentDirInclude: ["design-system/src/components", "docs/content"],
  documentTypes: [Component, Doc],
  mdx: {
    rehypePlugins: [rehypeMetaAttribute],
  },
});
