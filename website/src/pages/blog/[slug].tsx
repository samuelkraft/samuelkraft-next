import { Fragment } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Link from "components/Link";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

// Components
// import PageHeader from "components/pageheader";
import CustomImage from "components/Image";
import { NowPlayingIcon } from "components/NowPlaying";
import PostList, { PostImage } from "components/PostList";
import { Box, Button, Alert, Text, Stack, Spacer } from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import HitCounter from "components/HitCounter";
import Tags from "components/Tags";
import LikeButton from "components/LikeButton";
import Subscribe from "components/Subscribe";

// Utils
import { pick } from "@contentlayer/client";
import { allPosts, Post as PostType } from "contentlayer/generated";
import { AlertProps } from "design-system/src/components/Alert";
import { TextProps } from "design-system/src/components/Text";
import { BoxProps } from "design-system/src/components/Box";

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

const components = {
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
};

type PostProps = {
  post: PostType;
  related: PostType[];
};

const Post = ({ post, related }: PostProps): JSX.Element => {
  const MDXContent = useMDXComponent(post.body.code, {
    vars,
  });

  const formattedPublishDate = new Date(post.publishedAt).toLocaleString(
    "en-US",
    {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }
  );
  const formattedUpdatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
    : null;

  const seoTitle = `${post.title} | Samuel Kraft`;
  const seoDesc = `${post.summary}`;
  const url = `https://samuelkraft.com/blog/${post.slug}`;

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: seoDesc,
          images: [
            {
              url: post.og
                ? `https://samuelkraft.com${post.og}`
                : `https://og-image.samuelkraft.vercel.app/${encodeURIComponent(
                    post.title
                  )}?desc=${encodeURIComponent(seoDesc)}&theme=dark.png`,
              alt: post.title,
            },
          ],
          site_name: "Samuel Kraft",
          type: "article",
          article: {
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: ["https://samuelkrat.com"],
          },
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Stack space={7} direction="column">
        <Stack as="header" space={7} direction="column">
          {post.image && <PostImage src={post.image} alt={post.title} />}
          <Stack space={2} direction="column">
            <Text as="h1">{post.title}</Text>
            <Text color="textSecondary">
              Published on{" "}
              <time dateTime={post.publishedAt}>{formattedPublishDate}</time>
              {post.updatedAt ? ` (Updated ${formattedUpdatedDate})` : ""}{" "}
              <span>&middot;</span> {post.readingTime.text}
              <HitCounter slug={post.slug} />
            </Text>
          </Stack>
        </Stack>

        <Stack as="article" space={3} direction="column">
          <MDXContent components={components} />
          {/* Stack requires multiple children and doesn't know MDXContent renders that */}
          <></>
        </Stack>

        <Stack space={9} direction="column" align="center">
          <LikeButton slug={post.slug} />
          <Tags tags={post.tags} />

          <Subscribe />
        </Stack>
        <Spacer space={5} />
        {related.length > 0 && (
          <>
            <Text as="h2">Related Posts</Text>
            <PostList posts={related} />
          </>
        )}
        <Box justifyContent="center" display="flex">
          <Button href="/blog">Back to the blog</Button>
        </Box>
      </Stack>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p.slug === params?.slug) as PostType;
  const related = allPosts
    /* remove current post */
    .filter((p) => p.slug !== params?.slug)
    /* Find other posts where tags are matching */
    .filter((p) => p.tags?.some((tag) => post.tags?.includes(tag)))
    /* return the first three */
    .filter((_, i) => i < 3)
    /* only return what's needed to render the list */
    .map((p) =>
      pick(p, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "image",
        "readingTime",
      ])
    );

  return {
    props: {
      post,
      related,
      layout: "small",
    },
  };
};

export default Post;
