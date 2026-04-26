import Post, { type PostPreview } from "components/Post";
import type { ReactNode } from "react";

type PostListProps = {
  children?: ReactNode;
  posts: PostPreview[];
};

export default function PostList({ children, posts }: PostListProps) {
  return (
    <ol className="w-full animated-list">
      {posts.length === 0 && <p>No posts found</p>}
      {posts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
      {children}
    </ol>
  );
}
