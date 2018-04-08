import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectAnswer } from '../../actions/contentActions'

class Choices extends Component {
	render() {
		return (
			<div className="choices">
				{this.props.content.questions && (
					this.props.content.questions[
						this.props.content.currentQuestion
					].choices.map((choice, i) => {
						return (
							<div
								key={i}
								className={choice.isSelected ? 'btn-active btn' : 'btn'}
								onClick={() => this.props.selectAnswer(this.props.content, i)}
							>
								{choice.content}
							</div>
						)
					})
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
		selectAnswer: (content, index) => dispatch(selectAnswer(content, index))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
