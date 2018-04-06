import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextQuestion, previousQuestion } from '../actions/contentActions'

class Choices extends Component {
	render() {
		return (
			<div>
				{
					!this.props.content.done &&
					(
						<React.Fragment>
							<span onClick={() => this.props.previousQuestion(this.props.content)} style={{ margin: 5 }}>Back</span>
							<span onClick={() => this.props.nextQuestion(this.props.content)} style={{ margin: 5 }}>Next</span>
						</React.Fragment>
					)
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

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
