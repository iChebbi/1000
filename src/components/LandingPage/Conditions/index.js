import React, { Component } from 'react'
// import { Col, Row, Grid } from 'react-bootstrap'
import './Conditions.css'

class Conditions extends Component {
  render () {
    return (
      <div className='conditions-comp-container'>
        <div className='conditions-description-container'>
          <div className='conditions-description'>
            <div className='conditions-description-titles'>
              <h2>Les conditions d'éligibilité</h2>
              <p>
              Pour pouvoir participer au programme et beneficier de la bourse,
              il faut avoir les conditions suivantes.
            </p>
            </div>
            <div className='conditions-container'>
              <div className='conditions-in-group'>
                <div className='condition-first-line'>
                  <div className='condition'>
                    <img  alt=""src='fond icon 1.png' />
                    <p>Avoir un diplome d'ingenieur ou etre titulaire d'un Master M2</p>
                  </div>
                  <div className='condition'>
                    <img  alt=""src='fond icon 2.png' />
                    <p> étre a la recherche d'un emploi et avoir entre 25 et 35 ans </p>
                  </div>
                </div>
                <div className='condition-second-line'>
                  <div className='condition'>
                    <img  alt=""src='fond icon 3.png' />
                    <p>  Prouver sa passion pour l'informatique dans les formulaire
                  d'inscription www.gomycode.tn/1000 </p>
                  </div>
                  <div className='condition'>
                    <img  alt=""src='fond icon 4.png' />
                    <p> Reussir le test en ligne qui sera accessible du 1er au 8 Juin
                  2018 sur le lien suivant </p>
                  </div>
                </div>
              </div>
              <div className='conditions-large'>
                <img  alt=""src='fond icon 5.png' />
                <p>Réussir ensuite le Challenge qui aura lieu dans les locaux de
              GoMyCode à Tunis, Sousse et Sfax : cette épreuve va décider de ton
              admission dans le programme 1000. Elle permet d'identifier les
              plus motivés et de confirmer la capacité des étudiants à aller
              jusqu'au bout dans le programme</p>
              </div>
            </div>
          </div>
        </div>
        <div className='conditions-img'>
          <div className='gradiant' />
        </div>
      </div>
    )
  }
}

export default Conditions
