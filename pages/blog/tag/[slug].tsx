import { GetStaticProps, GetStaticPaths } from "next";
import slugify from "slugify";
import { useRouter } from "next/router";

// Utils
import { pick } from "@contentlayer/client";
import { allPosts, Post } from "contentlayer/generated";
import PostList from "components/postlist";
import Link from "components/Link";
import { NextSeo } from "next-seo";

type TagProps = {
  posts: Post[];
};

const Tag = ({ posts }: TagProps): JSX.Element => {
  const { query } = useRouter();
  const { slug } = query as { slug: string };
  const tag = slug.replace("-", " ");

  const seoTitle = `${tag} | Samuel Kraft`;
  const seoDesc = `Posts &amp; tutorials about ${tag}`;
  const url = `https://samuelkraft.com/blog/tag/${tag}`;

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
        }}
      />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <h1 className="capitalize animate-in">{tag}</h1>
            <p
              className="text-secondary animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              Posts &amp; tutorials about{" "}
              <span className="capitalize">{tag}</span>
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-12 animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <PostList posts={posts} />
          <Link href="/blog" underline>
            ← See all posts
          </Link>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = allPosts
    .map((p) => p.tags)
    .flat()
    .filter(Boolean)
    .map((tag) => ({ params: { slug: slugify(tag, { lower: true }) } }));

  return {
    paths: tags,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = allPosts
    .filter((post) =>
      post.tags?.some(
        (x: string) => slugify(x, { lower: true }) === context.params?.slug
      )
    )
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map((post) =>
      pick(post, ["slug", "title", "summary", "publishedAt", "image"])
    );
  return { props: { posts } };
};

export default Tag;
