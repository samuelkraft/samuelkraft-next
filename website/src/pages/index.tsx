import type { NextPage } from "next";
import { Box, Text } from "design-system";
import * as styles from "./index.css";
import { Project, ProjectType } from "components/Project";
import Container from "components/Container";

export const projects: ProjectType[] = [
  {
    title: "Tracklib",
    description: "Clear samples from real music",
    slug: "tracklib",
    media: "",
  },
  {
    title: "Bitrefill",
    description: "Live on Crypto",
    slug: "bitrefill",
    media: "",
  },
  {
    title: "Trail Routes",
    description: "Curated running routes",
    slug: "trail-routes",
    media: "",
  },
  {
    title: "Styleroom",
    description: "Home design Inspiration",
    slug: "styleroom",
    media: "",
  },
  {
    title: "Design System",
    description: "TBD",
    slug: "design-system",
    media: "",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Box
        backgroundColor="brand"
        paddingY={9}
        width="full"
        className={styles.hero}
      >
        <Container width="blog">
          <Text as="h1" textAlign="center">
            Samuel Kraft
          </Text>
          <Text textAlign="center" size="large">
            Frontend developer &amp; product designer excited by delightful
            interfaces and endurance sports.
          </Text>
        </Container>
      </Box>
      <Container>
        <Text as="h2">Selected projects</Text>
        {projects.map(Project)}
      </Container>
    </>
  );
};

export default Home;
