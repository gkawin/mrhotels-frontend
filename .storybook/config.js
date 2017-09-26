import React from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { theme } from '../src/design'

injectGlobal`
  body {
    background-color: rgba(0, 0, 0, 0.05);
    background-image: repeating-linear-gradient(0deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px), repeating-linear-gradient(90deg, transparent, transparent 7px, rgba(0, 0, 0, 0.2) 1px, transparent 8px);
    background-size: 8px 8px;
  }
  html {
    box-sizing: border-box;
    font-family: Helvetica, "sans-serif";
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

addDecorator(withKnobs)
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{ padding: '20px' }}>
      {story()}
    </div>
  </ThemeProvider>
  )
)

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)
