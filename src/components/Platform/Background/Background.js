import React, { Component } from 'react'
import axios from 'axios'

import { base_url } from '../../../assets/env'

import './style.css'

class Background extends Component {
  state = {
    step: 0,
    background: {
      notionsToggle: false,
      projetToggle: false,
      stageToggle: false
    }
  }

  loadUser = async () => {
    try {
      const response = await axios.get(
        base_url + '/api/user/' + window.localStorage.user_id,
        {
          headers: { token: window.localStorage.access_token }
        }
      )
      if (response.status === 200) this.setState(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  userUpdate = async () => {
    try {
      const response = await axios.put(
        base_url + '/api/user/' + window.localStorage.user_id,
        {
          background: this.state.background
        },
        {
          headers: { token: window.localStorage.access_token }
        }
      )
      return response.status === 200
    } catch (error) {
      console.log(error)
      return false
    }
  }

  componentDidMount = () => {
    this.loadUser()
  }

  handleInputChange = e => {
    this.setState({
      background: {
        ...this.state.background,
        [`${e.target.name}`]: e.target.value
      }
    })
  }

  backStep = () => {
    this.state.step > 0 && this.setState({ step: this.state.step - 1 })
  }
  nextStep = () => {
    this.state.step < 5
      ? this.setState({ step: this.state.step + 1 })
      : this.userUpdate() && this.props.setTab('Conseils')
  }

  renderFirstStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Avez-vous des notions d'informatique ?
            </p>
            <div className="toggle-group">
              <button
                onClick={() =>
                  this.setState({
                    background: {
                      ...this.state.background,
                      notionsToggle: false
                    }
                  })
                }
                className={
                  this.state.background.notionsToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() =>
                  this.setState({
                    background: {
                      ...this.state.background,
                      notionsToggle: true
                    }
                  })
                }
                className={
                  this.state.background.notionsToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.background.notionsToggle && (
            <div className="form-group">
              <label>Citez-les</label>
              <textarea
                name="notions"
                cols="30"
                rows="10"
                onChange={this.handleInputChange}
                value={this.state.background.notions || ''}
              />
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }

  renderSecondStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Avez-vous déjà travaillé sur un projet informatique avant?
            </p>
            <div className="toggle-group">
              <button
                onClick={() =>
                  this.setState({
                    background: {
                      ...this.state.background,
                      projetToggle: false
                    }
                  })
                }
                className={
                  this.state.background.projetToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() =>
                  this.setState({
                    background: {
                      ...this.state.background,
                      projetToggle: true
                    }
                  })
                }
                className={
                  this.state.background.projetToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.background.projetToggle && (
            <div className="form-group">
              <label>Décrire le birèvement</label>
              <textarea
                name="projets"
                cols="30"
                rows="10"
                onChange={this.handleInputChange}
                value={this.state.background.projets || ''}
              />
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }

  renderThirdStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Avez-vous déjà réalisé un stage en entreprise ?
            </p>
            <div className="toggle-group">
              <button
                onClick={() =>
                  this.setState({
                    background: { ...this.state.background, stageToggle: false }
                  })
                }
                className={
                  this.state.background.stageToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() =>
                  this.setState({
                    background: { ...this.state.background, stageToggle: true }
                  })
                }
                className={
                  this.state.background.stageToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.background.stageToggle && (
            <div className="form-group">
              <label>Décrire ce que vous avez fait</label>
              <textarea
                name="stages"
                cols="30"
                rows="10"
                onChange={this.handleInputChange}
                value={this.state.background.stages || ''}
              />
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }

  renderFourthStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Parlez nous d’un projet que vous avez réalisé et dont vous êtes
              fiers ?
            </p>
          </div>

          <div className="form-group">
            <textarea
              name="projetFier"
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
              value={this.state.background.projetFier || ''}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderFifthStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Pourriez-vous nous expliquer en quelques phrases pourquoi vous
              voulez participer dans le programme 1000 Coders de GoMyCode ?
            </p>
          </div>

          <div className="form-group">
            <textarea
              name="motivation"
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
              value={this.state.background.motivation || ''}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderSixthStep = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="Background-text">
              Pourquoi vous pensez que vous pouvez réussir la formation ?
            </p>
          </div>

          <div className="form-group">
            <textarea
              name="reussir"
              cols="30"
              rows="10"
              onChange={this.handleInputChange}
              value={this.state.background.reussir || ''}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderForms = () => {
    switch (this.state.step) {
      case 0:
        return this.renderFirstStep()
      case 1:
        return this.renderSecondStep()
      case 2:
        return this.renderThirdStep()
      case 3:
        return this.renderFourthStep()
      case 4:
        return this.renderFifthStep()
      case 5:
        return this.renderSixthStep()
      default:
        return this.renderFirstStep()
    }
  }

  render() {
    return (
      <div className="Background">
        <div className="Background-title">Background informatique</div>

        <div className="double-form-container">{this.renderForms()}</div>
        <div className="navigation">
          {this.state.step !== 0 && (
            <button className="btn-next" onClick={() => this.backStep()}>
              Back
            </button>
          )}
          <button className="btn-next" onClick={() => this.nextStep()}>
            Next
          </button>
        </div>
      </div>
    )
  }
}


export default Background
