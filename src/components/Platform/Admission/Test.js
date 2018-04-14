import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeContent } from '../../../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import Result from './Results'
import Timer from './Timer'
import data from '../../../assets/data.json'
import Navigation from './Navigation'
import Porgress from './Porgress'

class Test extends Component {
  componentDidMount = () => {
    this.props.changeContent(data.questions)
  }

  render() {
    return (
      <div className="test">
        {!this.props.content.done && (
          <React.Fragment>
            <div className="test-header">
              <Timer />
							<Porgress />
              <Navigation />
            </div>
            <Question />
            <Choices />
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
