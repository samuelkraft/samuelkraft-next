import dynamic from "next/dynamic";
import Link from "./Link";
import Head from "next/head";
import { Alert, Box, Grid, Text } from "design-system";
import { BoxProps } from "design-system/src/components/Box";
import CustomImage from "components/Image";
import { Fragment } from "react";
import { NowPlayingIcon } from "components/NowPlaying";
import { AlertProps } from "design-system/src/components/Alert";

const SegmentedControl = dynamic(
  () => import("components/blog/SegmentedControl")
);
const Messages = dynamic(() => import("components/blog/Messages"));
const TailBreakdown = dynamic(() => import("components/blog/TailBreakdown"));
const AnimatedMessages = dynamic(
  () => import("components/blog/AnimatedMessages")
);
const Rating = dynamic(() => import("components/blog/Rating"));

const CustomLink = (props: { href: string }) => {
  const { href } = props;

  /* eslint-disable */
  if (href?.startsWith("/")) {
    return <Link {...props} />;
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
  /* eslint-enable */
};

const MDXComponents = {
  Head,
  a: CustomLink,
  h2: (props: any) => (
    <Box marginTop={6} marginBottom={2}>
      <Text as="h2" weight="bold" {...props} />
    </Box>
  ),
  pre: (props: any) => {
    return (
      <Box
        as="pre"
        padding={6}
        borderRadius="medium"
        backgroundColor="code"
        color="white"
        marginY={6}
        {...props}
      />
    );
  },
  code: (props: any) => <Text as="code" {...props} />,
  p: Text,
  li: (props: BoxProps) => (
    <Box as="li" {...props}>
      <Text>{props.children}</Text>
    </Box>
  ),
  Image: CustomImage,
  Alert: (props: AlertProps) => (
    <Box marginY={6}>
      <Alert {...props} />
    </Box>
  ),
  Link: CustomLink,
  NowPlayingIcon,
  SegmentedControl,
  Messages,
  AnimatedMessages,
  TailBreakdown,
  Parallax: Fragment,
  Rating,
  Box: Box,
  Grid: Grid,
};

export default MDXComponents;
