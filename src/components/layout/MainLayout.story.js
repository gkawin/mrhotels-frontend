import React from 'react'
import { storiesOf } from '@storybook/react'

import MainLayout from './MainLayout'
import Button from '../uikits/Button'

storiesOf('MainLayout', module)
.add('Red & Blue', () => (
  <MainLayout>
    <div>Click Me Baby</div>
    <div>
      <Button>Click Me Baby</Button>
    </div>
  </MainLayout>
))
