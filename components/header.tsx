import Link from 'next/link'
import ThemeChanger from 'components/themechanger'
import Image from 'next/image'
import avatar from 'public/avatar.png'
import NavLink from 'app/components/NavLink'
import styles from './header.module.scss'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Books', path: '/books' },
]

const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image src={avatar} alt="Samuel Kraft" width="45" height="45" priority placeholder="blur" />
          </Link>
          <nav className={styles.nav}>
            <ol className={styles.links}>
              {links.map(({ name, path }) => (
                <li key={path}>
                  <NavLink href={path}>{name}</NavLink>
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
