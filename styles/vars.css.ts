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
  site: '83ch',
}

export const space = {
  '0': '0',
  px: '1px',
  '-px': '-1px',
  none: '0',
  xxsmall: '4px',
  xsmall: '8px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '64px',
  auto: 'auto',
}

export const fontWeights = {
  light: '300',
  normal: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
}

export const fontSizes = {
  h1: '2.375rem',
  h2: '1.75rem',
  large: '1.2rem',
  base: '1rem',
  root: '16px',
  small: '0.9rem',
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
  headerBackground: null,
  text: null,
  textTinted: null,
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
  headerBackground: 'rgba(255, 255, 255, 0.6)',
  text: '#000',
  textTinted: 'rgba(0, 0, 0, 0.5)',
  ...sharedColors,
})

export const darkTheme = createTheme(colors, {
  background: '#161515',
  headerBackground: 'rgba(22, 21, 21, 0.6)',
  text: '#fff',
  textTinted: 'rgba(255, 255, 255, 0.5)',
  ...sharedColors,
})

export const vars = { ...global, colors }
