import Header from 'components/header'
import NowPlaying from 'components/nowplaying'
import Link from 'next/link'
import PageTransition from 'components/pagetransition'

type PageProps = {
  children: JSX.Element | JSX.Element[]
}

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'Twitter', url: 'https://twitter.com/samuelkraft' },
  { name: 'Newsletter', url: '/newsletter' },
  { name: 'About', url: '/about' },
  { name: 'Github', url: 'https://github.com/samuelkraft' },
  { name: 'RSS', url: '/feed.xml' },
  { name: 'Blog', url: '/blog' },
  { name: 'Dribbble', url: 'https://www.dribbble.com/samuelkraft' },
  { name: 'Percentage change calc', url: '/percentagechange' },
  { name: 'Books', url: '/books' },
  { name: 'Instagram', url: 'https://www.instagram.com/samuelkraft' },
]

const Page = ({ children }: PageProps): JSX.Element => (
  <div className="max-w-site mx-auto px-5 sm:px-7 ">
    <Header />
    <main className="mb-12 sm:28">
      <PageTransition>{children}</PageTransition>
    </main>
    <footer className="py-7 border-t border-default">
      <ul className="grid mx-0 mt-0 mb-10 p-0 list-none grid-cols-3 gap-6">
        {footerLinks.map(link => (
          <li
            key={link.name}
            className="mb-0 font-medium opacity-50 transition transition-opacity duration-200 ease-out hover:opacity-80 focus:opacity-80"
          >
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <NowPlaying />
      <p className="opacity-30 text-center">&copy; Samuel Kraft {new Date().getFullYear()}</p>
    </footer>
    <link href="https://twitter.com/samuelkraft" rel="me" />
  </div>
)

export default Page
