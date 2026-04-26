import { GetStaticProps } from "next";
import Image from "next/image";
import {
  allPosts,
  allProjects,
  Post,
  Project as ContentProject,
} from ".contentlayer/generated";
import { pick } from "@contentlayer/client";

import { IconArrowRight, IconRaycast, IconGlaze } from "components/Icons";
import Link from "components/Link";
import BitrefillGraphic from "components/projects/BitrefillGraphic";
import GlazeGraphic from "components/projects/GlazeGraphic";
import ShapeCalendarGraphic from "components/projects/ShapeCalendarGraphic";
import TrailRoutesGraphic from "components/projects/TrailRoutesGraphic";
import TracklibGraphic from "components/projects/TracklibGraphic";

import avatar from "public/avatar.png";

import { connectLinks } from "lib/connect-links";

type SelectedPost = Pick<Post, "slug" | "title" | "publishedAt">;

type ProjectDescriptionPart = {
  text: string;
  href?: string;
};

type Project = Omit<
  Pick<ContentProject, "slug" | "title" | "description">,
  "description"
> & {
  description: string | ProjectDescriptionPart[];
  graphic: string;
  href: string;
};

type PostDate = {
  label: string;
  detail?: string;
};

type HomeProps = {
  posts: SelectedPost[];
  projects: Project[];
  yearsExperience: number;
};

function animationStyle(index: number) {
  return { "--index": index } as React.CSSProperties;
}

const newProjectItems: Project[] = [
  {
    slug: "shape-calendar",
    title: "Shape Calendar",
    description: "Training planner for endurance athletes to track training load. Build structured workouts with LLMs using plain English and sync with your Apple Watch, Garmin, Wahoo etc. Available on web and iOS.",
    href: "https://shapecalendar.com",
    graphic: "shape-calendar",
  },
  {
    slug: "glaze",
    title: "Glaze by Raycast",
    description: "Part of a small team at Raycast creating a new way to build desktop apps.",
    href: "https://www.glaze.app/",
    graphic: "glaze",
  },
  {
    slug: "ray-so",
    title: "ray.so by Raycast",
    description: [
      { text: "Browse themes, AI presets, quicklinks & more. Partnered with brands like " },
      {
        text: "OpenAI",
        href: "https://x.com/samuelkraft/status/1858903109839548529",
      },
      { text: ", " },
      {
        text: "Stripe",
        href: "https://x.com/samuelkraft/status/2003480797379199195/",
      },
      { text: ", " },
      {
        text: "Vercel",
        href: "https://x.com/samuelkraft/status/1786413395731738831",
      },
      { text: ", " },
      {
        text: "ElevenLabs",
        href: "https://x.com/ElevenLabsDevs/status/1927726276522991647",
      },
      { text: ", " },
      {
        text: "Gemini",
        href: "https://x.com/samuelkraft/status/2002057848973635983",
      },
      { text: " and more on custom branded code themes." },
    ],
    href: "https://ray.so",
    graphic: "ray-so",
  },
];

const experienceStartYear = 2013;

function IntroWorkText() {
  return (
    <>
      Design Engineer at{" "}
      <Link
        href="https://raycast.com"
        className="inline whitespace-nowrap hover:text-primary"
      >
        <IconRaycast className="mr-1.5 inline h-[0.78em] w-[0.78em] align-[-0.06em]" />
        <span>Raycast</span>
      </Link> currently working on desktop app builder <Link
        href="https://glaze.app"
        className="inline whitespace-nowrap hover:text-primary"
      >
        <IconGlaze className="mr-1.5 inline h-[0.78em] w-[0.78em] align-[-0.06em]" />
        <span>Glaze</span>
      </Link>.
    </>
  );
}

function IntroProductText() {
  return (
    <>
      Excited by delightful interfaces and building products that feel fast and
      human. I obsess over UI component api:s, design systems patterns, typography, and animations.
    </>
  );
}

function IntroHistoryText({ years }: { years: number }) {
  return (
    <>
      I&apos;ve worked in design and engineering for {years} years
      with previous roles at music tech startup <Link href="https://tracklib.com" className="inline whitespace-nowrap hover:text-primary">Tracklib</Link> and ecommerce platform <Link href="https://bitrefill.com" className="inline whitespace-nowrap hover:text-primary">Bitrefill</Link>.
    </>
  );
}

function formatPostDate(date: string): PostDate {
  const parsedDate = new Date(`${date}T00:00:00`);

  return {
    label: parsedDate.getFullYear().toString(),
    detail: parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    }),
  };
}

function ProjectDescription({
  description,
}: {
  description: Project["description"];
}) {
  if (typeof description === "string") {
    return <>{description}</>;
  }

  return (
    <>
      {description.map((part, index) => {
        if (!part.href) {
          return <span key={`${part.text}-${index}`}>{part.text}</span>;
        }

        return (
          <Link
            className="relative underline pointer-events-auto underline-offset-4 hover:text-primary"
            href={part.href}
            key={`${part.text}-${index}`}
            unstyled
          >
            {part.text}
          </Link>
        );
      })}
    </>
  );
}

const raySoGraphicItems = [
  { src: "/projects/ray-so/code-images.svg", label: "Code Images" },
  { src: "/projects/ray-so/theme-explorer.svg", label: "Theme Explorer" },
  { src: "/projects/ray-so/preset-explorer.svg", label: "Preset Explorer" },
  { src: "/projects/ray-so/prompt-explorer.svg", label: "Prompt Explorer" },
  { src: "/projects/ray-so/quicklink-explorer.svg", label: "Quicklink Explorer" },
  { src: "/projects/ray-so/snippet-explorer.svg", label: "Snippet Explorer" },
  { src: "/projects/ray-so/icon-maker.svg", label: "Icon Maker" },
];

function RaySoGraphic() {
  return (
    <div className="relative h-[283px] overflow-hidden rounded-xl bg-[#101010] grid place-items-center">
      <div className="flex flex-wrap gap-4 justify-center items-center px-5 max-w-[240px] sm:max-w-none sm:flex-nowrap">
        {raySoGraphicItems.map((item) => (
          <Image
            alt={item.label}
            className="w-12 h-12 sm:w-14 sm:h-14"
            height={56}
            key={item.src}
            src={item.src}
            width={56}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectGraphicBySlug({ slug }: { slug: string }) {
  if (slug === "shape-calendar") {
    return <ShapeCalendarGraphic />;
  }

  if (slug === "glaze") {
    return <GlazeGraphic />;
  }

  if (slug === "ray-so") {
    return <RaySoGraphic />;
  }

  if (slug === "tracklib") {
    return <TracklibGraphic />;
  }

  if (slug === "bitrefill") {
    return <BitrefillGraphic />;
  }

  if (slug === "trailroutes") {
    return <TrailRoutesGraphic />;
  }

  return null;
}

function SelectedProjects({
  projects,
  startIndex,
}: {
  projects: Project[];
  startIndex: number;
}) {
  return (
    <section className="flex flex-col gap-4">
      <h2
        className="text-secondary animate-in"
        style={animationStyle(startIndex)}
      >
        Projects
      </h2>
      <ul className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <li
            className="animate-in"
            key={project.title}
            style={animationStyle(startIndex + index + 1)}
          >
            <div className="flex relative flex-col gap-4">
              <Link
                href={project.href}
                className="absolute inset-0 z-0"
                aria-label={project.title}
                unstyled
              >
                <span className="sr-only">{project.title}</span>
              </Link>
              <div className="relative z-10 pointer-events-none">
                <ProjectGraphicBySlug slug={project.slug} />
              </div>
              <div className="flex relative z-10 flex-col gap-1 pointer-events-none">
                <h4>{project.title}</h4>
                <p className="text-secondary">
                  <ProjectDescription description={project.description} />
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SelectedPosts({
  posts,
  startIndex,
}: {
  posts: SelectedPost[];
  startIndex: number;
}) {
  return (
    <section className="flex flex-col gap-2 items-start">
      <h2
        className="text-secondary animate-in"
        style={animationStyle(startIndex)}
      >
        Posts
      </h2>
      <ol className="w-full animated-list">
        {posts.map((post, index) => {
          const date = formatPostDate(post.publishedAt);
          const dateLabel = date.detail
            ? `${date.detail} ${date.label}`
            : date.label;

          return (
            <li className="transition-opacity" key={post.slug}>
              <div
                className="animate-in"
                style={animationStyle(startIndex + index + 1)}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex gap-4 items-center px-4 py-4 -mx-4 rounded-lg transition-colors hover:bg-secondaryA"
                  unstyled
                >
                  <div className="flex flex-wrap flex-1 gap-y-1 gap-x-3 items-baseline min-w-0">
                    {post.title}
                  </div>
                  <time
                    className="tabular-nums text-right shrink-0 text-secondary"
                    dateTime={post.publishedAt}
                  >
                    {dateLabel}
                  </time>
                </Link>
              </div>
            </li>
          );
        })}
        <li className="transition-opacity">
          <div
            className="animate-in"
            style={animationStyle(startIndex + posts.length + 1)}
          >
            <Link
              href="/blog"
              className="flex gap-1 items-center px-4 py-4 -mx-4 rounded-lg transition-colors text-secondary hover:bg-secondaryA hover:text-primary"
              unstyled
            >
              <span>See all</span>
              <IconArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default function Home({
  posts,
  projects,
  yearsExperience,
}: HomeProps) {
  const projectsStartIndex = 7;
  const postsStartIndex = projectsStartIndex + projects.length + 1;

  return (
    <>
      <div className="flex flex-col gap-16 text-base md:gap-24">
        <div className="flex flex-col gap-4">
          <Image
            src={avatar}
            alt="Samuel Kraft avatar"
            className="w-8 h-8 rounded-full animate-in"
            priority
          />
          <h1
            className="animate-in"
            style={animationStyle(1)}
          >
            Samuel Kraft
          </h1>
          <p
            className="animate-in text-secondary"
            style={animationStyle(2)}
          >
            <IntroWorkText />
          </p>
          <p
            className="animate-in text-secondary"
            style={animationStyle(3)}
          >
            <IntroHistoryText years={yearsExperience} />
          </p>
          <p
            className="animate-in text-secondary"
            style={animationStyle(4)}
          >
            <IntroProductText />
          </p>

          <p
            className="animate-in text-secondary"
            style={animationStyle(5)}
          >
            Based in Stockholm, Sweden. Before software I studied photography.
          </p>
          <ul
            className="flex gap-6 animated-list animate-in"
            style={animationStyle(6)}
          >
            {connectLinks.map((link) => (
              <li
                className="transition-opacity text-secondary hover:text-primary"
                key={link.label}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-16 md:gap-24">
          <SelectedProjects
            projects={projects}
            startIndex={projectsStartIndex}
          />
          <SelectedPosts posts={posts} startIndex={postsStartIndex} />
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const sortedPosts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const posts = sortedPosts
    .filter((_, i) => i < 4)
    .map((post) => pick(post, ["slug", "title", "publishedAt"]));

  const contentProjects: Project[] = allProjects.map((project) => ({
    ...pick(project, ["slug", "title", "description"]),
    graphic: project.slug,
    href: `/project/${project.slug}`,
  }));

  const projects = [...newProjectItems, ...contentProjects];
  const yearsExperience = new Date().getFullYear() - experienceStartYear;

  return {
    props: { posts, projects, yearsExperience },
  };
};
