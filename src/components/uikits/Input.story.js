import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Input from './Input.jsx'

storiesOf('Input', module)
.addDecorator(withInfo('Input style (common in whole application)', (story) => story()))
.add('Input text', (log) => (
  <Input type='text' placeholder='please fill here....' />
))
