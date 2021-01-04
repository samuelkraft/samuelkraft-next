import Head from 'next/head'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'

const config = {
  title: 'Samuel Kraft',
  description: 'Frontend Developer & Designer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samuelkraft.com',
    site_name: 'Samuel Kraft',
    images: [
      {
        url: 'https://samuelkraft.com/static/og-image.png',
        alt: 'Samuel Kraft',
      },
    ],
  },
  twitter: {
    handle: '@samuelkraft',
    site: '@samuelkraft',
    cardType: 'summary_large_image',
  },
}

const SEO = (): JSX.Element => {
  const router = useRouter()
  let emoji = '✨'
  if (router.route.indexOf('/about') === 0) emoji = '👨‍🎨'
  if (router.route.indexOf('/books') === 0) emoji = '📚'

  return (
    <>
      <DefaultSeo {...config} />
      <Head>
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emoji}</text></svg>`}
        />
      </Head>
    </>
  )
}

export default SEO
