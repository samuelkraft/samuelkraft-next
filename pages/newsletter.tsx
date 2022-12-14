import NewsletterInput from "components/NewsletterInput";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { allPosts, Post } from ".contentlayer/generated";
import { GetStaticProps } from "next";
import { pick } from "contentlayer/client";
import PostList from "components/postlist";
import Link from "components/Link";

export default function NewsletterPage() {
  const { query } = useRouter();
  const seoTitle = "Newsletter | Samuel Kraft";
  const seoDesc =
    "A newsletter in the realm between design & development. Learn animations, CSS, web development tips & tricks and creating delightful and useful interfaces!";

  return (
    <div className="min-h-screen">
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/newsletter/`,
          description: seoDesc,
          site_name: "Samuel Kraft",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      {query.confirmed ? (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl animate-in">
            Thanks for confirming your email!
          </h3>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            You&apos;re on the list and will get updates when new content is
            published.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl animate-in">Subscribe</h3>
          <p
            className="text-secondary animate-in"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            Get an email when i write new posts. Learn animation techniques,
            CSS, design systems and more
          </p>
          <div
            className="animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <NewsletterInput />
          </div>
        </div>
      )}
    </div>
  );
}
