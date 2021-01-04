import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  /* eslint-disable react/jsx-props-no-spreading */
  return <Component {...pageProps} />
}

export default MyApp
