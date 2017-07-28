import { injectGlobal } from 'styled-components'

const baseFontSize = 16
const baseFontSizeUnit = 'px'
const baseLineHeight = 1.6

// eslint-disable-next-line
injectGlobal`
  html {
    font-size: ${baseFontSize}${baseFontSizeUnit};
    line-height: ${baseLineHeight};
  }
`

/**
 * calculate vertical rhythm
 */
export const rhythm = (unit: number) => {
  return `${baseFontSize * baseLineHeight * unit}${baseFontSizeUnit}`
}

export default {
  baseFontSize: `${baseFontSize}${baseFontSizeUnit}`,
  baseLineHeight,
  rhythm,
}
