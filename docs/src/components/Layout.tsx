import { MouseEvent, ReactNode, useState } from "react";
import Link from "next/link";
import { allComponents, allDocs } from "contentlayer/generated";
import * as styles from "./Layout.css";
import ThemeChanger from "./ThemeChanger";
import { Box, Stack } from "design-system/src";
import { useRouter } from "next/router";

const searchFilter = (query: string, item: any) =>
  item.title.toLowerCase().includes(query.toLowerCase()) ||
  item.body.raw.toLowerCase().includes(query.toLowerCase());

const NavLink = ({
  children,
  href,
}: {
  children: string | ReactNode;
  href: string;
}) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${styles.link} ${
        router.asPath === href && styles.activeLink
      }`}
    >
      {children}
    </a>
  );
};

export const Layout = ({ children }: { children: ReactNode }) => {
  const [query, setQuery] = useState("");

  const componentResults = allComponents.filter((component) =>
    searchFilter(query, component)
  );
  const docResults = allDocs.filter((doc) => searchFilter(query, doc));

  const results = [...componentResults, ...docResults];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <Link href="/">
            <a className={styles.logo}>Design System</a>
          </Link>
          <Stack space={2} align="center">
            <ThemeChanger />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Search…"
              className={styles.searchInput}
            />
          </Stack>
        </div>
      </header>
      <div className={styles.wrapper}>
        <aside className={styles.sidebar}>
          <Stack space={2} orientation="vertical">
            <section>
              <NavLink href="/">Home</NavLink>
            </section>
            <Stack space={2} orientation="vertical">
              <p className={styles.sidebarTitle}>Getting started</p>
              <Stack space={2} orientation="vertical">
                {allDocs
                  .filter((x) => x.category === "getting-started")
                  .map((doc) => (
                    <NavLink key={doc.title} href={`/${doc.slug}`}>
                      {doc.title}
                    </NavLink>
                  ))}
              </Stack>
            </Stack>
            <Stack space={2} orientation="vertical">
              <p className={styles.sidebarTitle}>Content</p>
              <Stack space={2} orientation="vertical">
                {allDocs
                  .filter((x) => x.category === "content")
                  .map((doc) => (
                    <NavLink key={doc.title} href={`/${doc.slug}`}>
                      {doc.title}
                    </NavLink>
                  ))}
              </Stack>
            </Stack>
            <Stack space={2} orientation="vertical">
              <p className={styles.sidebarTitle}>Brand</p>
              <Stack space={2} orientation="vertical">
                {allDocs
                  .filter((x) => x.category === "brand")
                  .map((doc) => (
                    <NavLink key={doc.title} href={`/${doc.slug}`}>
                      {doc.title}
                    </NavLink>
                  ))}
              </Stack>
            </Stack>
            <Stack space={2} orientation="vertical">
              <p className={styles.sidebarTitle}>Components</p>
              <Stack space={2} orientation="vertical">
                {allComponents.map((component) => (
                  <NavLink
                    key={component.title}
                    href={`/components/${component.slug}`}
                  >
                    {component.title}
                  </NavLink>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </aside>
        <main className={styles.main}>
          {query ? (
            <>
              {`search results for ${query}`}
              <div>
                {results.map((x) => (
                  <div key={x._id} onClick={() => setQuery("")}>
                    <Link href={`/components/${x.slug}`}>{x.title}</Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            children
          )}
        </main>
      </div>
    </>
  );
};
