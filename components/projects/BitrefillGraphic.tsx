import Halo from "components/Halo";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import bitrefillHome from "public/projects/bitrefill/home.png";
import { useRef } from "react";

export default function BitrefillGraphic() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, 0]);
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="h-[283px] bg-[#001413] rounded-xl relative overflow-hidden"
      ref={ref}
    >
      <Halo strength={resolvedTheme === "light" ? 10 : 4}>
        <motion.div
          className="w-[257px] absolute right-4 z-10 -bottom-10"
          style={{ y }}
        >
          <Image
            src={bitrefillHome}
            alt="Bitrefill homepage"
            width={257}
            height={296}
            sizes="257px"
          />
        </motion.div>
        <svg
          width="111"
          height="28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute hidden -translate-y-1/2 top-1/2 left-20 sm:block"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M96.79 3.913 101.83 0v26.693h-5.04V3.913ZM5.048 6.023l-5.04 3.76H0v16.91h11.434c5.113 0 8.761-3.156 8.761-7.705 0-3.125-1.723-5.573-4.171-6.772l.902-.902c1.353-1.353 1.731-2.706 1.731-4.51 0-3.792-3.116-6.425-7.48-6.425H.008v4.51h10.307c2.03 0 3.31 1.167 3.31 2.817 0 .83-.266 1.587-1.466 2.786l-4.324 4.324h3.382c2.327 0 3.945 1.506 3.945 3.688 0 2.183-1.618 3.688-3.945 3.688H5.049V6.024ZM27.979.388h-5.041V5.95h5.04V.387Zm0 6.691-5.041 3.76v15.863h5.04V7.078Zm3.607 13.23V5.95l5.04-3.914v5.411h5.492v4.703h-5.491v7.593c0 1.393.861 2.255 2.254 2.255h3.237V26.7h-4.17c-3.955 0-6.362-2.407-6.362-6.393ZM54.704 7.449h-3.382c-4.582 0-7.142 2.56-7.142 7.15v12.103h5.04V14.406c0-1.393.862-2.254 2.255-2.254h3.229V7.449Zm.312 9.63c0-5.451 3.8-10 9.848-10 6.014 0 9.847 4.21 9.847 10 0 .266 0 .523-.04.79H63.398l5.79-3.947c-.862-1.465-2.336-2.407-4.325-2.407-3.236 0-5.153 2.52-5.153 5.564 0 3.76 2.408 5.564 5.339 5.564 1.731 0 3.269-.749 4.17-2.255h5.041c-1.312 4.397-5.185 6.692-9.211 6.692-5.258 0-10.033-3.31-10.033-10.001ZM90.132.387h-5.677c-4.582 0-7.142 2.552-7.15 7.142v19.172h5.04V13.73h5.267v12.98h5.04V9.035H82.353V7.344c0-1.393.862-2.255 2.255-2.255h5.524V.387ZM111.002 0l-5.041 3.913v22.78h5.041V0Z"
            fill="#fff"
          />
        </svg>
        <svg
          fill="none"
          height="251"
          width="150"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 right-0 h-full"
        >
          <path
            d="M505.855 483.017c-38.424 31.145-230.945 31.818-346.903-146.944C42.994 157.312 124.498 66.213-22.184-24.489-168.867-115.191-344.12 15-408.153-63.996-472.186-142.993-147.136-220.6-147.136-220.6l129.593-105.045z"
            fill="#ec3241"
          />
        </svg>
      </Halo>
    </div>
  );
}
