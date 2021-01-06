import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import SEO from 'components/seo'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider defaultTheme="system">
      <SEO />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
