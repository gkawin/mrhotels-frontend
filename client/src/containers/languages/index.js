
import Action from '../../action'

import React from 'react'
import { connect } from 'react-redux'

//action creator


const LanguagesContainer = React.createClass({
  propTypes: {
    onLoadLanguages: React.PropTypes.func
  },

  componentDidMount () {
    this.props.onLoadLanguages()
  },

  render () {
    return null
  }
})

const mapStateToProps = (state) => {
  return {
    languages: state.languages
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoadLanguages: () => {
      dispatch(Action.LanguagesReceived({ languages: [ 'foobar' ]}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguagesContainer)
