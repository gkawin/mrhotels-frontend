import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
.add('Flat button', () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Button>primary</Button>
    <Button secoundary>secoundary</Button>
  </div>
))
