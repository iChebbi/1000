import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { login } from '../../../actions/authActions'

import { base_url } from '../../../assets/env'

import './Form.css'

class Form extends React.Component {
  onChangeStateValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(base_url + '/api/register', {
        email: this.state.email,
        phone: this.state.phone,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      console.log(response)

      window.localStorage.access_token = response.data.token
      window.localStorage.user_id = response.data.id
      window.localStorage.user_email = response.data.email

      if (response.status === 200) {
        this.props.login()
        window.location.pathname = '/platform'
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="form-component-container">
        <div className="dark-gradiant" />
        <div className="slide-container">
          <div className="description-container">
            <h1>Deviens Développeur</h1>
            <h4>et démarre ta carrière dans l’informatique !</h4>

            <p>
              1000 Coders est un programme de 1000 bourses sur 3 ans qui permet
              à ceux qui répondent aux conditions de suivre le programme Full
              Time Coding de GoMyCode...
            </p>
          </div>

          <form onSubmit={this.handleSubmit} className="form-container">
            <div className="input-container">
              <div className="input-line1">
                <div>
                  <h4>
                    <label> Nom </label>
                  </h4>
                  <input
                    type="text"
                    name="firstName"
                    onChange={this.onChangeStateValue}
                    required
                  />
                </div>
                <div>
                  <h4>
                    <label> Prénom </label>
                  </h4>
                  <input
                    type="text"
                    name="lastName"
                    onChange={this.onChangeStateValue}
                    required
                  />
                </div>
              </div>
              <div className="input-line2">
                <div>
                  <h4>
                    <label> Numéro de téléphone </label>
                  </h4>
                  <input
                    type="number"
                    min="10000000"
                    max="99999999"
                    name="phone"
                    onChange={this.onChangeStateValue}
                    required
                  />
                </div>
                <div>
                  <h4>
                    <label> E-mail </label>
                  </h4>
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChangeStateValue}
                  />
                </div>
              </div>
            </div>
            <div className="submit-btn-container">
              <input
                type="submit"
                value="Commencer"
                className="submit-button"
              />
            </div>
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

export default connect(null, mapDispatchToProps)(Form)
