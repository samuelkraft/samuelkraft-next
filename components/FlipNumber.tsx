import React, { useState, useEffect } from "react";
import cn from "clsx";
import useIsMount from "hooks/useismount";

type FlipNumberProps = {
  children: number;
};

function FlipNumber({ children }: FlipNumberProps) {
  const isMount = useIsMount();
  const [keyframe, setKeyframe] = useState<"initial" | "moveDown" | "out">(
    "initial"
  );
  const [numberToShow, setNumberToShow] = useState(children);
  const duration = 75;

  useEffect(() => {
    if (!isMount) {
      setTimeout(() => setKeyframe("out"), 0);
      setTimeout(() => setNumberToShow(children), duration);
      setTimeout(() => setKeyframe("moveDown"), duration);
      setTimeout(() => setKeyframe("initial"), duration * 2);
    }
  }, [children, isMount, duration]);

  return (
    <span
      className={cn(
        "inline-flex",
        keyframe === "out" &&
          "opacity-0 -translate-y-3 duration-75 ease-in-out",
        keyframe === "initial" &&
          "opacity-100 translate-y-0 duration-75 ease-in-out",
        keyframe === "moveDown" && "opacity-0 translate-y-3"
      )}
    >
      {numberToShow}
    </span>
  );
}

export default FlipNumber;
