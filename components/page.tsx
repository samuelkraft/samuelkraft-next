import Header from 'components/header'
import NowPlaying from 'components/nowplaying'
import Link from 'next/link'
import styles from './page.module.scss'

type PageProps = {
  children: JSX.Element | JSX.Element[]
}

const footerLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Books', url: '/books' },
  { name: 'Percentage change calc', url: '/percentagechange' },
  { name: 'Dribbble', url: 'https://www.dribbble.com/samuelkraft' },
  { name: 'Instagram', url: 'https://www.instagram.com/samuelkraft' },
  { name: 'Github', url: 'https://github.com/samuelkraft' },
  { name: 'Twitter', url: 'https://twitter.com/samuelkraft' },
  { name: 'RSS', url: '/feed.xml' },
]

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
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
    <link href="https://twitter.com/samuelkraft" rel="me" />
  </div>
)

export default Page
