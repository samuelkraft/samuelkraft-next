import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

// Components
import { Spacer, Text } from "design-system";
import PostList from "components/PostList";

// Utils
import { pick } from "@contentlayer/client";
import { allPosts, Post } from "contentlayer/generated";
import Container from "components/Container";

type BlogProps = {
  posts: Post[];
};

const Blog = ({ posts }: BlogProps): JSX.Element => {
  const seoTitle = "Blog | Samuel Kraft";
  const seoDesc =
    "I write about development, design, React, CSS, animation and more!";
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <Container>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/blog/`,
          description: seoDesc,
          site_name: "Samuel Kraft",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Text as="h1">Blog</Text>
      <PostList posts={sortedPosts} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.map((post) =>
    pick(post, [
      "slug",
      "title",
      "summary",
      "publishedAt",
      "image",
      "readingTime",
    ])
  );

  return {
    props: { posts, layout: "small" },
  };
};

export default Blog;
