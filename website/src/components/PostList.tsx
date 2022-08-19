import type { Post } from "contentlayer/generated";
import { Box, Stack, Text } from "design-system";
import Link from "components/Link";
import { formatDate } from "lib/formatdate";
import Image from "next/image";

export const PostImage = ({ src, alt }: { src: string; alt: string }) => (
  <Box overflow="hidden" borderRadius="huge" boxShadow="border">
    <Image src={src} alt={alt} width={2024} height={1012} layout="responsive" />
  </Box>
);

const Post = ({
  summary,
  title,
  readingTime: readTime,
  publishedAt,
  image,
  slug,
}: Post) => {
  return (
    <Box as="li" key={slug} listStyle="none">
      <Stack direction="column" space={5}>
        {image && (
          <Link href={`/blog/${slug}`}>
            <PostImage src={image} alt={title} />
          </Link>
        )}
        <Stack direction="column" space={2}>
          <Link href={`/blog/${slug}`} unstyled>
            <Text as="h2">{title}</Text>
          </Link>
          <Stack direction="column" space={3}>
            <Text size="base">{summary}</Text>
            <Text size="small" color="textSecondary">
              Published on{" "}
              <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>{" "}
              &middot; {readTime.text}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

type PostListProps = {
  posts: Post[];
};

const PostList = ({ posts }: PostListProps) => (
  <Stack direction="column" as="ul" space={9}>
    {posts.map(Post)}
  </Stack>
);

export default PostList;
