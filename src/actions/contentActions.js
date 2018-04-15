import axios from 'axios'
import { base_url } from '../assets/env'

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

  return {
    type: 'NEXT_QUESTION',
    payload: content
  }
}

export const finishAndSubmit = content => {
  return async dispatch => {
    try {
      const response = await axios.post(
        base_url + '/api/user/submit',
        {
          questions: content.questions,
          id: window.localStorage.user_id
        },
        {
          headers: { token: window.localStorage.access_token }
        }
      )
      console.log(response.data)
      dispatch({ type: 'FINISH', payload: response.data })
    } catch (error) {
      console.log(error)
    }
  }
}

export const startTest = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        base_url + '/api/user/start/' + window.localStorage.user_id,
        {
          headers: { token: window.localStorage.access_token }
        }
			)
      response.status === 200 &&
        response.data.canStart &&
        dispatch({
          type: 'START_TEST',
          payload: response.data.remaining
        })
      response.status === 200 &&
        !response.data.canStart &&
        dispatch({
          type: 'INTERRUPT',
          payload: {
            message: 'Your Time is UP',
            results: response.data.results
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export const interrupt = message => {
  return {
    type: 'INTERRUPT',
    payload: { message }
  }
}
