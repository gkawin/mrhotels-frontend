import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Input from './Input'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

storiesOf('Input', module)
.add('Input text', withInfo('the common Input style')((log) => (
  <Container>
    <Input type='text' placeholder='please fill here....' />
    <Input type='text' placeholder='disabled' disabled />
    <Input type='password' />
  </Container>
)))
