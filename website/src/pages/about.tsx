import type { NextPage } from "next";
import { Text, Spacer, Stack } from "design-system";
import Container from "components/Container";

const About: NextPage = () => {
  return (
    <>
      <Spacer space={9} />
      <Container width="blog">
        <Stack space={6} direction="column">
          <Text size="large">
            Hey I’m Samuel, a frontend developer &amp; designer currently living
            in 🇸🇪 Stockholm, Sweden.
          </Text>
          <Text size="large">
            Right now I’m working at{" "}
            <a href="https://bitrefill.com/">Bitrefill</a>, designing &amp;
            building the future of crypto. Before that I worked at{" "}
            <a href="https://www.tracklib.com/">Tracklib</a>, the record store
            for sampling.
          </Text>
          <Text size="large">
            I grew up in Nacka just outside of Stockholm (the perfect distance
            from town while living next door to amazing nature 🏕) and come from
            a background of studying Photography. I love working in the realm
            between design and code. Some stuff that makes me excited are CSS,
            React, Design Systems, Component Kits, UI Animation and delightful
            interfaces ✨.
          </Text>
          <Text size="large">
            In my spare time I love being outdoors, training and travelling with
            my family (check out{" "}
            <a href="https://www.instagram.com/thejetlagfamily/">
              @thejetlagfamily
            </a>{" "}
            ✈️).
          </Text>
        </Stack>
      </Container>
    </>
  );
};

export default About;
