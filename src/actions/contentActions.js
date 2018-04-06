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
  const previousCurrentQuestion =
    content.currentQuestion !== 0 ? content.currentQuestion - 1 : 0
  return {
    type: 'PREV_QUESTION',
    payload: previousCurrentQuestion
  }
}

export const nextQuestion = content => {
  const nextCurrentQuestion =
    content.questions.length > content.currentQuestion + 1
      ? content.currentQuestion + 1
      : content.questions.length - 1
  content.done =
    content.questions.length === content.currentQuestion + 1 ? true : false
  return {
    type: 'NEXT_QUESTION',
    payload: nextCurrentQuestion
  }
}

export const timeIsUp = content => {
  return {
    type: 'TIME_UP'
  }
}
