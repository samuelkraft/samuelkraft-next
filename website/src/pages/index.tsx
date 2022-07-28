import type { GetStaticProps, NextPage } from "next";
import { Box, Grid, Stack, Text } from "design-system";
import * as styles from "./index.css";
import { Project, ProjectType } from "components/Project";
import Container from "components/Container";
import Link from "next/link";

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
      <Box paddingY={9} width="full">
        <Box position="relative" zIndex="1">
          <Text as="h1">Hi, I’m Samuel</Text>
          <Text size={{ small: "base", large: "large" }}>
            I design &amp; build delightful interfaces.{" "}
            <Link href="/about">Learn more →</Link>
          </Text>
        </Box>
      </Box>
      <Stack space={4} direction="column">
        <Text as="h2">Selected projects</Text>
        <Grid gap={7} templateColumns={{ large: "repeat(2, 1fr)" }}>
          {projects.map(Project)}
        </Grid>
      </Stack>
    </>
  );
};

export default Home;
