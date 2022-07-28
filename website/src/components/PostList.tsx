import type { Post } from "contentlayer/generated";
import { Box, Stack, Text } from "design-system";
import Link from "next/link";
import { formatDate } from "lib/formatdate";
import Image from "next/image";

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <Stack direction="column" as="ul" space={6}>
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
        <Box as="li" key={slug} listStyle="none">
          {image && (
            <Link as={`/blog/${slug}`} href="/blog/[slug]">
              <a aria-label={title}>
                <Image
                  src={image}
                  alt={title}
                  width={2024}
                  height={1012}
                  layout="responsive"
                />
              </a>
            </Link>
          )}
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a>
              <Text as="h2">{title}</Text>
            </a>
          </Link>
          <Text size="large">{summary}</Text>
          <Text size="base">
            Published on{" "}
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>{" "}
            &middot; {readTime.text}
          </Text>
        </Box>
      );
    })}
  </Stack>
);

export default PostList;
