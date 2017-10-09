import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from './Button.jsx'

storiesOf('Button', module)
.addDecorator(withInfo('the common button style')((story) => story()))
.add('Primary', (log) => (
  <Button>primary</Button>
))
.add('Secoundary', () => (
  <Button secoundary>secoundary</Button>
))
.add('Warning', () => (
  <Button warning>warning</Button>
))
.add('Danger', () => (
  <Button danger>danger</Button>
))
