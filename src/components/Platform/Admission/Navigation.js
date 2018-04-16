import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  nextQuestion,
  previousQuestion,
  startTest,
  finishAndSubmit
} from '../../../actions/contentActions'

class Choices extends Component {
  render() {
    return (
      <div className="navigation">
        {!this.props.content.done && (
          <React.Fragment>
            {this.props.content.questions &&
              this.props.content.currentQuestion + 1 <=
                this.props.content.questions.length && (
                <React.Fragment>
                  {this.props.content.currentQuestion !== 0 && (
                    <div
                      className="btn btn-nav"
                      onClick={() =>
                        this.props.previousQuestion(this.props.content)
                      }
                    >
                      &#60;
                    </div>
                  )}
                  {this.props.content.currentQuestion + 1 !==
                    this.props.content.questions.length && (
                    <div
                      className="btn btn-nav"
                      onClick={() =>
                        this.props.nextQuestion(this.props.content)
                      }
                    >
                      &#62;
                    </div>
                  )}
                </React.Fragment>
              )}
            {this.props.content.example &&
              this.props.content.currentQuestion + 1 &&
              this.props.content.questions.length &&
              this.props.content.currentQuestion + 1 ===
                this.props.content.questions.length && (
                <div
                  className="btn btn-start"
                  onClick={() => this.props.startTest()}
                >
                  START !
                </div>
              )}
            {!this.props.content.example &&
              this.props.content.currentQuestion + 1 &&
              this.props.content.questions.length &&
              this.props.content.currentQuestion + 1 ===
                this.props.content.questions.length && (
                <div
                  className="btn btn-start"
                  onClick={() => this.props.finishAndSubmit(this.props.content)}
                >
                  SUBMIT !
                </div>
              )}
          </React.Fragment>
        )}
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
    previousQuestion: content => dispatch(previousQuestion(content)),
    nextQuestion: content => dispatch(nextQuestion(content)),
    startTest: () => dispatch(startTest()),
    finishAndSubmit: content => dispatch(finishAndSubmit(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
