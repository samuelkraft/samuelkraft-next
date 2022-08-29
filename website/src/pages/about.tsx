import type { NextPage } from "next";
import { Text, Stack, Grid, Box, Tooltip } from "design-system";

import photoAvatar from "/public/photos/hey_thats_me.jpg";
import photoRace from "/public/photos/sometimes_i_race.jpg";
import photoTravel from "/public/photos/travelling.jpg";

import Photo from "components/Photo";
import WorkHistory from "components/WorkHistory";
import NowPlaying from "components/NowPlaying";
import Activity, { ActivityType } from "components/Activity";
import DesignBuildSticker from "components/DesignBuildSticker";
import Link from "components/Link";

import { getActivities } from "lib/strava";
import { getRepos, Repo } from "lib/github";

type AboutProps = {
  lastActivity: ActivityType;
  repos: Repo[];
};

const About: NextPage<AboutProps> = ({ lastActivity, repos }) => {
  return (
    <Grid gap={8} templateColumns={{ medium: "repeat(2, 1fr)" }}>
      <Box isolation="isolate" position="relative">
        <Box position="absolute" style={{ top: 200 }} right={9} zIndex="2">
          <DesignBuildSticker />
        </Box>
        <Stack direction="column" space={6}>
          <Photo
            meta="Photo 0155 (2021-07-12)"
            alt="Samuel Kraft"
            src={photoAvatar}
            width={350}
            height={215}
            rotate={2}
            zIndex={1}
            index={0}
          />
          <Photo
            meta="Photo 0344 (2022-06-24)"
            alt="Triathlon racing"
            src={photoRace}
            width={300}
            height={402}
            rotate={-12}
            flipDirection="right"
            index={1}
          />
          <Photo
            meta="Photo 0445 (2021-04-12)"
            alt="Samuel travelling in the desert"
            src={photoTravel}
            width={300}
            height={250}
            rotate={7}
            index={2}
          />
          <Activity activity={lastActivity} />
          <NowPlaying />
        </Stack>
      </Box>
      <Stack direction="column" space={8}>
        <Stack direction="column" space={6}>
          <Stack direction="column" space={1}>
            <Text size="small" transform="uppercase" color="brand">
              About me
            </Text>
            <Text as="h1">Samuel Kraft</Text>
            <Text as="h2" size="large" color="textSecondary" weight="normal">
              Design Engineer
            </Text>
          </Stack>
          <Text>
            Hi there! I’m a designer &amp; frontend developer that loves to
            build great products with delightful interfaces ✨
          </Text>
          <Text>
            I enjoy the realm between design and code, working on things like
            Design Systems, CSS, Building accessible components, UI Animation
            and making interfaces feel fun and human!
          </Text>
          <Text>
            Currently working at{" "}
            <Link href="https://bitrefill.com/">Bitrefill</Link>, making living
            on crypto possible. Before that I worked at music startup{" "}
            <Link href="https://www.tracklib.com/">Tracklib</Link>, the record
            store for sampling.
          </Text>
          <Text>
            I grew up just outside of Stockholm, Sweden (the perfect distance
            from town while living next door to amazing nature 🏕) and come from
            a background of studying photography.
          </Text>
          <Text>
            Outside of work I’m obsessed with{" "}
            <Tooltip content="Triathlon, Skiing, Swimrun, etc…">
              <Box
                as="em"
                textDecoration="dotted underline"
                fontStyle="normal"
                cursor="help"
              >
                endurance sports
              </Box>
            </Tooltip>{" "}
            and travelling with my family (check out{" "}
            <Link href="https://www.instagram.com/thejetlagfamily/">
              @thejetlagfamily
            </Link>{" "}
            ✈️).
          </Text>
          <Text>
            Interested in working together? Reach out by{" "}
            <Link href="mailto:samuelkraft@me.com">email</Link>.
          </Text>
        </Stack>

        <WorkHistory repos={repos} />
      </Stack>
    </Grid>
  );
};

export const getStaticProps = async () => {
  const activities = await getActivities();
  const repos = await getRepos();
  return {
    props: {
      lastActivity: activities[0],
      repos,
    },
    revalidate: 3600, // 1 hour
  };
};

export default About;
