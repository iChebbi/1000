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
    if (window.localStorage.access_token) {
      this.props.login()
      window.location.pathname = '/platform'
    }
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
            <h4>et démarre ta carrière dans le numérique!</h4>

            <p>
              1000 Coders est un programme de 1000 bourses dans le programme{' '}
              <a href="https://gomycode.tn/full-time" target="_blank" rel="noopener noreferrer">
                Full Time Coding
              </a>{' '}
              de GoMyCode. Il s'adresse aux jeunes diplômés de l’enseignement
              supérieur qui veulent démarrer une carrière dans le numérique en
              tant que:
            </p>
            <ul>
              <li>Développeur web fullstack en entreprise</li>
              <li>Développeur web fullstack freelancer</li>
              <li>Co-fondateur d’une startup</li>
            </ul>
          </div>

          <form onSubmit={this.handleSubmit} className="form-container">
            <div className="input-container">
              <div className="input-line">
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
              <div className="input-line">
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
                    required
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
