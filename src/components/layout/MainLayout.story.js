import React from 'react'
import { storiesOf } from '@storybook/react'

import MainLayout from './MainLayout'

storiesOf('MainLayout', module)
.add('Red & Blue', () => (
  <MainLayout>
    <div>Click Me Baby</div>
  </MainLayout>
))
