import { Box, Text, Spacer, Stack } from "design-system";
import Link from "components/Link";
import { BoxProps, MotionBox } from "design-system/src/components/Box";
import Image, { StaticImageData } from "next/image";

export type ProjectType = {
  title: string;
  description: string;
  slug: string;
  media: StaticImageData | string;
  aspectRatio?: BoxProps["aspectRatio"];
};

export const Project = ({
  title,
  description,
  slug,
  media,
  aspectRatio = "3/2",
}: ProjectType) => (
  <Link href={`/project/${slug}`} key={title} unstyled>
    <MotionBox as="span" whileHover="hover">
      <Stack space={4} direction="column">
        <Box
          backgroundColor="black"
          width="full"
          aspectRatio={aspectRatio}
          borderRadius="huge"
          position="relative"
        >
          {media && (
            <Box position="absolute" bottom={0} left={4} right={4} top={0}>
              <Image src={media} layout="fill" alt={title} />
            </Box>
          )}
        </Box>
        <Text as="h3">
          <Stack
            as="span"
            space={{ small: 1, large: 3 }}
            direction={{ small: "column", large: "row" }}
          >
            <Box as="span" whiteSpace="nowrap">
              <Text transform="capitalize" size="inherit">
                {title}
              </Text>
            </Box>
            <Box
              as="span"
              fontWeight="normal"
              fontSize={{ small: "base", large: "inherit" }}
            >
              {description}
              <MotionBox
                marginLeft={3}
                as="div"
                display="inline-flex"
                variants={{
                  hover: {
                    x: 3,
                  },
                }}
              >
                →
              </MotionBox>
            </Box>
          </Stack>
        </Text>
      </Stack>
    </MotionBox>
  </Link>
);

export default Project;
