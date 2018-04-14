import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { login } from '../../../actions/authActions'
import { base_url } from '../../../assets/env'

import './style.css'

class Login extends Component {
  login = async () => {
    try {
      const response = await axios.post(base_url + '/api/authorize', {
        email: this.state.email,
        password: this.state.password
      })
			console.log(response.data)
			
      window.localStorage.access_token = response.data.token
      window.localStorage.user_id = response.data.id
			window.localStorage.user_email = response.data.email
			
      this.props.login()
    } catch (error) {
      console.log(error)
    }
  }

  handleInputChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.state.email && this.state.password && this.login()
  }

  render() {
    return (
      <div className="Login">
        <div className="login-container">
          <div className="header">Login</div>
          <form onSubmit={this.handleSubmit} className="login-form">
            <input
              name="email"
              onChange={this.handleInputChange}
              placeholder="email"
              type="text"
            />
            <input
              name="password"
              onChange={this.handleInputChange}
              placeholder="password"
              type="password"
            />
            <button className="btn">Login</button>
            <button className="btn">Register</button>
            <p className="text-small">forgot password ?</p>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login())
  }
}

export default connect(null, mapDispatchToProps)(Login)
