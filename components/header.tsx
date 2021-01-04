import Link from 'next/link'
import ThemeChanger from 'components/themechanger'
import { useRouter } from 'next/router'
import styles from './header.module.scss'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Books', path: '/books' },
]

const Header = (): JSX.Element => {
  const router = useRouter()
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a>
              <img src="/avatar.png" width="45" height="45" alt="Samuel Kraft logo" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path }) => (
                <li key={path} className={router.pathname === path ? styles.linkActive : styles.link}>
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ol>
            <ThemeChanger />
          </nav>
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
