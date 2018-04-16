import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { changeContent } from '../../../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import Result from './Results'
import Timer from './Timer'
// import data from '../../../assets/data.json'
import Navigation from './Navigation'
import Porgress from './Porgress'

import { base_url } from '../../../assets/env'

class Test extends Component {
  componentDidMount = async () => {
    try {
      const response = await axios.get(base_url + '/api/questions', {
        headers: { token: window.localStorage.access_token }
      })
      response.status === 200 && this.props.changeContent(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="test">
        {!this.props.content.done && (
          <React.Fragment>
            <div className="test-header">
              <Timer />
              <Porgress />
            </div>
            <Question />
            <div className="test-footer">
              <div className="blank" />
              <Choices />
              <Navigation />
            </div>
          </React.Fragment>
        )}
        {this.props.content.done && <Result />}
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

export default connect(mapStateToProps, mapDispatchToProps)(Test)
