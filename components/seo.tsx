import { DefaultSeo } from 'next-seo'

const config = {
  title: 'Samuel Kraft - Frontend Developer & Designer',
  description:
    'I’m a frontend developer & designer. Right now I’m working at Tracklib. This is my personal website - where you’ll find all the stuff I’m currently doing and thinking about.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samuelkraft.com',
    site_name: 'Samuel Kraft',
    images: [
      {
        url: 'https://samuelkraft.com/og.png',
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
  return <DefaultSeo {...config} />
}

export default SEO
