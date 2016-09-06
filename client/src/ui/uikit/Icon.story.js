
import React from 'react'
import Icon, { getAllIcons } from './Icon'
import _ from 'lodash'

export { module }

const iconWithName = (name, idx) => (
  <div key={idx} style={{ padding: '20px', width: '40px', textAlign: 'center'}}>
    <div style={{ textAlign: 'center' }}>
      <Icon name={name} size='3x'  />
    </div>
    <div style={{ fontSize: '12px', wordBreak: 'normal' }}>{name}</div>
  </div>
)

const getAllNameIcons = getAllIcons()

export const stories = {
  'all Icons': () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {_.map(getAllNameIcons, iconWithName)}
    </div>
  ),

}
