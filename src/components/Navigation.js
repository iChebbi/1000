import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextQuestion, previousQuestion } from '../actions/contentActions'

class Choices extends Component {
	render() {
		return (
			<div className="navigation">
				{
					!this.props.content.done &&
					(
						<React.Fragment>
							<div className="btn" onClick={() => this.props.previousQuestion(this.props.content)} style={{ margin: 5 }}>Back</div>
							<div className="btn" onClick={() => this.props.nextQuestion(this.props.content)} style={{ margin: 5 }}>Next</div>
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
