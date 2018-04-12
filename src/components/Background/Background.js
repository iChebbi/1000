import React, { Component } from 'react'
import './style.css'

class Background extends Component {
  state = {
    step: 0,
    notionsToggle: false,
    projetToggle: false,
    stageToggle: false
  }

  nextStep = () => {
    this.state.step < 5
      ? this.setState({ step: this.state.step + 1 })
      : this.props.setTab('Conseils')
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
                onClick={() => this.setState({ notionsToggle: false })}
                className={
                  this.state.notionsToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() => this.setState({ notionsToggle: true })}
                className={
                  this.state.notionsToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.notionsToggle && (
            <div className="form-group">
              <label>Citez-les</label>
              <textarea name="" id="" cols="30" rows="10" />
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
                onClick={() => this.setState({ projetToggle: false })}
                className={
                  this.state.projetToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() => this.setState({ projetToggle: true })}
                className={
                  this.state.projetToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.projetToggle && (
            <div className="form-group">
              <label>Décrire le birèvement</label>
              <textarea name="" id="" cols="30" rows="10" />
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
                onClick={() => this.setState({ stageToggle: false })}
                className={
                  this.state.stageToggle === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() => this.setState({ stageToggle: true })}
                className={
                  this.state.stageToggle === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.stageToggle && (
            <div className="form-group">
              <label>Décrire ce que vous avez fait</label>
              <textarea name="" id="" cols="30" rows="10" />
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
            <textarea name="" id="" cols="30" rows="10" />
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
            <textarea name="" id="" cols="30" rows="10" />
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
            <textarea name="" id="" cols="30" rows="10" />
          </div>
        </div>
      </React.Fragment>
    )
  }

	renderForms = () => {
		switch(this.state.step) {
			case 0 : return this.renderFirstStep()
			case 1 : return this.renderSecondStep() 
			case 2 : return this.renderThirdStep()
			case 3 : return this.renderFourthStep()
			case 4 : return this.renderFifthStep()
			case 5 : return this.renderSixthStep()
		}
	}

  render() {
    return (
      <div className="Background">
        <div className="Background-title">Background informatique</div>
        <div className="double-form-container">{this.renderForms()}</div>
        <div className="navigation">
          <button className="btn-next" onClick={() => this.nextStep()}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default Background
