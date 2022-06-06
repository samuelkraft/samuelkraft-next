import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme } from "design-system";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <Layout full={pageProps.layoutFull}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
