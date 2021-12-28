import { ReactNode } from 'react'
import Box, { BoxProps } from 'components/Box/Box'
import { mapResponsiveValue, OptionalResponsiveValue } from 'styles/sprinkles.css'

export type Direction = 'horizontal' | 'vertical'
const directionToFlexDirectionLookup = {
  horizontal: 'row',
  vertical: 'column',
} as const

export const directionToFlexDirection = (direction: OptionalResponsiveValue<Direction> | undefined) =>
  direction ? mapResponsiveValue(direction, value => directionToFlexDirectionLookup[value]) : undefined

export const validStackComponents = ['a', 'article', 'div', 'form', 'header', 'label', 'li', 'main', 'section', 'span'] as const

type StackProps = {
  children: ReactNode
  as?: typeof validStackComponents[number]
  space: BoxProps['gap']
  direction?: OptionalResponsiveValue<Direction>
}

const Stack = ({ as = 'div', children, space, direction }: StackProps) => {
  const flexDirection = directionToFlexDirection(direction)
  return (
    <Box as={as} gap={space} display="flex" flexDirection={flexDirection}>
      {children}
    </Box>
  )
}

export default Stack
