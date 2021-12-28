import { defineProperties, createSprinkles, createMapValueFn, ConditionalValue, RequiredConditionalValue } from '@vanilla-extract/sprinkles'
import { space, colors, radii, fontWeights, fontSizes, heights, widths } from './vars.css'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    height: heights,
    width: widths,
    borderRadius: radii,
    fontWeight: fontWeights,
    fontSize: fontSizes,
    gap: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

const unresponsiveProperties = defineProperties({
  properties: {
    cursor: ['default', 'pointer', 'not-allowed'],
  },
})

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
    hover: { selector: '&:hover' },
  },
  defaultCondition: 'base',
  properties: {
    backgroundColor: colors,
    borderColor: colors,
    color: colors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, unresponsiveProperties, selectorProperties)
export const mapResponsiveValue = createMapValueFn(responsiveProperties)
export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<typeof responsiveProperties, Value>
export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<typeof responsiveProperties, Value>

export type Sprinkles = Parameters<typeof sprinkles>[0]
