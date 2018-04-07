export const changeContent = content => {
	return {
		type: 'CHANGE_CONTENT',
		payload: content
	}
}

export const selectAnswer = (content, selectedIndex) => {
	if (!content.questions[content.currentQuestion].done) {
		content.questions[content.currentQuestion].choices.map(
			(choice, i) => (choice.isSelected = i === selectedIndex ? true : false)
		)
	}
	return {
		type: 'SELECT_ANSWER',
		payload: content
	}
}

export const previousQuestion = content => {
	content.currentQuestion =
		content.currentQuestion !== 0 ? content.currentQuestion - 1 : 0
	return {
		type: 'PREV_QUESTION',
		payload: content
	}
}

export const nextQuestion = content => {
	content.currentQuestion =
		content.questions.length > content.currentQuestion + 1
			? content.currentQuestion + 1
			: content.questions.length - 1

	content.done =
		(!content.example && content.questions.length === content.currentQuestion + 1) ? true : false

	return {
		type: 'NEXT_QUESTION',
		payload: content
	}
}

export const startTest = () => {
	return {
		type: 'START_TEST',
		payload: {}
	}
}

export const timeIsUp = content => {
	return {
		type: 'TIME_UP'
	}
}
