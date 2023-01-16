import { useEffect, useState } from "react";
import { safeLocalStorage as localStorage } from "lib/localstorage";

import useSWR, { mutate } from "swr";
import fetcher from "lib/fetcher";
import { IconHeart, IconHeartOutline } from "./Icons";
import Halo from "./Halo";
import FlipNumber from "./FlipNumber";

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
        className="flex items-center justify-center h-10 gap-2 overflow-hidden text-white transition-transform bg-orange-400 rounded-full like-button hover:cursor-default active:scale-95"
      >
        <Halo
          className="flex items-center justify-center gap-2 px-4"
          size={120}
          strength={30}
        >
          {liked ? <IconHeart /> : <IconHeartOutline />}{" "}
          {typeof likes === "undefined" ? (
            "--"
          ) : (
            <FlipNumber>{likes}</FlipNumber>
          )}
        </Halo>
      </button>
    </div>
  );
}
