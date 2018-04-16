import React, { Component } from 'react'
import './style.css'

class Conditions extends Component {
  render () {
    return (
      <div className='conditions-container'>
        <div className='conditions-container-left'>
          <div className='conditions-container-intro'>
            <div className='conditions-container-intro-title'>
              <h2>Les conditions d'éligibilité</h2>
            </div>
            <p>
         Les jeunes éligibles à ce programme doivent satisfaire les conditions suivantes :
          </p>
          </div>

          <div className='conditions'>
            <div className='row'>

              <div className='col-sm-4'>
                <div className='condition'>
                  <img alt=""  src='conditions-icons/fond icon 1.png' />
                  <p>
                    <span className='condition-title'>Diplôme universitaire</span> <br /> Avoir une Licence, un Master ou un Diplôme d'ingénieur.</p>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='condition'>
                  <img alt=""  src='conditions-icons/fond icon 5.png' />
                  <p><span className='condition-title'>Sélection </span> <br />Réussir les épreuves en ligne et les entretiens de motivation.</p>
                </div>
              </div>

              <div className='col-sm-4'>
                <div className='condition'>
                  <img alt=""  src='conditions-icons/fond icon 3.png' />
                  <p> <span className='condition-title'>Age</span> <br /> Avoir moins de 32 ans au 01/07/2018.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className='conditions-img'>
          <div className='light-gradiant' />
        </div>
      </div>
    )
  }
}

export default Conditions
