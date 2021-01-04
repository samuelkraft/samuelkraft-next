import styles from './button.module.scss'

type ButtonProps = {
  children: JSX.Element | JSX.Element[] | string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, type }: ButtonProps): JSX.Element => (
  <button className={styles.button} type={type === 'submit' ? 'submit' : 'button'}>
    {children}
  </button>
)

export default Button
