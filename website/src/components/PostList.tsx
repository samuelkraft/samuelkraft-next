import type { Post } from "contentlayer/generated";
import { Box, Text } from "design-system";
import Link from "next/link";
import { formatDate } from "lib/formatdate";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <Box as="ul">
    {posts.map((post) => {
      const {
        summary,
        title,
        readingTime: readTime,
        publishedAt,
        image,
        slug,
      } = post;
      return (
        <Box as="li" key={slug}>
          {image && (
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a aria-label={title}>{image}</a>
            </Link>
          )}
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>{title}</a>
          </Link>
          <Text>{summary}</Text>
          <Text size="base">
            Published on{" "}
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>{" "}
            &middot; {readTime.text}
          </Text>
        </Box>
      );
    })}
  </Box>
);

export default PostList;
