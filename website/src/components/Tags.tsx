import slugify from "slugify";
import Link from "next/link";
import { Box, Stack } from "design-system";

type TagsProps = {
  tags: string[];
};

const Tags = ({ tags }: TagsProps) => {
  if (!tags?.length) {
    return null;
  }
  return (
    <Stack as="ul" space={6}>
      {tags.map((tag) => {
        return (
          <Box as="li" key={tag}>
            <Link
              href={`/blog/tag/${slugify(tag, { lower: true })}`}
            >{`#${tag}`}</Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Tags;
