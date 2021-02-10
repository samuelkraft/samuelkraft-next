import Link from 'next/link'
import cn from 'classnames'
import styles from './button.module.scss'

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string
  type?: 'button' | 'submit' | 'reset'
  href?: string
  onClick?: () => void
  variant?: 'transparent' | 'like'
  disabled?: boolean
}

const Button = ({ children, type, href, variant, onClick, disabled }: ButtonProps): JSX.Element => {
  const classes = cn(styles.button, styles[variant])
  if (onClick || !href) {
    return (
      <button className={classes} type={type === 'submit' ? 'submit' : 'button'} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href} passHref>
        <a>
          <button className={classes} type={type === 'submit' ? 'submit' : 'button'} disabled={disabled}>
            {children}
          </button>
        </a>
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {children}
    </a>
  )
}

export default Button
