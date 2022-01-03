import Link from 'next/link'
import ThemeChanger from 'components/themechanger'
import { useRouter } from 'next/router'
import Image from 'next/image'
import avatar from 'public/avatar.png'
import * as styles from './header.css'
import Box from './Box/Box'

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
      <Box as="header" position="fixed" top="-px" right="0" left="0" backgroundColor="headerBackground" zIndex="3" className={styles.blur}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="site"
          marginX="auto"
          paddingX={{ small: 'medium', medium: 'large' }}
          paddingY={{ small: 'small', medium: 'medium' }}
        >
          <Link href="/">
            <a className={styles.logo}>
              <Image src={avatar} alt="Samuel Kraft" layout="fixed" width="45" height="45" priority placeholder="blur" />
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
        </Box>
      </Box>
      <div className={styles.spacer} />
    </>
  )
}

export default Header
