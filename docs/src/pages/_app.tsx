import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Layout } from "../components/Layout";
import { lightTheme, darkTheme, Tooltip } from "design-system";
import "../styles/global.css";

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Tooltip.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
