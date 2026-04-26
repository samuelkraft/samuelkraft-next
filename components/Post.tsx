import type { Post as PostType } from ".contentlayer/generated";
import type { ReactNode } from "react";
import Link from "./Link";

export type PostPreview = Pick<PostType, "slug" | "title" | "publishedAt"> &
  Partial<Pick<PostType, "image">>;

type PostProps = {
  post: PostPreview;
};

const postRowLinkClassName =
  "flex gap-4 items-center px-4 py-4 -mx-4 rounded-lg transition-colors hover:bg-secondaryA";
const postRowContentClassName =
  "flex flex-wrap flex-1 gap-y-1 gap-x-3 items-baseline min-w-0";

function formatPostDate(date: string) {
  const parsedDate = new Date(`${date}T00:00:00`);

  return parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Post({ post }: PostProps) {
  return (
    <li className="transition-opacity">
      <Link
        href={`/blog/${post.slug}`}
        className={postRowLinkClassName}
        unstyled
      >
        <div className={postRowContentClassName}>{post.title}</div>
        <time
          className="tabular-nums text-right shrink-0 text-secondary"
          dateTime={post.publishedAt}
        >
          {formatPostDate(post.publishedAt)}
        </time>
      </Link>
    </li>
  );
}

export function PostListLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <li className="transition-opacity">
      <Link
        href={href}
        className={`${postRowLinkClassName} text-secondary hover:text-primary`}
        unstyled
      >
        <div className="flex flex-wrap flex-1 gap-y-1 gap-x-2 items-center min-w-0">
          {children}
        </div>
      </Link>
    </li>
  );
}
