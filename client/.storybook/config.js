import { configure, storiesOf, action } from '@kadira/storybook'
import _ from 'lodash'
import React from 'react'
import { basename } from 'path'

require('font-awesome/css/font-awesome.css')

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  for (const key of _.sortBy(context.keys(), storybookNameOfKey)) {
    const moduleExports = context(key)
    if (!moduleExports.module) {
      throw new Error(`Story ${key} did not export the module. Fix by adding: "export { module }"`)
    }
    if (!moduleExports.stories) {
      throw new Error(`Story ${key} did not export stories! Fix by adding: "export const stories = { ... }"`)
    }
    const storybook = storiesOf(storybookNameOfKey(key))
    for (const storyName of Object.keys(moduleExports.stories)) {
      storybook.add(storyName, () => (
        <div>
          {moduleExports.stories[storyName](action)}
        </div>
      ))
    }
  }
}

configure(loadStories, module)

function storybookNameOfKey (key) {
  return basename(key, '.story.js')
}
