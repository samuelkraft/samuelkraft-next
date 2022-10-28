import { AllHTMLAttributes, createElement, ElementType, forwardRef } from 'react'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { sprinkles } from '../sprinkles.css'
import type { Sprinkles } from '../sprinkles.css'

interface ExtendedBoxProps extends Sprinkles {
  as?: ElementType
  className?: string
}

export type BoxProps = Omit<AllHTMLAttributes<HTMLElement>, keyof ExtendedBoxProps> & ExtendedBoxProps

export const Box = forwardRef<HTMLElement, BoxProps>(({ as = 'div', className, ...props }, ref) => {
  const atomProps: Record<string, unknown> = {}
  const nativeProps: Record<string, unknown> = {}

  /* eslint-disable-next-line */
  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      atomProps[key] = props[key as keyof typeof props]
    } else {
      nativeProps[key] = props[key as keyof typeof props]
    }
  }

  const atomicClasses = sprinkles(atomProps)

  return createElement(as, {
    className: cn(atomicClasses, className),
    ...nativeProps,
    ref,
  })
})

export const MotionBox = motion(Box)

export default Box
