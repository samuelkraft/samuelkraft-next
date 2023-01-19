import useMousePosition from "hooks/usemouseposition";
import Image from "next/image";
import RadialImage from "public/playground/radial-image.jpeg";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

type MenuItem = {
  label: string;
  icon: ReactNode;
  activeColor: string;
};

type RadialMenuProps = {
  children: ReactNode;
  items: MenuItem[];
};

const initialPos = { x: 0, y: 0 };

function RadialMenu({ children, items }: RadialMenuProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);
  const [openPos, setOpenPos] = useState(initialPos);
  const [allowHover, setAllowHover] = useState(false);
  const [activeItem, setActiveItem] = useState<null | string>(null);

  function onTapStart() {
    setOpenPos({ x: (x || 0) + 5, y: (y || 0) - 44 });
  }

  function onTap() {
    setOpenPos(initialPos);
    setAllowHover(false);
    setActiveItem(null);
  }

  const isOpen = !!openPos.x;

  // Prevent right-click - open menu instead
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return () => document.removeEventListener("contextmenu", handleContextmenu);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-full">
      <motion.div
        className="absolute inset-0 z-10"
        onTapStart={onTapStart}
        onTap={onTap}
        onMouseDown={(e) => e.preventDefault()} // Prevent native drag handler
      >
        {isOpen && (
          <div className="absolute" style={{ top: openPos.y, left: openPos.x }}>
            <motion.div
              className="relative border-4 rounded-full border-stone-700 w-[60px] h-[60px] border-primary -left-[30px] top-3"
              initial={{ scale: 4, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              onAnimationComplete={() => setAllowHover(true)}
            />
            {items.map((item, i) => {
              const activePos =
                i === 0
                  ? { x: -70, y: -80 }
                  : i === 1
                  ? { x: -2, y: -83 }
                  : i === 2
                  ? { x: 51, y: -41 }
                  : { x: 65, y: 25 };

              const hoverPos =
                i === 0
                  ? { x: -10, y: -22 }
                  : i === 1
                  ? { x: 8, y: -22 }
                  : i === 2
                  ? { x: 18, y: -14 }
                  : { x: 20, y: 3 };
              return (
                <motion.div
                  className="absolute top-0 left-0 "
                  key={item.label}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ opacity: 1, ...activePos }}
                  transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  whileHover="itemHover"
                  onMouseEnter={() => setActiveItem(item.label)}
                  style={
                    allowHover
                      ? { pointerEvents: "auto" }
                      : { pointerEvents: "none" }
                  }
                >
                  <motion.button
                    className="relative flex items-center justify-center w-16 h-16 text-gray-900 bg-white rounded-full shadow-lg will-change-transform"
                    variants={{
                      itemHover: {
                        scale: 1.2,
                        backgroundColor: item.activeColor,
                        color: "white",
                        ...hoverPos,
                      },
                    }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                  >
                    {item.icon}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        )}
      </motion.div>
      <motion.p
        className="absolute z-20 text-3xl font-bold text-white pointer-events-none select-none right-4"
        animate={!!activeItem ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ duration: 0.2 }}
        style={{ top: openPos.y - 150 + y! / 20 }}
      >
        {activeItem}
      </motion.p>
      <motion.div
        className="absolute inset-0 z-0 bg-black pointer-events-none"
        animate={isOpen ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.1 }}
      />
      {children}
    </div>
  );
}

const IconPin = ({ className }: { className?: string }) => (
  <svg
    width="416"
    height="613"
    viewBox="0 0 416 613"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M321.48 180.6L372.423 27.64C374.496 21.2859 373.459 14.2853 369.568 8.97335C365.678 3.53068 359.459 0.416016 352.714 0.416016H62.4738C55.8644 0.416016 49.5102 3.65561 45.6191 8.97335C41.7285 14.416 40.6921 21.2859 42.765 27.64L93.7076 180.6C35.6343 218.969 0.243652 283.527 0.243652 353C0.243652 364.406 9.57698 373.74 20.9836 373.74H186.917V570.78L207.657 612.259L228.397 570.78V373.74H394.33C405.737 373.74 415.07 364.407 415.07 353C415.07 283.521 379.68 218.96 321.477 180.6H321.48Z"
      fill="currentColor"
    />
  </svg>
);

const IconWhatsApp = ({ className }: { className?: string }) => (
  <svg
    width="252"
    height="254"
    viewBox="0 0 252 254"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M215.032 37.1586C191.372 13.4703 159.905 0.420666 126.382 0.406616C57.3066 0.406616 1.08978 56.6207 1.06168 125.716C1.05325 147.802 6.82218 169.361 17.7896 188.368L0.0107422 253.307L66.4448 235.879C84.7491 245.863 105.358 251.126 126.331 251.132H126.382C126.379 251.132 126.385 251.132 126.382 251.132C195.449 251.132 251.672 194.912 251.7 125.814C251.714 92.3302 238.692 60.8469 215.032 37.1586ZM75.4901 130.276C73.925 128.186 62.7046 113.298 62.7046 97.8855C62.7046 82.4727 70.7946 74.8969 73.6636 71.7638C76.5327 68.6306 79.9271 67.8466 82.015 67.8466C84.1028 67.8466 86.1934 67.8663 88.0171 67.9562C89.9392 68.0546 92.5216 67.2256 95.0618 73.3317C97.6723 79.6008 103.933 95.0165 104.717 96.5817C105.501 98.1497 106.021 99.9762 104.978 102.067C103.936 104.155 103.413 105.461 101.848 107.291C100.283 109.12 98.5602 111.374 97.1496 112.776C95.5816 114.338 93.949 116.032 95.7755 119.166C97.602 122.302 103.885 132.555 113.195 140.859C125.154 151.528 135.245 154.833 138.375 156.401C141.505 157.969 143.332 157.708 145.158 155.617C146.985 153.526 152.987 146.473 155.075 143.34C157.163 140.207 159.251 140.73 162.12 141.772C164.991 142.817 180.385 150.393 183.515 151.958C186.645 153.526 188.733 154.31 189.517 155.617C190.301 156.924 190.301 163.193 187.691 170.507C185.08 177.822 172.57 184.498 166.554 185.395C161.159 186.201 154.333 186.538 146.83 184.153C142.284 182.711 136.45 180.783 128.978 177.557C97.5711 163.994 77.0581 132.367 75.4901 130.276Z"
      fill="currentColor"
    />
  </svg>
);

const IconShare = ({ className }: { className?: string }) => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"
      fill="currentColor"
    ></path>
  </svg>
);

const IconVisualSearch = ({ className }: { className?: string }) => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M19 1h-3v2h3c1.103 0 2 .897 2 2v3h2V5c0-2.206-1.794-4-4-4zm2 18c0 1.103-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4v-3h-2zM3 19v-3H1v3c0 2.206 1.794 4 4 4h3v-2H5c-1.103 0-2-.897-2-2zM3 5c0-1.103.897-2 2-2h3V1H5C2.794 1 1 2.794 1 5v3h2zm6 6.5C9 10.122 10.122 9 11.5 9s2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5S9 12.878 9 11.5zm7.5 6.5a1.502 1.502 0 0 0 1.061-2.561l-2.012-2.011A4.444 4.444 0 0 0 16 11.5C16 9.019 13.981 7 11.5 7S7 9.019 7 11.5 9.019 16 11.5 16c.693 0 1.341-.17 1.928-.451l2.011 2.012c.293.293.677.439 1.061.439z"
      fill="currentColor"
    ></path>
  </svg>
);
const items = [
  {
    label: "Save",
    icon: <IconPin className="w-7 h-7" />,
    activeColor: "#D63138",
  },
  {
    label: "Send",
    icon: <IconShare className="w-6 h-6" />,
    activeColor: "#D63138",
  },
  {
    label: "Send with WhatsApp",
    icon: <IconWhatsApp className="w-7 h-7" />,
    activeColor: "#5DB656",
  },
  {
    label: "Visual search",
    icon: <IconVisualSearch className="w-7 h-7" />,
    activeColor: "#D63138",
  },
];

export default function Playground() {
  const title = "Radial Menu";
  const seoTitle = `${title} | Samuel Kraft`;
  const desc = `Fun interaction from Pinterest on iOS built with Framer Motion`;
  const url = `https://samuelkraft.com/playground/radial-menu`;
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={desc}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: desc,
          images: [
            {
              url: `https://og-image.samuelkraft.vercel.app/${encodeURIComponent(
                title
              )}?desc=${encodeURIComponent(desc)}&theme=dark.png`,
              alt: title,
            },
          ],
        }}
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-primary">{title}</h1>
          <p className="text-secondary">{desc}</p>
        </div>
        <div className="flex flex-col gap-4">
          <section className="overflow-hidden rounded-lg">
            <RadialMenu items={items}>
              <Image src={RadialImage} alt="Portugal" />
            </RadialMenu>
          </section>
          <p className="text-center text-primary">
            Long-press anywhere on the image
          </p>
        </div>
      </div>
    </>
  );
}
