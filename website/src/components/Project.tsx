import { Box, Text, Spacer, Stack } from "design-system";
import Link from "next/link";
import { motion } from "framer-motion";
import { BoxProps } from "design-system/src/components/Box";

const MotionBox = motion(Box);

export type ProjectType = {
  title: string;
  description: string;
  slug: string;
  media: string;
  aspectRatio?: BoxProps["aspectRatio"];
};

export const Project = ({
  title,
  description,
  slug,
  media,
  aspectRatio = "3/2",
}: ProjectType) => (
  <Link href={`/work/${slug}`} key={title}>
    <MotionBox as="a" whileHover="hover">
      <Stack space={4} direction="column">
        <Box
          backgroundColor="textSecondary"
          width="full"
          aspectRatio={aspectRatio}
        />
        <Text as="h3">
          <Stack
            as="span"
            space={{ small: 1, large: 3 }}
            direction={{ small: "column", large: "row" }}
          >
            <Box as="span" whiteSpace="nowrap">
              {title}
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
