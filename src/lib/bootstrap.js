import { injectGlobal } from 'styled-components'
import { fontSize } from 'mh-design'

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${fontSize.L};
  }
`

window.$ = require('jquery')
