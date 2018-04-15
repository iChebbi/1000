import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextQuestion, previousQuestion } from '../../../actions/contentActions'

class Results extends Component {
  enumurateCorrectAnswers = () => {
    return this.props.content.questions
      .map((question, i) =>
        question.choices.filter(
          (choice, x) =>
            choice.isCorrect === choice.isSelected && choice.isSelected
        )
      )
      .filter((answer, i) => answer.length !== 0)
  }

  render() {
    return (
      <div className="content">
        {this.props.content.interrupt && (
          <h2 className="warning">{this.props.content.interruptMessage}</h2>
        )}
        <h2>Results :</h2>
        <p>Questions answered</p>
        {this.props.results && (
          <div>
            {this.props.results.results.length}/{
              this.props.content.questions.length
            }
          </div>
        )}
        <div className="remarks">
          {this.props.results && this.props.results.results.length <= 12 && <h2>Below Average !</h2>}
          {this.props.results && this.props.results.results.length > 12 &&
            this.props.results.results.length < 19 && <h2>Average !</h2>}
          {this.props.results && this.props.results.results.length >= 19 && <h2>Excellent !</h2>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    content: state.content,
    results: state.content.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    previousQuestion: content => dispatch(previousQuestion(content)),
    nextQuestion: content => dispatch(nextQuestion(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
