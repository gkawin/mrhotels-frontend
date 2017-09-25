import './storybook.css'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { configure, addDecorator, setAddon } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { theme } from '../src/design'

addDecorator((story, context) => withInfo('common info')(story)(context));
addDecorator(story => (
  <ThemeProvider theme={theme}>
    <div style={{padding: '20px'}}>
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
