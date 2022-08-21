import type { NextPage } from "next";
import { Box, Grid, Spacer, sprinkles, Stack, Text } from "design-system";
import { Project, ProjectType } from "components/Project";
import avatar from "/public/avatar.png";
import Image from "next/image";
import Link from "components/Link";
import bitrefillImage from "/public/projects/bitrefill.png";
import tracklibImage from "/public/projects/tracklib.png";
import routesImage from "/public/projects/routes.png";
import styleroomImage from "/public/projects/styleroom.png";
import designSystemImage from "/public/projects/designsystem.png";

export const projects: ProjectType[] = [
  {
    title: "Bitrefill",
    description: "Live on Crypto",
    slug: "bitrefill",
    media: bitrefillImage,
  },
  {
    title: "Tracklib",
    description: "Clear samples from real music",
    slug: "tracklib",
    media: tracklibImage,
  },
  {
    title: "Trail Routes",
    description: "Curated running routes",
    slug: "trail-routes",
    media: routesImage,
  },
  {
    title: "Styleroom",
    description: "Home design Inspiration",
    slug: "styleroom",
    media: styleroomImage,
  },
  {
    title: "Design System",
    description: "TBD",
    slug: "design-system",
    media: designSystemImage,
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Box paddingY={9}>
        <Stack space={2} direction="column">
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
          <Text size="base" color="textSecondary">
            I design &amp; build delightful interfaces.
            <br />
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
