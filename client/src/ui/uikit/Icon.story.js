import { FormInput } from '../form'
import React from 'react'
import Icon, { getAllIcons } from './Icon'
import _ from 'lodash'
import PureRenderMixin from 'react-addons-pure-render-mixin'

export { module }

const AllIcons = React.createClass({

  mixins: [PureRenderMixin],

  getInitialState () {
    return {
      filtered: getAllIcons()
    }
  },

  onChange (e) {
    const text = e.target.value
    const filtered = _.filter(getAllIcons(), (name) => name.indexOf(text) !== -1)
    this.setState({ filtered: filtered })
  },

  renderIconWithName (name, idx) {
    return (
      <div key={idx} style={{ padding: '20px', width: '40px', textAlign: 'center'}}>
        <div style={{ textAlign: 'center' }}>
          <Icon name={name} size='3x' />
        </div>
        <div style={{ fontSize: '12px', wordBreak: 'normal' }}>{name}</div>
      </div>
    )
  },

  render () {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: '100vw'}}>
        <div style={{ width: '100%' }}>
          สวัสดี
          <FormInput onChange={this.onChange} placeholder='Search something....' />
        </div>
      {_.map(this.state.filtered, this.renderIconWithName)}
      </div>
    )
  }
})


export const stories = {
  'all Icons': () => <AllIcons />,

}
