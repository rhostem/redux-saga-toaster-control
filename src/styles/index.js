import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'
import media from './media'
import color from './color'
import size from './size'
import * as typography from './typography'
import * as centered from './centered'

// eslint-disable-next-line
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  ${normalize()}
`

export default {
  media,
  size,
  color,
  typography,
  centered,
}