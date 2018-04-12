import React, { Component } from 'react'
import './style.css'

class Coordonnees extends Component {
  state = {
    sexe: 'female',
    step: 'Coordonnées',
    diplome: 'M2',
    conseil: true,
    membre: false
  }

  renderPerosnalDataForm = () => {
    return (
      <React.Fragment>
        <div className="form-container">
          <div className="form-group">
            <label className="label-right">Nom</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label className="label-right">Prénom</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label className="label-right">Sexe</label>
            <div className="toggle-group">
              <button
                onClick={() => this.setState({ sexe: 'female' })}
                className={
                  this.state.sexe === 'female'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Femme
              </button>
              <button
                onClick={() => this.setState({ sexe: 'male' })}
                className={
                  this.state.sexe === 'male' ? 'toggle toggle-active' : 'toggle'
                }
              >
                Homme
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="label-right">Date de naissance</label>
            <input type="Date" required />
          </div>

          <div className="form-group">
            <label className="label-right">CIN</label>
            <input type="text" required />
          </div>
        </div>

        <div className="form-container">
          <div className="form-group">
            <label className="label-right">Email</label>
            <input type="email" required />
          </div>

          <div className="form-group">
            <label className="label-right">Numéro Tél</label>
            <input type="text" required />
          </div>

          <div className="form-group">
            <label className="label-right">Gouvernorat</label>
            <select>
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
            <input type="text" required />
          </div>

          <div className="form-group">
            <label className="label-right">Adresse</label>
            <input type="text" />
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
            <select>
              <option>2009</option>
              <option>2008</option>
              <option>2007</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label-right">Spécialité Bac</label>
            <select>
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
            <input type="text" />
          </div>

          <div className="form-group">
            <label className="label-right">Diplôme</label>
            <div className="toggle-group">
              <button
                onClick={() => this.setState({ diplome: 'M2' })}
                className={
                  this.state.diplome === 'M2'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Master M2
              </button>
              <button
                onClick={() => this.setState({ diplome: 'Ing' })}
                className={
                  this.state.diplome === 'Ing'
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Ingénieur
              </button>
            </div>
          </div>

          <div className="form-group">
            <label className="label-right">Copie Diplôme</label>
            <input type="file" />
          </div>

          <div className="form-group">
            <label className="label-right">
              Dernier Établissement fréquenté
            </label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label className="label-right">Dernière Spécialité</label>
            <input type="text" />
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
                onClick={() => this.setState({ conseil: false })}
                className={
                  this.state.conseil === false
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Non
              </button>
              <button
                onClick={() => this.setState({ conseil: true })}
                className={
                  this.state.conseil === true
                    ? 'toggle toggle-active'
                    : 'toggle'
                }
              >
                Oui
              </button>
            </div>
          </div>

          {this.state.conseil && (
            <div className="form-group">
              <label>Laquelle ?</label>
              <input type="text" />
            </div>
          )}

          {!this.state.conseil && (
            <div className="form-group">
              <p className="profile-text">
                Étiez-vous membre actif dans une association ?
              </p>
              <div className="toggle-group">
                <button
                  onClick={() => this.setState({ membre: false })}
                  className={
                    this.state.membre === false
                      ? 'toggle toggle-active'
                      : 'toggle'
                  }
                >
                  Non
                </button>
                <button
                  onClick={() => this.setState({ membre: true })}
                  className={
                    this.state.membre === true
                      ? 'toggle toggle-active'
                      : 'toggle'
                  }
                >
                  Oui
                </button>
              </div>
            </div>
          )}

          {!this.state.conseil &&
            this.state.membre && (
              <div className="form-group">
                <label>Laquelle ?</label>
                <input type="text" />
              </div>
            )}
        </div>
      </React.Fragment>
    )
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
        return this.props.setTab('Background')
      default:
        return this.setState({ step: 'Coordonnées' })
    }
  }

  render() {
    return (
      <div className="Profile">
        <div>
          <span className="profile-title">
            Dis-nous en un peu plus sur toi :{' '}
          </span>
          <span>{this.state.step}</span>
        </div>
        <div className="double-form-container">
          {this.state.step === 'Coordonnées' && this.renderPerosnalDataForm()}
          {this.state.step === 'Education' && this.renderEducationForm()}
          {this.state.step === 'Vie Associative' &&
            this.renderVolunteerWorkForm()}
        </div>
        <div className="navigation">
          <button className="btn-next" onClick={() => this.nextStep()}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default Coordonnees
