import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { changeContent } from '../../../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import Navigation from './Navigation'

import { base_url } from '../../../assets/env'

class PreTest extends Component {
  componentDidMount = async () => {
    try {
      const response = await axios.get(base_url + '/api/questions/examples', {
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
        <Question />
        <div className="test-footer">
					<div className="blank"/>
          <Choices />
          <Navigation />
        </div>
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
