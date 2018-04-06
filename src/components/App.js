import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeContent, timeIsUp } from '../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import Navigation from './Navigation'
import Result from './Results'
import Timer from './Timer'
import data from '../assets/data.json'

import './style.css'

class App extends Component {
	componentDidMount = () => {
		this.props.changeContent(data.examples)
	}

	render() {
		return (
			<div className="app">
				{
					!this.props.content.done && (
						<React.Fragment>
							<Timer />
							<Question />
							<Choices />
							<Navigation />
						</React.Fragment>
					)
				}
				{
					this.props.content.done &&
					(<Result />)

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
		changeContent: content => dispatch(changeContent(content)),
		timeIsUp: content => dispatch(timeIsUp(content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
