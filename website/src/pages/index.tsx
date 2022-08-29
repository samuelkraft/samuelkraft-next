import type { GetStaticProps, NextPage } from "next";
import { Box, sprinkles, Stack, Text } from "design-system";
import { Project } from "components/Project";
import avatar from "/public/avatar.png";
import Image from "next/image";
import Link from "components/Link";

import { allProjects, Project as ProjectType } from "contentlayer/generated";

type HomeProps = {
  projects: ProjectType[];
};

const Home: NextPage = ({ projects }: HomeProps) => {
  return (
    <>
      <Box paddingY={9}>
        <Stack space={1} direction="column">
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
          <Text size="base" color="textSecondary" lineHeight="1.75">
            I design &amp; build delightful interfaces.
            <br />
            <Link href="/about">Learn more →</Link>
          </Text>
        </Stack>
      </Box>
      <Stack space={4} direction="column">
        <Text as="h2">Selected projects</Text>
        <Stack space={7} direction="column">
          {projects.map((project) => (
            <Project
              key={project.slug}
              title={project.slug}
              description={project.title}
              media={project.image}
              slug={project.slug}
              aspectRatio="2.35/1"
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { projects: allProjects },
  };
};

export default Home;
