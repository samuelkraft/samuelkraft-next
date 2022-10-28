import { globalStyle } from '@vanilla-extract/css'
import { colors } from './vars.css'

globalStyle('*, *:before, *:after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
  padding: 0,
})

globalStyle('html, body', {
  height: '100%',
  padding: 0,
})

globalStyle('body', {
  lineHeight: 1.5,
  WebkitFontSmoothing: 'antialiased',
  background: colors.background,
  color: colors.text,
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('#root, #__next', {
  isolation: 'isolate',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('a:hover', {
  cursor: 'pointer',
})

globalStyle('ul, li', {
  listStyle: 'none',
})
