import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextQuestion, previousQuestion } from '../../actions/contentActions'

class Results extends Component {
	enumurateCorrectAnswers = () => {
		return this.props.content.questions
			.map((question, i) => question.choices
				.filter((choice, x) => choice.isCorrect === choice.isSelected && choice.isSelected))
			.filter((answer, i) => answer.length !== 0)
	}

	render() {
		return (
			<div className="content">
				{
					this.props.content.timeIsUp &&
					(<h2 className="warning">Time is UP !</h2>)
				}
				<h2>Results :</h2>
				<p>Questions answered</p>
				{
					this.props.content &&
					(<div>{this.enumurateCorrectAnswers().length}/{this.props.content.questions.length}</div>)
				}
				<div className="remarks">
					{ this.enumurateCorrectAnswers().length < 1 &&
					<h2>Below Average !</h2>}
					{ this.enumurateCorrectAnswers().length > 1 && this.enumurateCorrectAnswers().length < 2 &&
					<h2>Average !</h2>}
					{ this.enumurateCorrectAnswers().length > 2 &&
					<h2>Excellent !</h2>}
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
		previousQuestion: content => dispatch(previousQuestion(content)),
		nextQuestion: content => dispatch(nextQuestion(content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
