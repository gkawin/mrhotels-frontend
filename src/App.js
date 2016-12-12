import React from 'react'
import { basename } from 'path'
import _ from 'lodash'

export default React.createClass({
  render () {
    const context = require.context('../src', true, /\.story\.js$/)
    for (const key of _.sortBy(context.keys(), storybookNameOfKey)) {
      console.log(key)
    }

    function storybookNameOfKey (key) {
      return basename(key, '.story.js')
    }
    return <div className='test'>
      <h2>Welcome to React</h2>
    </div>
  }
})
