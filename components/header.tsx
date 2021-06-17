import Link from 'next/link'
import ThemeChanger from 'components/themechanger'
import { useRouter } from 'next/router'
import styles from './header.module.scss'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Books', path: '/books' },
]

const Header = (): JSX.Element => {
  const router = useRouter()

  const pathname = router.pathname.split('/[')[0] // active paths on dynamic subpages
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo}>
              <img src="/avatar.png" width="45" height="45" alt="Samuel Kraft logo" />
            </a>
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path }) => (
                <li key={path} className={pathname === path ? styles.linkActive : styles.link}>
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
          <ThemeChanger />
        </div>
      </header>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
