import React, { Component } from 'react'
import { connect } from 'react-redux'
import Countdown from 'react-countdown-now'

import { timeIsUp } from '../actions/contentActions'

class Timer extends Component {
	renderCountdown = ({ minutes, seconds, completed }) => {
		return (
			<span>
				{minutes}:{seconds}
			</span>
		)
	}

	state = {
		timeToGo: 1500000
	}

	render() {
		return (
			<div className="countdown">
				{!this.props.content.done && (
					<React.Fragment>
						<Countdown
							onTick={() =>
								this.setState({ timeToGo: this.state.timeToGo - 1000 })
							}
							date={Date.now() + this.state.timeToGo}
							onComplete={() => this.props.timeIsUp(this.props.content)}
							renderer={this.renderCountdown}
						/>
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
		timeIsUp: content => dispatch(timeIsUp(content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
