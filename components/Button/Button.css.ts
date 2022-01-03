import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { sprinkles } from 'styles/sprinkles.css'

export const button = recipe({
  base: [
    style({
      appearance: 'none',
      border: 'none',
      fontFamily: 'inherit',
      transition: 'all 0.15s ease-in-out',
    }),
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      borderRadius: 'full',
      fontWeight: 'bold',
      paddingY: 'none',
      margin: 'none',
    }),
  ],
  variants: {
    variant: {
      primary: sprinkles({
        color: 'brand',
        backgroundColor: {
          base: 'brandTinted',
          active: 'brandTintedActive',
          focus: 'brandTintedActive',
          hover: 'brandTintedActive',
        },
      }),
      transparent: sprinkles({
        backgroundColor: {
          base: 'transparent',
          active: 'text',
          focus: 'text',
          hover: 'text',
        },
        color: {
          base: 'text',
          active: 'white',
          focus: 'white',
          hover: 'white',
        },
      }),
    },
    size: {
      small: sprinkles({ height: 'small', paddingX: 'small', fontSize: 'small' }),
      medium: sprinkles({ height: 'medium', paddingX: 'medium', fontSize: 'base' }),
      large: sprinkles({ height: 'large', paddingX: 'large', fontSize: 'large' }),
    },
  },
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
