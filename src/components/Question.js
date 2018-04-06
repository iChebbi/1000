import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
			<div className="question">
        {
					this.props.content.questions &&
					(<React.Fragment>
						<h2>Question {this.props.content.currentQuestion + 1 } </h2>
						{
							this.props.content.questions[this.props.content.currentQuestion].image &&
							<img src={this.props.content.questions[this.props.content.currentQuestion].image} alt=""/>
							}
						<h3>Question {this.props.content.questions[this.props.content.currentQuestion].content} </h3>
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
