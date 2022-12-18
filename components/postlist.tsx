import { formatDate } from "lib/formatdate";
import type { Post } from ".contentlayer/generated";
import Section from "./Section";
import Link from "./Link";

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  return (
    <ul className="flex flex-col gap-5 animated-list">
      {posts.length === 0 && <p>No posts found</p>}
      {posts.map(({ publishedAt, slug, title }) => {
        const publishDate = new Date(publishedAt);
        const showNewBadge =
          Math.abs(new Date(publishDate).getTime() - new Date().getTime()) /
            (24 * 60 * 60 * 1000) <
          30;
        return (
          <li key={slug} className="transition-opacity">
            <Section heading={formatDate(publishedAt)}>
              <Link href={`/blog/${slug}`}>
                {title}
                {showNewBadge && (
                  <span className="inline-block px-1.5 py-[1px] relative -top-[2px] font-bold ml-2 text-[10px] uppercase rounded-full brand-gradient text-white">
                    New
                  </span>
                )}
              </Link>
            </Section>
          </li>
        );
      })}
    </ul>
  );
}
