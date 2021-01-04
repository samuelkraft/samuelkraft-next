import Header from 'components/header'
import styles from './page.module.scss'

type PageProps = {
  children: JSX.Element | JSX.Element[]
}

const Page = ({ children }: PageProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <p>&copy; Samuel Kraft {new Date().getFullYear()}</p>
    </footer>
  </div>
)

export default Page
