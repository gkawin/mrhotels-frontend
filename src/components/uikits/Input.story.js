import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Input from './Input.jsx'
import RevealPasswordInput from './RevealPasswordInput'

storiesOf('Input', module)
.addDecorator(withInfo('the common Input style')((story) => story()))
.add('Input text', (log) => (
  <Input type='text' placeholder='please fill here....' />
))
.add('Input with Password', () => (
  <Input type='password' placeholder='fill password here....' />
))
.add('Input password with reveal', (log) => (
  <RevealPasswordInput value='foooooooo' onChange={(e) => console.log(e)} />
))
