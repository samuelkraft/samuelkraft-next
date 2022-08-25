import type { Post } from "contentlayer/generated";
import { Box, Stack, Text } from "design-system";
import Link from "components/Link";
import { formatDate } from "lib/formatdate";
import Image from "next/image";
import { ReadingTime } from "pages/blog/[slug]";

export const PostImage = ({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) => (
  <Box overflow="hidden" borderRadius="huge" boxShadow="border">
    <Image
      src={src}
      alt={alt}
      width={2024}
      height={1012}
      layout="responsive"
      priority={priority}
    />
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
            <Text>{summary}</Text>
            <Stack space={5}>
              <Text color="textSecondary">
                Published on{" "}
                <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
              </Text>
              <ReadingTime time={readTime.text} />
            </Stack>
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
