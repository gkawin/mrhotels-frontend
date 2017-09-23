import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from './Button'

storiesOf('Button', module)
.add('Flat button', () => (
  <Button>Click Me Baby</Button>
))
.add('raise button', () => (
  <Button raise>Raise Click Me Baby</Button>
))
