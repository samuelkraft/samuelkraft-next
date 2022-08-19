import { useEffect, useState } from "react";
import { IconHealth as Heart } from "components/Icons";
import { Button, Spacer } from "design-system";
import { safeLocalStorage as localStorage } from "lib/localstorage";

import useSWR, { mutate } from "swr";
import fetcher from "lib/fetcher";

const LikeButton = ({ slug }: { slug: string }): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { data } = useSWR(`/api/likes?slug=${slug}`, fetcher);
  const likes = data?.likes;
  const liked = localStorage.getItem(slug) === "true";

  useEffect(() => setMounted(true), []);

  const onLike = async () => {
    localStorage.setItem(slug, "true");
    mutate(`/api/likes?slug=${slug}`, { ...data, likes: likes + 1 }, false);
    await fetch(`/api/likes?slug=${slug}`, { method: "POST" });
  };

  if (!mounted) return null;

  return (
    <Button disabled={liked} onClick={onLike}>
      <Heart />
      <Spacer space={2} />
      {typeof likes === "undefined" ? "--" : likes}
    </Button>
  );
};

export default LikeButton;
