import { Box, Text, Spacer, Stack } from "design-system";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export type ProjectType = {
  title: string;
  description: string;
  slug: string;
  media: string;
};

export const Project = ({ title, description, slug, media }: ProjectType) => (
  <Link href={`/work/${slug}`} key={title}>
    <MotionBox as="a" whileHover="hover">
      <Stack space={4} direction="column">
        <Box backgroundColor="textSecondary" width="full" aspectRatio="3/2" />
        <Text as="h3">
          <Stack
            as="span"
            space={{ small: 1, large: 3 }}
            direction={{ small: "column", large: "row" }}
          >
            {title}
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
