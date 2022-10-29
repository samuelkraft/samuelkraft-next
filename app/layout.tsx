import { ReactNode } from 'react'
import Header from 'components/header'
import ThemeProviderWrapper from './ThemeProviderWrapper'
import styles from './layout.module.scss'

import '../styles/globals.scss'
import NowPlaying from 'components/nowplaying'
import Link from 'next/link'

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
]

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>

      <ThemeProviderWrapper>
        <body>
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
          </div>
        </body>
      </ThemeProviderWrapper>
    </html>
  )
}
