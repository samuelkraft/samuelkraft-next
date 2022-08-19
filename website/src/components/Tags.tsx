import slugify from "slugify";
import Link from "components/Link";
import { Box, Stack, Text } from "design-system";

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
            <Link href={`/blog/tag/${slugify(tag, { lower: true })}`} unstyled>
              <Text
                color="textSecondary"
                size="base"
                decoration={{ hover: "underline" }}
              >{`#${tag}`}</Text>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Tags;
