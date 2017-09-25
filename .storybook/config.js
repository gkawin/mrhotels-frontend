import './storybook.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { theme } from '../src/design'

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)
