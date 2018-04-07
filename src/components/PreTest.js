import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeContent } from '../actions/contentActions'

import Question from './Question'
import Choices from './Choices'
import data from '../data.json'

import './style.css'

class PreTest extends Component {
	componentDidMount = () => {
		this.props.changeContent(data.examples)
	}

	render() {
		return (
			<div className="app">
				<Question />
				<Choices />
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
		changeContent: content => dispatch(changeContent(content))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PreTest)
