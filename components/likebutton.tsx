import { useEffect, useState } from "react";
import { safeLocalStorage as localStorage } from "lib/localstorage";

import useSWR, { mutate } from "swr";
import fetcher from "lib/fetcher";
import { IconHeart, IconHeartOutline, IconMoon } from "./Icons";

export default function LikeButton({ slug }: { slug: string }) {
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
    <div className="flex justify-center">
      <button
        disabled={liked}
        onClick={onLike}
        type="button"
        className="flex items-center justify-center h-10 gap-2 px-4 text-white transition-transform bg-orange-400 rounded-full like-button hover:cursor-default active:scale-95"
      >
        {liked ? <IconHeart /> : <IconHeartOutline />}{" "}
        {typeof likes === "undefined" ? "--" : likes}
      </button>
    </div>
  );
}
