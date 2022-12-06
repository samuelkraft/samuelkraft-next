export const getMentionsForSlug = async (slug: string) => {
  const webmentions = await fetch(
    `https://webmention.io/api/mentions?target=https://samuelkraft.com/blog/${slug}&per-page=10000`
  );
  const mentions = await webmentions.json();
  const numberOfmentions = mentions?.links?.length;

  return numberOfmentions > 0 ? numberOfmentions : 0;
};
