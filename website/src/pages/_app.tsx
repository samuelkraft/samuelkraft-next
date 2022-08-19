import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme, Tooltip } from "design-system";
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
      <Tooltip.Provider>
        <Layout size={pageProps.layout}>
          <Component {...pageProps} />
        </Layout>
      </Tooltip.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
