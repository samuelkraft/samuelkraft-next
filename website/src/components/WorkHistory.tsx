import { Box, Stack, Text } from "design-system";
import Image, { StaticImageData } from "next/image";

import logoBitrefill from "/public/logos/bitrefill.png";
import logoTracklib from "/public/logos/tracklib.jpeg";
import logoStyleroom from "/public/logos/styleroom.png";
import logoTrailRoutes from "/public/logos/trail-routes.png";
import logoNotion from "/public/logos/notion.png";
import logoStrength from "/public/logos/strength.png";
import avatar from "/public/avatar.png";
import { ReactNode } from "react";

const workplaces = [
  {
    imageSrc: logoBitrefill,
    title: "Design Engineer",
    description: "Bitrefill · 2021 - Current",
  },
  {
    imageSrc: logoTracklib,
    title: "Frontend Developer",
    description: "Tracklib · 2016 - 2021",
  },
  {
    imageSrc: logoStyleroom,
    title: "Design Engineer",
    description: "StyleRoom · 2013 - 2016",
  },
  {
    imageSrc: avatar,
    title: "Freelance",
    description: "Testfreaks, Eventomatic, etc · 2013 - Current",
  },
];

const sideProjects = [
  {
    imageSrc: logoTrailRoutes,
    title: "Trail Routes",
    description: "Mapping platform built with react, mapbox, geojson",
  },
  {
    imageSrc: avatar,
    title: "samuelkraft-next",
    description: "This website including full design system & docs site",
  },
  {
    imageSrc: logoNotion,
    title: "notion-blog-nextjs",
    description: "Next.js starter repo with a blog powered by Notion",
  },
  {
    imageSrc: logoStrength,
    title: "Apple Watch Strength ",
    description: "iOS & WatchOS strength tracking app design",
  },
];

type WorkplaceProps = {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
};

const Workplace = ({ imageSrc, title, description }: WorkplaceProps) => {
  return (
    <Stack align="center" space={6} key={description}>
      <Box
        borderRadius="rounded"
        overflow="hidden"
        lineHeight="0"
        flexShrink={0}
        boxShadow={title === "notion-blog-nextjs" ? "border" : undefined}
      >
        <Image
          src={imageSrc}
          alt={description}
          width={48}
          height={48}
          layout="fixed"
        />
      </Box>
      <Stack direction="column">
        <Text as="h4">{title}</Text>
        <Text color="textSecondary">{description}</Text>
      </Stack>
    </Stack>
  );
};

type WorkplacesProps = {
  title: string;
  description: string;
  items: WorkplaceProps[];
};

const Workplaces = ({ title, description, items }: WorkplacesProps) => (
  <Stack direction="column" space={6}>
    <Stack direction="column" space={2}>
      <Text as="h2">{title}</Text>
      <Text>{description}</Text>
    </Stack>
    <Stack direction="column" space={6}>
      {items.map(Workplace)}
    </Stack>
  </Stack>
);

const WorkHistory = () => (
  <Stack direction="column" space={8}>
    <Workplaces
      title="Work experience"
      description={`${
        new Date().getFullYear() - 2013
      }+ years experience working with
      startups, both in design & egineering.`}
      items={workplaces}
    />
    <Workplaces
      title="Side projects"
      description="I enjoy hacking on something on the side, especially things I use
      personally like Trail Routes or for learning new things."
      items={sideProjects}
    />
  </Stack>
);

export default WorkHistory;
