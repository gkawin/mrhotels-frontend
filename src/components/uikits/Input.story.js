import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Input from './Input.jsx'

storiesOf('Input', module)
.addDecorator(withInfo('the common Input style')((story) => story()))
.add('Input text', (log) => (
  <Input type='text' placeholder='please fill here....' />
))
.add('Input with Password', () => (
  <Input type='password' placeholder='fill password here....' />
))
.add('Input password with reveal', () => (
  <Input type='password' reveal />
))
