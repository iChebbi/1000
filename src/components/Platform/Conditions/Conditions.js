import React, { Component } from 'react'
import './style.css'

class Conditions extends Component {
  render() {
    return (
      <div className="Conditions">
        <p className="header">Déroulement du processus du séléction</p>
        <p>Le processus de sélection se déroule sur 3 étapes :</p>
        <div className="step">
          <p className="step-title">Etape 1 :</p>
          <div className="step-content">
            <p>L'étudiant doit passer par un : </p>
            <ul>
              <li>
                Formulaire en ligne (Données personnelles et motivations de
                participation dans le programme){' '}
              </li>
              <li>Test de logique en ligne.</li>
            </ul>
          </div>
        </div>

        <div className="step">
          <p className="step-title">Etape 2 :</p>
          <div className="step-content">
            <p>
              une fois l’étudiant passe le premier filtre en ligne, il est
              invité à notre hackerspace pour participer à:{' '}
            </p>
            <ul>
              <li>
                Un challenge de problem solving pour s’assurer qu’il est capable
                d’aller jusqu’au bout dans le programme{' '}
              </li>
              <li>
                Un entretien de motivation: Le candidat est invité à un
                entretien de motivation à la suite du challenge de problem
                solving le même jour.
              </li>
            </ul>
          </div>
        </div>

        <div className="step">
          <p className="step-title">Etape 3 :</p>
          <div className="step-content">
            <p>
              Les candidats qui réussissent les 2 étapes de sélection seront
              invités à participer à la session de formation la plus proche.
            </p>
          </div>
        </div>
				<div className="navigation">
					<button className="btn-next" onClick={()=> this.props.setTab('Profile')}>Next</button>
				</div>
      </div>
    )
  }
}

export default Conditions
