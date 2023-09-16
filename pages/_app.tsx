import { ReactElement, ReactNode, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Inter } from "@next/font/google";

import SEO from "components/seo";

import "../styles/globals.css";
import Header from "components/header";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout =
    Component.getLayout ??
    ((page) => (
      <main className="px-4 md:px-6 pt-20 pb-24 md:pb-44 max-w-[700px] mx-auto ring-offset-primary">
        {page}
      </main>
    ));

  const router = useRouter();

  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: "light-theme",
        dark: "dark-theme",
        arc: "arc-theme",
      }}
    >
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased font-medium bg-primary text-primary">
        <Header />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  );
}
