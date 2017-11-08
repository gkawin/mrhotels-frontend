import { injectGlobal } from 'styled-components'
import { fontSize } from 'mh-design'

injectGlobal`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto');
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: ${fontSize.L};
  }
`

window.$ = require('jquery')
