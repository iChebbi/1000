import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
	render() {
		if (this.props.content.questions)
			console.log(`../assets/${this.props.content.questions[this.props.content.currentQuestion].image}`)
		return (
			<div className="content">
				{
					this.props.content.questions &&
					(<React.Fragment>
						<h3>Question {this.props.content.currentQuestion + 1} </h3>
						<div className="imgHolder">
							{
								this.props.content.questions[this.props.content.currentQuestion].image &&
								<img src={window.location.origin + '/assets/' + this.props.content.questions[this.props.content.currentQuestion].image} alt="" />
							}
						</div>
						<h4>Question {this.props.content.questions[this.props.content.currentQuestion].content} </h4>
					</React.Fragment>)
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

export default connect(mapStateToProps)(Question)
