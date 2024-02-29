import { NextSeo } from "next-seo";
import Section from "components/Section";
import { formatDate } from "lib/formatdate";
import Link from "components/Link";

const seoTitle = "Playground | Samuel Kraft";
const seoDesc = "Experiments, craft and other fun stuff!";

const playgrounds = [
  {
    title: "Raycast",
    id: "raycast",
    publishedAt: "2024-02-26",
  },
];

export default function Playground() {
  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/playground/`,
          description: seoDesc,
          site_name: "Samuel Kraft",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-2">
            <h1 className="animate-in">Playground</h1>
            <p
              className="text-secondary animate-in"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              {seoDesc}
            </p>
          </div>
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <ul className="flex flex-col animated-list">
            {playgrounds.map(({ id, title, publishedAt }) => {
              const showNewBadge =
                Math.abs(
                  new Date(publishedAt).getTime() - new Date().getTime()
                ) /
                  (24 * 60 * 60 * 1000) <
                30;

              return (
                <li key={id} className="py-2.5 group">
                  <div className="transition-opacity">
                    <Section heading={formatDate(publishedAt)}>
                      <Link href={`/playground/${id}`}>
                        {title}
                        {showNewBadge && (
                          <span className="inline-block px-1.5 py-[1px] relative -top-[2px] font-bold ml-2 text-[10px] uppercase rounded-full brand-gradient text-white">
                            New
                          </span>
                        )}
                      </Link>
                    </Section>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
