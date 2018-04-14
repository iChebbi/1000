import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeContent } from '../../../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import Navigation from './Navigation'

import data from '../../../assets/data.json'

class PreTest extends Component {
  componentDidMount = () => {
    this.props.changeContent(data.examples)
  }

  render() {
    return (
      <div className="test">
        <div className="pretest-header">
          <Navigation />
        </div>
        <Question />
        <Choices />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeContent: content => dispatch(changeContent(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreTest)
