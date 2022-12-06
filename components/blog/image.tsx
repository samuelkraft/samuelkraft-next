import Image from "next/image";
import cn from "clsx";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  breakout?: boolean;
  rounded?: boolean;
  priority?: boolean;
};

export default function CustomImage({
  src,
  width,
  height,
  alt,
  caption,
  breakout,
  rounded,
  priority,
}: CustomImageProps) {
  return (
    <div
      className={cn(
        "not-prose w-full",
        breakout ? "bg-tertiary" : "",
        (rounded || breakout) && "rounded-2xl overflow-hidden"
      )}
    >
      <figure className={cn("flex flex-col", breakout ? "gap-4" : "gap-2")}>
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="w-full h-auto"
          priority={priority}
        />
        {caption && (
          <figcaption
            className={cn(
              "text-sm text-secondary",
              breakout && "max-w-[700px] px-6 w-full mx-auto "
            )}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
