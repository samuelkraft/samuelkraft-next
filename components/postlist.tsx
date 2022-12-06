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
      {posts.map(({ publishedAt, slug, title }) => (
        <li key={slug} className="transition-opacity">
          <Section heading={formatDate(publishedAt)}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </Section>
        </li>
      ))}
    </ul>
  );
}
