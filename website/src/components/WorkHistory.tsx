import { Box, Spacer, Stack, Text } from "design-system";
import Image, { StaticImageData } from "next/image";

import logoBitrefill from "/public/logos/bitrefill.png";
import logoTracklib from "/public/logos/tracklib.jpeg";
import logoStyleroom from "/public/logos/styleroom.png";
import logoTrailRoutes from "/public/logos/trail-routes.png";
import logoNotion from "/public/logos/notion.png";
import logoStrength from "/public/logos/strength.png";
import logoBlogStats from "/public/logos/blogstats.png";
import avatar from "/public/avatar.png";

import { Repo } from "lib/github";
import { IconFork, IconStar } from "./Icons";
import Link from "./Link";

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

type WorkplaceProps = {
  imageSrc: string | StaticImageData;
  title: string;
  description: string;
  url?: string;
  stars?: number;
  forks?: number;
};

const Workplace = ({
  imageSrc,
  title,
  description,
  url,
  stars,
  forks,
}: WorkplaceProps) => {
  const renderContent = () => {
    return (
      <Stack align="center" space={6} key={description} as="span">
        <Box
          as="span"
          borderRadius="rounded"
          overflow="hidden"
          lineHeight="0"
          flexShrink={0}
          boxShadow={
            title === "notion-blog-nextjs" || title === "Blog Stats"
              ? "border"
              : undefined
          }
        >
          <Image
            src={imageSrc}
            alt={description}
            width={48}
            height={48}
            layout="fixed"
          />
        </Box>
        <Stack direction="column" width="full">
          <Stack justify="space-between">
            <Text as="h4">{title}</Text>
            <Stack space={5}>
              {stars ? (
                <Stack space={2} align="center">
                  <Box color="textSecondary">
                    <IconStar width={16} height={16} />
                  </Box>
                  <Text color="textSecondary" size="small">
                    {stars}
                  </Text>
                </Stack>
              ) : null}
              {forks ? (
                <Stack space={2} align="center">
                  <Box color="textSecondary">
                    <IconFork width={16} height={16} />
                  </Box>
                  <Text color="textSecondary" size="small">
                    {forks}
                  </Text>
                </Stack>
              ) : null}
            </Stack>
          </Stack>
          <Text color="textSecondary">{description}</Text>
        </Stack>
      </Stack>
    );
  };
  if (url) {
    return (
      <Link href={url} unstyled>
        <Box
          display="block"
          backgroundColor={{ hover: "card" }}
          borderRadius="medium"
          paddingX={4}
          marginX="-4"
          paddingY={3}
          marginY="-3"
        >
          {renderContent()}
        </Box>
      </Link>
    );
  }
  return renderContent();
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
      {items.map((item) => (
        <Workplace key={item.description} {...item} />
      ))}
    </Stack>
  </Stack>
);

type WorkHistoryProps = {
  repos: Repo[];
};

const getRepoFromName = (name: string, repos: Repo[]) => {
  return repos.find((repo) => repo.name === name);
};

const WorkHistory = ({ repos }: WorkHistoryProps) => {
  const sideProjects = [
    {
      imageSrc: logoTrailRoutes,
      title: "Trail Routes",
      description: "Mapping platform built with react, mapbox, geojson",
      url: "https://routes.samuelkraft.com",
      stars: getRepoFromName("routes", repos)?.stargazers_count,
      forks: getRepoFromName("routes", repos)?.forks_count,
    },
    {
      imageSrc: logoNotion,
      title: "notion-blog-nextjs",
      description: "Next.js starter repo with a blog powered by Notion",
      url: getRepoFromName("notion-blog-nextjs", repos)?.html_url,
      stars: getRepoFromName("notion-blog-nextjs", repos)?.stargazers_count,
      forks: getRepoFromName("notion-blog-nextjs", repos)?.forks_count,
    },
    {
      imageSrc: avatar,
      title: "samuelkraft-next",
      description: "This website including full design system & docs site",
      url: getRepoFromName("samuelkraft-next", repos)?.html_url,
      stars: getRepoFromName("samuelkraft-next", repos)?.stargazers_count,
      forks: getRepoFromName("samuelkraft-next", repos)?.forks_count,
    },
    {
      imageSrc: logoBlogStats,
      title: "Blog Stats",
      description: "SwiftUI app for tracking likes & visits on my blog",
      url: getRepoFromName("BlogStats", repos)?.html_url,
      stars: getRepoFromName("BlogStats", repos)?.stargazers_count,
      forks: getRepoFromName("BlogStats", repos)?.forks_count,
    },
    {
      imageSrc: logoStrength,
      title: "Apple Watch Strength ",
      description: "iOS & WatchOS strength tracking app design",
      url: "https://samuelkraft.github.io/strength/",
    },
  ];

  return (
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
        description="I enjoy hacking on the side, especially things that are useful to me personally or just to learn new things."
        items={sideProjects}
      />
    </Stack>
  );
};

export default WorkHistory;
