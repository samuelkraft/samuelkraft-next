import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";
import app from "public/projects/trailroutes/app.png";
import pattern from "public/projects/trailroutes/pattern.png";
import { useRef } from "react";

export default function TrailRoutesGraphic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);

  return (
    <div
      className="relative overflow-hidden bg-white border aspect-video rounded-xl border-primary"
      ref={ref}
    >
      <motion.div
        className="w-[303px] absolute right-4 z-10 -bottom-10"
        style={{ y }}
      >
        <Image
          src={app}
          alt="Trail routes app"
          width={303}
          height={335}
          sizes="303px"
        />
      </motion.div>
      <svg
        width="192"
        height="32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 -translate-y-1/2 top-1/2 left-12"
      >
        <path
          d="M14.74 7.978a1.161 1.161 0 0 0 1.29.137 1.17 1.17 0 0 0 .57-.694 1.193 1.193 0 0 0-.368-1.257L9.243.274a1.156 1.156 0 0 0-1.49 0L.763 6.163a1.189 1.189 0 0 0-.151 1.661 1.157 1.157 0 0 0 1.642.153l5.079-4.282v4l-6.57 5.537a1.178 1.178 0 0 0-.415.8 1.19 1.19 0 0 0 .264.862 1.157 1.157 0 0 0 1.642.153l5.079-4.283v4l-6.57 5.538a1.177 1.177 0 0 0-.415.799 1.19 1.19 0 0 0 .264.862 1.157 1.157 0 0 0 1.642.153l5.079-4.283v9.267c0 .313.122.612.34.833a1.158 1.158 0 0 0 1.648 0c.218-.22.34-.52.34-.833v-9.267l5.079 4.283a1.157 1.157 0 0 0 1.642-.153 1.19 1.19 0 0 0-.151-1.661l-6.57-5.538v-4l5.079 4.282a1.157 1.157 0 0 0 1.642-.152 1.19 1.19 0 0 0-.151-1.662l-6.57-5.537v-4l5.079 4.282Zm8.899-3.264c-1.236 0-2.42.497-3.294 1.38a4.74 4.74 0 0 0-1.365 3.333c0 1.25.49 2.449 1.365 3.333a4.632 4.632 0 0 0 3.294 1.38c1.235 0 2.42-.496 3.294-1.38a4.74 4.74 0 0 0 1.365-3.333 4.74 4.74 0 0 0-1.365-3.332 4.632 4.632 0 0 0-3.294-1.38Zm0 7.07c-.618 0-1.21-.248-1.647-.69a2.37 2.37 0 0 1-.683-1.666c0-.625.246-1.225.683-1.667a2.316 2.316 0 0 1 1.647-.69c.618 0 1.21.249 1.647.69a2.37 2.37 0 0 1 .682 1.667 2.37 2.37 0 0 1-.682 1.666c-.437.442-1.03.69-1.647.69Z"
          fill="#75A134"
        />
        <path
          d="M43.928 23.814V10.477h3.747V7.14H36.398v3.337h3.713v13.337h3.817Zm9.482 0v-4.616h1.793l2.92 4.616h4.425l-3.299-5.267a5.472 5.472 0 0 0 2.414-2.169c.575-.959.862-2.026.862-3.204 0-.814-.142-1.585-.425-2.314a5.792 5.792 0 0 0-1.213-1.918 5.836 5.836 0 0 0-1.897-1.314c-.739-.326-1.564-.488-2.476-.488h-6.92v16.674h3.816Zm2.61-7.768h-2.61v-5.755h2.61c.399 0 .763.08 1.092.238.33.159.607.368.833.628.227.26.402.565.53.919.126.353.189.719.189 1.098 0 .38-.064.745-.19 1.094a2.86 2.86 0 0 1-.529.912 2.545 2.545 0 0 1-1.925.866Zm11.552 7.768.643-2.023h5.863l.632 2.023h4.138L72.893 7.14h-3.506l-5.885 16.674h4.069Zm5.563-5.046h-4l2.022-6.861 1.977 6.86h.001Zm11.24 5.046V7.14h-3.861v16.674h3.862Zm11.656 0v-3.337h-4.69V7.14h-3.816v16.674h8.506Zm11.678 0v-4.616h1.793l2.921 4.616h4.425l-3.299-5.267a5.472 5.472 0 0 0 2.414-2.169c.574-.958.862-2.026.862-3.204 0-.814-.142-1.585-.426-2.314a5.778 5.778 0 0 0-1.212-1.918 5.84 5.84 0 0 0-1.897-1.314c-.739-.326-1.565-.488-2.476-.488h-6.921v16.674h3.817-.001Zm2.609-7.768h-2.609v-5.755h2.609c.398 0 .763.08 1.092.238.33.159.608.368.834.628.225.26.402.565.528.919.127.353.19.719.19 1.098 0 .38-.063.745-.19 1.094a2.848 2.848 0 0 1-.528.912 2.56 2.56 0 0 1-1.926.866Zm16.874 8.198c1.363 0 2.584-.242 3.661-.726a8.439 8.439 0 0 0 2.747-1.943 8.277 8.277 0 0 0 1.718-2.802 9.437 9.437 0 0 0 .586-3.296c0-1.14-.195-2.239-.586-3.297a8.277 8.277 0 0 0-1.718-2.802 8.359 8.359 0 0 0-2.747-1.936c-1.077-.48-2.298-.721-3.661-.721-1.364 0-2.586.24-3.667.72-1.08.482-1.998 1.127-2.753 1.937a8.277 8.277 0 0 0-1.718 2.802 9.43 9.43 0 0 0-.586 3.297c0 1.147.195 2.247.586 3.302a8.293 8.293 0 0 0 1.718 2.796c.755.81 1.673 1.458 2.753 1.943 1.081.483 2.303.726 3.667.726Zm0-3.477c-.751 0-1.425-.147-2.023-.441a4.617 4.617 0 0 1-1.517-1.18 5.254 5.254 0 0 1-.949-1.693 6.066 6.066 0 0 1-.328-1.976c0-.683.11-1.341.329-1.977.208-.619.53-1.193.948-1.692a4.564 4.564 0 0 1 1.517-1.174c.598-.29 1.272-.437 2.023-.437.759 0 1.434.146 2.028.437.582.28 1.098.68 1.518 1.174a5.19 5.19 0 0 1 .953 1.692c.219.636.329 1.295.329 1.977 0 .682-.11 1.34-.329 1.976a5.188 5.188 0 0 1-.953 1.693c-.422.495-.94.896-1.523 1.18-.598.294-1.272.441-2.023.441Zm17.184 3.477c.988 0 1.879-.159 2.672-.476a6.059 6.059 0 0 0 2.023-1.297 5.628 5.628 0 0 0 1.282-1.936 6.396 6.396 0 0 0 .448-2.407V7.14h-3.816v10.953c0 .387-.063.752-.19 1.093-.118.328-.298.63-.528.89a2.486 2.486 0 0 1-1.891.831c-.391 0-.743-.076-1.058-.227a2.641 2.641 0 0 1-.816-.604 2.658 2.658 0 0 1-.534-.896 3.12 3.12 0 0 1-.19-1.087V7.138h-3.804v10.99c0 .853.149 1.654.448 2.402a5.602 5.602 0 0 0 1.281 1.942 6.102 6.102 0 0 0 2.011 1.296c.786.318 1.673.477 2.662.477v-.001Zm15.62-.43V10.477h3.748V7.14h-11.276v3.337h3.713v13.337h3.815Zm15.725 0V20.72h-6.242v-3.675h6.242v-3.023h-6.242v-3.779h6.242V7.14h-10.058v16.674h10.058Zm8.528.43c.913 0 1.745-.116 2.5-.349.755-.232 1.407-.573 1.954-1.023a4.639 4.639 0 0 0 1.282-1.675c.306-.666.46-1.43.46-2.29 0-.822-.177-1.524-.53-2.105a5.097 5.097 0 0 0-1.35-1.476 8.46 8.46 0 0 0-1.861-1.024 54.765 54.765 0 0 0-2.053-.779c-.705-.256-1.272-.544-1.701-.866-.429-.321-.643-.762-.643-1.32 0-.573.195-1.004.586-1.29.391-.287.862-.43 1.414-.43.659 0 1.164.214 1.517.644.353.43.529 1.018.529 1.762h3.816c0-.713-.123-1.387-.368-2.023a4.883 4.883 0 0 0-1.098-1.692c-.486-.492-1.098-.88-1.833-1.162-.736-.283-1.59-.425-2.563-.425a7.96 7.96 0 0 0-2.184.297 5.64 5.64 0 0 0-1.845.889 4.507 4.507 0 0 0-1.282 1.476c-.321.59-.482 1.264-.482 2.025 0 .844.149 1.551.448 2.12.299.57.699 1.057 1.201 1.46a7.402 7.402 0 0 0 1.776 1.035c.682.287 1.398.574 2.149.861.361.14.698.277 1.012.412.314.136.586.29.816.465.23.175.41.379.54.61.131.234.195.516.195.85 0 .59-.206 1.062-.62 1.418-.414.357-.927.536-1.54.536-.782 0-1.416-.255-1.903-.762-.486-.508-.729-1.215-.729-2.122h-3.817c0 .953.158 1.798.471 2.534.296.71.741 1.348 1.305 1.867a5.608 5.608 0 0 0 1.972 1.157 7.444 7.444 0 0 0 2.459.395Z"
          fill="#2F3427"
        />
      </svg>
      <Image
        src={pattern}
        alt="Topography pattern"
        width={542}
        height={251}
        sizes="542px"
        className="absolute top-0 bottom-0 right-0 h-full"
      />
    </div>
  );
}
