import { ReactNode } from 'react'
import Box, { BoxProps } from 'components/Box/Box'
import * as styles from './Button.css'

type ButtonProps = {
  children: ReactNode | string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  width?: BoxProps['width']
} & styles.ButtonVariants

const Button = ({ children, onClick, size, variant, type, disabled, width }: ButtonProps) => {
  return (
    <Box
      as="button"
      className={styles.button({ size, variant })}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      width={width ?? 'max'}
    >
      {children}
    </Box>
  )
}

export default Button
