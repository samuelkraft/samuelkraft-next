import Link from 'next/link'
import styles from './button.module.scss'

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string
  type?: 'button' | 'submit' | 'reset'
  href: string
}

const Button = ({ children, type, href }: ButtonProps): JSX.Element => (
  <Link href={href} passHref>
    <a>
      <button className={styles.button} type={type === 'submit' ? 'submit' : 'button'}>
        {children}
      </button>
    </a>
  </Link>
)

export default Button
