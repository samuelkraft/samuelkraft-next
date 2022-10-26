import { ReactNode } from 'react'
import Header from 'components/header'
import NowPlaying from 'components/nowplaying'
import Link from 'next/link'
import PageTransition from 'components/pagetransition'
import styles from './page.module.scss'

type PageProps = {
  children: ReactNode
}

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

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>
      <PageTransition>{children}</PageTransition>
    </main>
    <footer className={styles.footer}>
      <ul className={styles.links}>
        {footerLinks.map(link => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <NowPlaying />
      <p className={styles.copyright}>&copy; Samuel Kraft {new Date().getFullYear()}</p>
    </footer>
  </div>
)

export default Page
