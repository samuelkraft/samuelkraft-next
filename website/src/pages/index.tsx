import type { NextPage } from "next";
import { Box, Stack, Text } from "design-system";
import * as styles from "./index.css";
import { Project, ProjectType } from "components/Project";
import Container from "components/Container";

export const projects: ProjectType[] = [
  {
    title: "Bitrefill",
    description: "Live on Crypto",
    slug: "bitrefill",
    media: "",
  },
  {
    title: "Tracklib",
    description: "Clear samples from real music",
    slug: "tracklib",
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

const Video = () => (
  <div className={styles.videoWrapper}>
    <video autoPlay muted loop id="myVideo" className={styles.video}>
      <source src="/blur.mp4" type="video/mp4" />
    </video>
  </div>
);

const Home: NextPage = () => {
  return (
    <>
      <Box
        backgroundColor="brand"
        paddingY={9}
        width="full"
        className={styles.hero}
      >
        <Video />
        <Box position="relative" zIndex="1">
          <Container>
            <Box as="h1" className={styles.h1}>
              Samuel Kraft
            </Box>
          </Container>
          <Container width="blog">
            <Text
              textAlign={{ medium: "center" }}
              size={{ small: "base", large: "large" }}
            >
              Frontend developer &amp; product designer excited by delightful
              interfaces and endurance sports.
            </Text>
          </Container>
        </Box>
      </Box>
      <Container>
        <Stack space={4} direction="column">
          <Text as="h2">Selected projects</Text>
          <Box
            display="grid"
            gridGap={7}
            gridTemplateColumns={{ large: "repeat(2, 1fr)" }}
          >
            {projects.map(Project)}
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
