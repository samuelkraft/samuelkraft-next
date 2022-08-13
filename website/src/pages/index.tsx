import type { GetStaticProps, NextPage } from "next";
import { Box, Grid, Spacer, sprinkles, Stack, Text } from "design-system";
import * as styles from "./index.css";
import { Project, ProjectType } from "components/Project";
import Container from "components/Container";
import avatar from "/public/avatar.png";

import Link from "next/link";
import Image from "next/image";

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

const Home: NextPage = () => {
  return (
    <>
      <Box paddingY={9}>
        <Stack space={3} direction="column">
          <Stack space={5} direction="column">
            <Image
              src={avatar}
              alt="Samuel Kraft Avatar"
              width="64"
              height="64"
              layout="fixed"
              priority
              className={sprinkles({
                borderRadius: "rounded",
                overflow: "hidden",
              })}
            />
            <Text as="h1">Hi, I’m Samuel</Text>
          </Stack>
          <Text size={{ small: "base", large: "large" }}>
            I design &amp; build delightful interfaces.{" "}
            <Link href="/about">Learn more →</Link>
          </Text>
        </Stack>
      </Box>
      <Stack space={4} direction="column">
        <Text as="h2">Selected projects</Text>
        <Grid gap={7} templateColumns={{ large: "repeat(2, 1fr)" }}>
          {projects.filter((_, i) => i < projects.length - 1).map(Project)}
        </Grid>
        <Spacer space={3} />
        {projects.slice(-1).map((project) => (
          <Project
            key={project.title}
            aspectRatio={{ large: "2.35/1" }}
            {...project}
          />
        ))}
      </Stack>
    </>
  );
};

export default Home;
