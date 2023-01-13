import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import cn from "clsx";
import localFont from "@next/font/local";

import imageGotland from "public/gallery/gotland.jpg";
import imageRun from "public/gallery/running.jpg";
import imageSkate from "public/gallery/skate.jpg";
import imageTrailrun from "public/gallery/trailrun.jpg";
import { ReactNode } from "react";
import Activity, { ActivityType } from "./Activity";
import Link from "./Link";
import Halo from "./Halo";

const ticketingFont = localFont({
  src: "../public/ticketing.woff2",
  display: "swap",
});

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-2xl overflow-hidden";
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative w-full h-full shadow-md rounded-2xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="absolute inset-0 object-cover w-full h-full bg-gray-400 pointer-events-none rounded-2xl"
            priority
          />
          {children}
        </div>
        <div
          className={cn(
            shared,
            "bg-[#FFFAF2] flex items-center rounded-2xl overflow-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Halo strength={50} className="flex items-center">
            <span className="absolute w-[500px] h-[500px] rotate-[-20deg] bg-repeat bg-[length:280px] bg-[url('/photopaper.png')]" />
            <div className="z-[1] px-6">
              <div
                className={cn(
                  ticketingFont.className,
                  "flex flex-col gap-1 uppercase"
                )}
              >
                <p className="text-sm text-secondary">{fileName}</p>
                {meta && <p className="text-sm text-secondary">{meta}</p>}
              </div>
            </div>
          </Halo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery({
  lastActivity,
}: {
  lastActivity: ActivityType;
}) {
  return (
    <>
      <section className="flex gap-4 h-[268px] relative">
        <Photo
          src={imageGotland}
          meta="2021-07-12"
          alt="Samuel Kraft in Gotland"
          width={314}
          height={229}
          rotate={-6}
          left={-86}
          index={1}
        />
        <Photo
          src={imageSkate}
          meta="2017-07-04"
          alt="Samuel skateboarding"
          width={180}
          height={240}
          rotate={6.3}
          left={198}
          index={2}
          flipDirection="left"
        />
        <Photo
          src={imageRun}
          meta="2021-05-20"
          alt="Samuel running in the sunset"
          width={270}
          height={225}
          rotate={-5.4}
          left={343}
          index={3}
        />
        {lastActivity.photos ? (
          <Photo
            src={lastActivity.photos.primary.urls["600"]}
            meta={
              <span className="flex flex-col gap-3">
                <span className="block">{lastActivity.name}</span>
                <Link
                  href={`https://www.strava.com/activities/${lastActivity.id}`}
                >
                  See on Strava ↗
                </Link>
              </span>
            }
            alt={lastActivity.name}
            filename={`last-${lastActivity.sport_type}.jpg`}
            width={190}
            height={253}
            rotate={7.6}
            left={587}
            index={4}
            flipDirection="left"
          >
            <Activity activity={lastActivity} />
          </Photo>
        ) : (
          <Photo
            src={imageTrailrun}
            meta="2022-09-10"
            alt={"Trail Run view"}
            width={190}
            height={253}
            rotate={7.6}
            left={587}
            index={4}
            flipDirection="left"
          />
        )}
      </section>
    </>
  );
}
