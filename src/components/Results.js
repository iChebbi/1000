import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextQuestion, previousQuestion } from '../actions/contentActions'

class Results extends Component {
  enumurateCorrectAnswers = () => {
    return this.props.content.questions
			.map((question, i) => question.choices
			.filter((choice, x) => choice.isCorrect === choice.isSelected && choice.isSelected))
      .filter((answer, i) => answer.length !== 0)
  }

  render() {
    return (
      <div>
				{
					this.props.content.timeIsUp &&
					(<h1>Time is UP !</h1>)
				}
        <h2>Results</h2>
				{
					this.props.content && 
					(<div>{this.enumurateCorrectAnswers().length}/{this.props.content.questions.length}</div>)
				}
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
    nextQuestion: content => dispatch(nextQuestion(content))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
