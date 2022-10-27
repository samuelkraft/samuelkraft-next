import { ReactNode } from 'react'
import { Box, BoxProps } from '../Box'

export type StackProps = {
  as?: BoxProps['as']
  children: ReactNode[]
  space?: BoxProps['gap']
  direction?: BoxProps['flexDirection']
  align?: BoxProps['alignItems']
  justify?: BoxProps['justifyContent']
  width?: BoxProps['width']
}

export const Stack = ({ as, children, space, direction, align, justify, width }: StackProps) => (
  <Box as={as} display="flex" flexDirection={direction} alignItems={align} justifyContent={justify} gap={space} width={width}>
    {children}
  </Box>
)
