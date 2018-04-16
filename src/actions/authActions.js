export const login = () => {
  return {
    type: 'LOGIN'
  }
}

export const logout = () => {
	window.localStorage.clear()
  return {
    type: 'LOGOUT'
  }
}
