import { ReactNode } from 'react'
import Header from 'components/header'
import NowPlaying from 'components/nowplaying'
import Link from 'next/link'
import PageTransition from 'components/pagetransition'
import { Box } from 'components'

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Twitter', url: 'https://twitter.com/samuelkraft' },
  { name: 'Newsletter', url: '/newsletter' },
  { name: 'About', url: '/about' },
  { name: 'GitHub', url: 'https://github.com/samuelkraft' },
  { name: 'RSS', url: '/feed.xml' },
  { name: 'Blog', url: '/blog' },
  { name: 'Dribbble', url: 'https://dribbble.com/samuelkraft' },
  { name: 'Percentage change calc', url: '/percentagechange' },
  { name: 'Books', url: '/books' },
  { name: 'Instagram', url: 'https://www.instagram.com/samuelkraft' },
  { name: 'Changelog', url: '/changelog' },
]

const Links = () => (
  <Box as="ul" display="grid" marginBottom="xxlarge" gridGap="large" gridTemplateColumns="repeat(3, 1fr)" listStyle="none" padding="none">
    {footerLinks.map(link => (
      <Box as="li" key={link.name} color={{ base: 'textTinted', hover: 'text' }} fontWeight="medium">
        <Link href={link.url}>
          <a>{link.name}</a>
        </Link>
      </Box>
    ))}
  </Box>
)

type PageProps = {
  children: ReactNode
}

const Page = ({ children }: PageProps): JSX.Element => (
  <Box maxWidth="site" marginX="auto" paddingX={{ small: 'medium', medium: 'large' }}>
    <Header />
    <Box as="main" marginBottom={{ small: 'xxlarge', medium: 'xxxlarge' }}>
      <PageTransition>{children}</PageTransition>
    </Box>
    <Box as="footer">
      <Links />
      <NowPlaying />
      <Box as="p" textAlign="center">
        &copy; Samuel Kraft {new Date().getFullYear()}
      </Box>
    </Box>
  </Box>
)

export default Page
