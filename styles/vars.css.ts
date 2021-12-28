import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css'

export const radii = {
  none: '0',
  medium: '4px',
  large: '8px',
  full: '9999px',
}

export const heights = {
  none: '0',
  small: '32px',
  medium: '40px',
  large: '48px',
}

export const widths = {
  auto: 'auto',
  full: '100%',
  fit: 'fit-content',
  max: 'max-content',
  min: 'min-content',
  viewHeight: '100vh',
  viewWidth: '100vw',
  none: '0',
}

export const space = {
  none: '0',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
}

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
}

export const fontSizes = {
  h1: '3rem',
  h2: '1.875rem',
  small: '0.9rem',
  base: '1rem',
  large: '1.2rem',
  root: '16px',
}

const global = createGlobalTheme('html', {
  space,
  radii,
  fontWeights,
  fontSizes,
  heights,
  widths,
})

export const colors = createThemeContract({
  background: null,
  text: null,
  // shared
  transparent: null,
  white: null,
  brand: null,
  brandActive: null,
  brandTinted: null,
  brandTintedActive: null,
})

const sharedColors = {
  transparent: 'transparent',
  white: 'white',
  brand: '#e38356',
  brandActive: '#b3613b',
  brandTinted: 'rgba(227, 131, 86, 0.2)',
  brandTintedActive: 'rgba(227, 131, 86, 0.33)',
}

export const lightTheme = createTheme(colors, {
  background: '#fff',
  text: '#000',
  ...sharedColors,
})

export const darkTheme = createTheme(colors, {
  background: '#161515',
  text: '#fff',
  ...sharedColors,
})

export const vars = { ...global, colors }
