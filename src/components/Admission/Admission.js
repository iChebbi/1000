import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeContent } from '../../actions/contentActions'

import PreTest from './PreTest'
import Test from './Test'

import './style.css'

class App extends Component {
  render() {
    return (
      <div className="admission">
        {this.props.content && this.props.content.example && <PreTest />}
        {this.props.content && !this.props.content.example && <Test />}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
