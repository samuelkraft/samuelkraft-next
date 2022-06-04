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
  <Link href={`/work/${slug}`}>
    <MotionBox as="a" whileHover="hover">
      <Text as="h3">
        {title}{" "}
        <Box as="span" fontWeight="normal">
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
      </Text>
    </MotionBox>
  </Link>
);

export default Project;
