import { AllHTMLAttributes } from 'react'
import Box, { BoxProps } from 'components/Box/Box'
import * as styles from './Button.css'

type NativeButtonProps = AllHTMLAttributes<HTMLButtonElement>
type NativeAnchorProps = AllHTMLAttributes<HTMLAnchorElement>

type BaseProps = {
  children: NativeButtonProps['children']
  onClick?: () => void
  type?: NativeButtonProps['type']
  disabled?: boolean
  width?: BoxProps['width']
  target?: BoxProps['target']
} & styles.ButtonVariants

type WithAnchor = {
  as?: 'a'
  href?: string
  rel?: NativeAnchorProps['rel']
  target?: NativeAnchorProps['target']
}

type WithoutAnchor = {
  as?: 'button'
  href?: never
  rel?: never
  target?: never
}

type ButtonProps = BaseProps & (WithAnchor | WithoutAnchor)

export const Button = ({ children, onClick, size, variant, type, disabled, width, target, as = 'button', href, rel }: ButtonProps) => {
  return (
    <Box
      as={as}
      className={styles.button({ size, variant })}
      onClick={onClick}
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={disabled}
      width={width ?? 'max'}
      target={target}
      href={href}
      rel={rel}
    >
      {children}
    </Box>
  )
}

export default Button
