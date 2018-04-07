export default (state = { example: true }, action) => {
	switch (action.type) {
		case 'CHANGE_CONTENT':
			return {
				...state,
				questions: action.payload,
				currentQuestion: 0
			}
		case 'SELECT_ANSWER':
			return { ...state }
		case 'PREV_QUESTION':
			return { ...state, currentQuestion: action.payload.currentQuestion }
		case 'NEXT_QUESTION':
			return { ...state, currentQuestion: action.payload.currentQuestion }
		case 'START_TEST':
			return { ...state, example: false }
		case 'TIME_UP':
			return {
				...state,
				done: true,
				timeIsUp: true
			}
		default:
			return state
	}
}
