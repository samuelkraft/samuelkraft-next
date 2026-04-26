import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import avatar from "public/avatar.png";

const blurLayers = [
  { blur: 0.5, solid: 80, fade: 100 },
  { blur: 1, solid: 60, fade: 80 },
  { blur: 1.5, solid: 40, fade: 60 },
  { blur: 2, solid: 20, fade: 40 },
  { blur: 3, solid: 0, fade: 20 },
];

export default function Header() {
  const { pathname } = useRouter();
  const showHomeLink = pathname !== "/";

  return (
    <header className="sticky top-0 z-10 main-header">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-32 pointer-events-none"
      >
        {blurLayers.map((layer) => {
          const mask = `linear-gradient(to bottom, black 0%, black ${layer.solid}%, transparent ${layer.fade}%)`;

          return (
            <div
              key={layer.blur}
              className="absolute inset-0"
              style={{
                backdropFilter: `blur(${layer.blur}px)`,
                WebkitBackdropFilter: `blur(${layer.blur}px)`,
                maskImage: mask,
                WebkitMaskImage: mask,
              }}
            />
          );
        })}
      </div>
      <nav className="relative z-10 px-4 md:px-6 h-12 max-w-[640px] mx-auto flex items-center">
        {showHomeLink && (
          <Link
            href="/"
            aria-label="Go home"
            className="-ml-1 flex h-8 w-8 overflow-hidden rounded-full transition-opacity hover:opacity-80"
          >
            <Image
              src={avatar}
              alt="Samuel Kraft avatar"
              width={32}
              height={32}
              sizes="32px"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        )}
      </nav>
    </header>
  );
}
