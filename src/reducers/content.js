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
      return { ...state, example: false, timeToGo: action.payload }
    case 'INTERRUPT':
      return {
        ...state,
        example: false,
        done: true,
        interrupt: true,
        results: { results: action.payload.results || {} },
        interruptMessage: action.payload.message
      }
    case 'FINISH':
      return { ...state, done: true, results: action.payload }
    default:
      return state
  }
}
