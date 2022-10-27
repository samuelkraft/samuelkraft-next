import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react' // eslint-disable-line
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import SEO from 'components/seo'
import * as gtag from 'lib/gtag'
import { darkTheme, lightTheme } from 'design-system/vars.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <SEO />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
