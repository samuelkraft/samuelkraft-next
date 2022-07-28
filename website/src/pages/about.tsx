import type { NextPage } from "next";
import { Text, Stack, Grid, Box } from "design-system";

import Photo from "components/Photo";

import photoAvatar from "/public/photos/hey_thats_me.jpg";
import photoRace from "/public/photos/sometimes_i_race.jpg";
import photoTravel from "/public/photos/travelling.jpg";
import WorkHistory from "components/WorkHistory";
import NowPlaying from "components/NowPlaying";
import Workout from "components/Workout";
import DesignBuildSticker from "components/DesignBuildSticker";

const About: NextPage = () => {
  return (
    <Grid gap={6} templateColumns="repeat(2, 1fr)">
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
          />
          <Photo
            meta="Photo 0344 (2022-06-24)"
            alt="Triathlon racing"
            src={photoRace}
            width={300}
            height={402}
            rotate={-12}
          />
          <Photo
            meta="Photo 0445 (2021-04-12)"
            alt="Samuel travelling in the desert"
            src={photoTravel}
            width={300}
            height={250}
            rotate={7}
          />
          <Workout />
          <NowPlaying />
        </Stack>
      </Box>
      <Stack space={6} direction="column">
        <Stack direction="column">
          <Text size="small" transform="uppercase" color="brand">
            About me
          </Text>
          <Text as="h1">Samuel Kraft</Text>
          <Text as="h2" size="large" color="textSecondary" weight="normal">
            Design Engineer
          </Text>
        </Stack>
        <Text>
          Hi there! I’m a designer/frontend developer hybrid that loves to build
          great products with{" "}
          <a href="https://www.nngroup.com/articles/theory-user-delight/">
            delightful interfaces ✨
          </a>
          .
        </Text>
        <Text>
          Currently working at <a href="https://bitrefill.com/">Bitrefill</a>,
          making living on crypto possible. Before that I worked at music
          startup <a href="https://www.tracklib.com/">Tracklib</a>, the record
          store for sampling.
        </Text>
        <Text>
          I love working in the realm between design and code. Some things that
          makes me excited are CSS, React, Design Systems, Component Kits, UI
          Animation and making interfaces feel fun and human.
        </Text>
        <Text>
          I grew up in Nacka just outside of Stockholm (the perfect distance
          from town while living next door to amazing nature 🏕) and come from a
          background of studying Photography.
        </Text>
        <Text>
          Outside of work I’m obsessed with endurance sports and travelling with
          my family (check out{" "}
          <a href="https://www.instagram.com/thejetlagfamily/">
            @thejetlagfamily
          </a>{" "}
          ✈️).
        </Text>

        <WorkHistory />
      </Stack>
    </Grid>
  );
};

export default About;
