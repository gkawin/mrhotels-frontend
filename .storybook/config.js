import React from 'react'
import { configure, storiesOf, action } from '@kadira/storybook'
import { basename } from 'path'
import _ from 'lodash'

function loadStories() {
  const context = require.context('../src', true, /\.story\.jsx$/)
  const chapters = _.sortBy(context.keys(), storyChapter)
  for (const key of chapters) {
    const moduleExports = context(key)
    const stories = Object.keys(moduleExports.stories)
    const storybook = storiesOf(storyChapter(key))

    for (const name of stories) {
      storybook.add(name, () => (
        <div>
          {moduleExports.stories[name](action)}
        </div>
      ))
    }
  }
}

function storyChapter (key) {
  return basename(key, '.story.jsx')
}

configure(loadStories, module)