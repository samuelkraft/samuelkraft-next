import Image from "next/image";
import { NextSeo } from "next-seo";

import Link from "components/Link";
import Section from "components/Section";
import Workplaces from "components/Workplaces";
import Gallery from "components/Gallery";
import { ActivityType } from "components/Activity";

import bitrefillLogo from "public/projects/bitrefill-logo.png";
import tracklibLogo from "public/projects/tracklib-logo.png";
import styleroomLogo from "public/projects/styleroom-logo.png";
import trailroutesLogo from "public/projects/trailroutes-logo.png";
import notionLogo from "public/projects/notion-logo.png";
import strengthLogo from "public/projects/strength-logo.png";
import shapeLogo from "public/projects/shape-logo.png";
import avatar from "public/avatar.png";

import { getActivities, getActivity } from "lib/strava";

export const connectLinks = [
  { label: "Email", href: "mailto:samuelkraft@me.com" },
  { label: "Twitter", href: "https://twitter.com/samuelkraft" },
  { label: "GitHub", href: "https://github.com/samuelkraft" },
];

const workplaces = [
  {
    title: "Design Engineer",
    description: "Bitrefill",
    time: "2021 - Now",
    imageSrc: bitrefillLogo,
    link: "https://bitrefill.com",
  },
  {
    title: "Frontend Developer",
    description: "Tracklib",
    time: "2016 - 2021",
    imageSrc: tracklibLogo,
    link: "https://tracklib.com",
  },
  {
    title: "Design Engineer",
    description: "Styleroom",
    time: "2013 - 2016",
    imageSrc: styleroomLogo,
    link: "https://styleroom.se/app",
  },
];

const sideProjects = [
  {
    title: "Shape",
    description: "A calendar for your workouts",
    imageSrc: shapeLogo,
    link: "https://shape.samuelkraft.com",
  },
  {
    title: "Trail Routes",
    description: "Mapping platform built with react, mapbox, swiftUI",
    imageSrc: trailroutesLogo,
    link: "https://github.com/samuelkraft/routes",
  },
  {
    title: "notion-blog-nextjs",
    description: "Next.js starter repo with a blog powered by Notion",
    imageSrc: notionLogo,
    link: "https://github.com/samuelkraft/notion-blog-nextjs",
  },
  {
    title: "Strength",
    description: "iOS & WatchOS strength tracking app",
    imageSrc: strengthLogo,
    link: "https://samuelkraft.github.io/strength/",
  },
  {
    title: "samuelkraft-next",
    description: "The website you are looking at!",
    imageSrc: avatar,
    link: "https://github.com/samuelkraft/samuelkraft-next",
  },
];

const seoTitle = "About | Samuel Kraft";
const seoDesc =
  "A designer/frontend developer hybrid that loves to build great products with delightful interfaces.";

export default function About({
  lastActivity,
}: {
  lastActivity: ActivityType;
}) {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://samuelkraft.com/about/`,
          site_name: "Samuel Kraft",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="hidden sm:block">
          <Gallery lastActivity={lastActivity} />
        </div>
        <div className="-mb-8 sm:hidden animate-in">
          <Image
            src={avatar}
            width={48}
            height={48}
            alt="avatar of Samuel Kraft"
          />
        </div>
        <div
          className="flex flex-col gap-16 animate-in sm:animate-none md:gap-24"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <Section heading="About me" headingAlignment="right">
            <div className="flex flex-col gap-6">
              <p>
                <em className="font-semibold">Hi there!</em>&nbsp; I’m Samuel, a
                designer/frontend developer hybrid that loves to build great
                products with delightful interfaces.
              </p>
              <p>
                Currently working at{" "}
                <Link href="https://bitrefill.com">Bitrefill</Link>, making
                living on crypto possible. Before that I worked at music startup{" "}
                <Link href="https://tracklib.com">Tracklib</Link>, the record
                store for sampling.
              </p>
              <p>
                I love working in the realm between design and code. Some things
                that makes me excited are CSS, Design Systems, Animation,
                crafting excellent component apis and making interfaces feel fun
                and human.
              </p>
              <p>
                I grew up in Nacka just outside of Stockholm, Sweden and come
                from a background of studying Photography.
              </p>
              <p>
                Outside of work I’m obsessed with endurance sports and
                travelling with my family.
              </p>
            </div>
          </Section>
          <Section heading="Connect" headingAlignment="right">
            <ul className="flex gap-6 animated-list">
              {connectLinks.map((link) => (
                <li className="transition-opacity" key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Section>
          <Section heading="Work" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>
                {new Date().getFullYear() - 2013}+ years of experience working
                in both design & engineering.
              </p>
              <Workplaces items={workplaces} />
            </div>
          </Section>
          <Section heading="Side projects" headingAlignment="right">
            <div className="flex flex-col w-full gap-8">
              <p>I enjoy hacking on the side.</p>
              <Workplaces items={sideProjects} />
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const activities: ActivityType[] = await getActivities();
  const lastNonVirtualActivityWithPhoto = activities
    .filter((activity) =>
      [
        "Run",
        "TrailRun",
        "Bike",
        "Swim",
        "Hike",
        "GravelRide",
        "NordicSki",
      ].includes(activity.sport_type)
    )
    .find((activity) => activity.total_photo_count > 0);
  const activity = await getActivity(
    lastNonVirtualActivityWithPhoto?.id as number
  );
  return {
    props: {
      lastActivity: activity,
    },
    revalidate: 3600,
  };
};
