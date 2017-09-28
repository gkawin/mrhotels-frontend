import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

storiesOf('Button', module)
.add('Flat button', withInfo('the common button style')((log) => (
  <Container>
    <Button>primary</Button>
    <Button secoundary>secoundary</Button>
    <Button warning>warning</Button>
    <Button danger>danger</Button>
  </Container>
)))
