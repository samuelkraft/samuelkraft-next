import { GetStaticProps, GetStaticPaths } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "components/Link";
import { NextSeo } from "next-seo";

// Components
// import PageHeader from "components/pageheader";
import PostList, { PostImage } from "components/PostList";
import { Box, Button, Alert, Text, Stack, Spacer } from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import HitCounter from "components/HitCounter";
import Tags from "components/Tags";
import LikeButton from "components/LikeButton";
import Subscribe from "components/Subscribe";
import MDXComponents from "components/MDXComponents";

// Utils
import { pick } from "@contentlayer/client";
import { allPosts, Post as PostType } from "contentlayer/generated";
import { IconAvatar, IconClock, IconEye } from "components/Icons";

export const ReadingTime = ({ time }: { time: string }) => (
  <Stack align="center" space={2}>
    <Text color="textSecondary">
      <IconClock />
    </Text>
    <Text color="textSecondary">{time}</Text>
  </Stack>
);

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
          {post.image && (
            <PostImage src={post.image} alt={post.title} priority />
          )}
          <Stack space={2} direction="column">
            <Text as="h1">{post.title}</Text>
            <Stack align="center" space={3}>
              <Text lineHeight="1">
                <Link href="/">
                  <IconAvatar />
                </Link>
              </Text>
              <Stack space={5}>
                <Text color="textSecondary">
                  Samuel Kraft on{" "}
                  <time dateTime={post.publishedAt}>
                    {formattedPublishDate}
                  </time>
                  {post.updatedAt ? ` (Updated ${formattedUpdatedDate})` : ""}
                </Text>
                <ReadingTime time={post.readingTime.text} />
                <HitCounter slug={post.slug} />
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack as="article" space={4} direction="column">
          <MDXContent components={MDXComponents} />
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
    .filter((p) => p.tags?.some((tag: string) => post.tags?.includes(tag)))
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
