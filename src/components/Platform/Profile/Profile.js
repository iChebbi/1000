import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

import { base_url } from '../../../assets/env'

class Coordonnees extends Component {
  state = {
    step: 'Coordonnées',
    info: {
      gender: 'male'
    },
    education: {
      bacDegree: 'Master'
    },
    assos: {
      board: true,
      member: false
    }
  }

  loadUser = () => {}

  userUpdate = async () => {
    try {
      const response = await axios.put(
        base_url + '/api/user/' + window.localStorage.user_id,
        {
          info: this.state.info,
          education: this.state.education,
          assos: this.state.assos
        },
        {
          headers: { token: window.localStorage.access_token }
        }
      )
      console.log(response.status === 200)
      return response.status === 200
    } catch (error) {
      console.log(error)
      return false
    }
  }

  handleInfoInputChange = e => {
    this.setState({
      info: { ...this.state.info, [`${e.target.name}`]: e.target.value }
    })
  }

  handleEduInputChange = e => {
    this.setState({
      education: {
        ...this.state.education,
        [`${e.target.name}`]: e.target.value
      }
    })
  }

  handleAssosInputChange = e => {
    this.setState({
      assos: {
        ...this.state.assos,
        [`${e.target.name}`]: e.target.value
      }
    })
  }

  renderPerosnalDataForm = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <label className="label-right">Nom</label>
            <input
              name="firstName"
              value={this.state.info.firstName}
              onChange={this.handleInfoInputChange}
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">Prénom</label>
            <input
              name="lastName"
              onChange={this.handleInfoInputChange}
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">Sexe</label>
            <div className="toggle-group">
              <button
                onClick={() => this.setState({ info: { gender: 'female' } })}
                className={
                  this.state.info.gender === 'female'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Femme
              </button>
              <button
                onClick={() => this.setState({ info: { gender: 'male' } })}
                className={
                  this.state.info.gender === 'male'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Homme
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="label-right label-small">Date de naissance</label>
            <input
              name="birthdate"
              onChange={this.handleInfoInputChange}
              type="Date"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">CIN</label>
            <input
              name="cin"
              onChange={this.handleInfoInputChange}
              type="text"
              required
            />
          </div>
        </div>

        <div className="form-container">
          <div className="form-group">
            <label className="label-right">Email</label>
            <input
              name="email"
              onChange={this.handleInfoInputChange}
              type="email"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">Numéro Tél</label>
            <input
              name="phone"
              onChange={this.handleInfoInputChange}
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">Gouvernorat</label>
            <select name="governorate" onChange={this.handleInfoInputChange}>
              <option value="" />
              <option value="Ariana">Ariana</option>
              <option value="Béja">Béja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabès">Gabès</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Kébili">Kébili</option>
              <option value="Le Kef">Le Kef</option>
              <option value="Mahdia">Mahdia</option>
              <option value="La Manouba">La Manouba</option>
              <option value="Médenine">Médenine</option>
              <option value="Monastir">Monastir</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Sfax">Sfax</option>
              <option value="Sidi">Sidi</option> Bouzid
              <option value="Siliana">Siliana</option>
              <option value="Sousse">Sousse</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Zaghouan">Zaghouan</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-right">Ville</label>
            <input
              name="city"
              onChange={this.handleInfoInputChange}
              type="text"
              required
            />
          </div>

          <div className="form-group">
            <label className="label-right">Adresse</label>
            <input
              name="address"
              onChange={this.handleInfoInputChange}
              type="text"
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderEducationForm = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <label className="label-right">Année Obtention Bac</label>
            <select name="bacYear" onChange={this.handleEduInputChange}>
              <option value="" />
              <option value="2009">2009</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-right">Spécialité Bac</label>
            <select name="bacMajor" onChange={this.handleEduInputChange}>
              <option value="" />
              <option value="Sciences expérimentales">
                Sciences expérimentales
              </option>
              <option value="Mathématiques">Mathématiques</option>
              <option value="Économie et gestion">Économie et gestion</option>
              <option value="Technique">Technique</option>
              <option value="Lettres">Lettres</option>
              <option value="Sport">Sport</option>
              <option value="Informatique">Informatique</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-right">Moyenne Bac</label>
            <input
              name="bacAvg"
              onChange={this.handleEduInputChange}
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="label-right">Diplôme</label>
            <div className="toggle-group">
              <button
                onClick={() =>
                  this.setState({ education: { bacDegree: 'Licence' } })
                }
                className={
                  this.state.education.bacDegree === 'Licence'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Licence
              </button>
              <button
                onClick={() =>
                  this.setState({ education: { bacDegree: 'Ing' } })
                }
                className={
                  this.state.education.bacDegree === 'Ing'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Ingénieur
              </button>
              <button
                onClick={() =>
                  this.setState({ education: { bacDegree: 'Master' } })
                }
                className={
                  this.state.education.bacDegree === 'Master'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Master
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="label-right">Copie Diplôme</label>
            <input
              name="degreeFile"
              onChange={this.handleEduInputChange}
              type="file"
            />
          </div>

          <div className="form-group">
            <label className="label-right label-small">
              Dernier Établissement fréquenté
            </label>
            <input
              name="lastUni"
              onChange={this.handleEduInputChange}
              type="text"
            />
          </div>

          <div className="form-group">
            <label className="label-right">Spécialité</label>
            <input
              name="lastMajor"
              onChange={this.handleEduInputChange}
              type="text"
            />
          </div>
        </div>
      </React.Fragment>
    )
  }

  renderVolunteerWorkForm = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <p className="profile-text">
              Étiez-vous membre dans le conseil d’administration d’une
              association ?
            </p>
            <div className="toggle-group">
              <button
                onClick={() =>
                  this.setState({
                    ...this.state,
                    assos: { ...this.state.assos, board: false }
                  })
                }
                className={
                  this.state.assos.board === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() =>
                  this.setState({
                    assos: { ...this.state.assos, board: true }
                  })
                }
                className={
                  this.state.assos.board === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.assos.board && (
            <div className="form-group">
              <label>Laquelle ?</label>
              <input
                name="organization"
                onChange={this.handleAssosInputChange}
                type="text"
              />
            </div>
          )}

          {!this.state.assos.board && (
            <div className="form-group">
              <p className="profile-text">
                Étiez-vous membre actif dans une association ?
              </p>
              <div className="toggle-group">
                <button
                  onClick={() =>
                    this.setState({
                      assos: { ...this.state.assos, member: false }
                    })
                  }
                  className={
                    this.state.assos.member === false
                      ? 'toggle toggle-active'
                      : 'toggle'
                  }
                >
                  Non
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      assos: { ...this.state.assos, member: true }
                    })
                  }
                  className={
                    this.state.assos.member === true
                      ? 'toggle toggle-active'
                      : 'toggle'
                  }
                >
                  Oui
                </button>
              </div>
            </div>
          )}

          {!this.state.assos.board &&
            this.state.assos.member && (
              <div className="form-group">
                <label>Laquelle ?</label>
                <input
                  name="organization"
                  onChange={this.handleAssosInputChange}
                  type="text"
                />
              </div>
            )}
        </div>
      </React.Fragment>
    )
  }

  backStep = () => {
    switch (this.state.step) {
      case 'Education':
        return this.setState({ step: 'Coordonnées' })
      case 'Vie Associative':
        return this.setState({ step: 'Education' })
      default:
        return this.setState({ step: 'Coordonnées' })
    }
  }

  nextStep = () => {
    switch (this.state.step) {
      case 'Coordonnées':
        //validate inputs
        return this.setState({ step: 'Education' })
      case 'Education':
        //validate inputs
        return this.setState({ step: 'Vie Associative' })
      case 'Vie Associative':
        if (this.userUpdate()) return this.props.setTab('Background')
        return
      default:
        return this.setState({ step: 'Coordonnées' })
    }
  }

  render() {
    return (
      <div className="Profile">
        <div>
          <span className="profile-title">Dis-nous un peu plus sur toi : </span>
          <span>{this.state.step}</span>
        </div>
        <div className="double-form-container">
          {this.state.step === 'Coordonnées' && this.renderPerosnalDataForm()}
          {this.state.step === 'Education' && this.renderEducationForm()}
          {this.state.step === 'Vie Associative' &&
            this.renderVolunteerWorkForm()}
        </div>
        <div className="navigation">
          {!(this.state.step === 'Coordonnées') && (
            <button className="btn-next" onClick={() => this.backStep()}>
              back
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

export default Coordonnees
