import React from 'react'
import './style.css'

class Opportunities extends React.Component {
  render () {
    return (
      <div className='opportunities-container'>
        <div className='opportunities-titles'>
          <h2>
            Les opportunités aprés le programme ?
          </h2>
          <p>
            Aprés avoir fini le programme, les etudiants peuvent saisir les opportunités suivantes:
          </p>
        </div>

        <div className='opportunity-list'>
          <div className='opportunity-item'>
            <p>
              <i className='far fa-building opportunity-icon' />
              Rejoindre une entreprise en tant que développeur software (Talan, Linedata, Wevioo,
              Satoripop...)
            </p>
          </div>
          <div className='opportunity-item'>
            <p>
              <i className='fas fa-code opportunity-icon' />
            Devenir Freelancer (GoMyCode leads, Upwork, codeurs.com...)
            </p>
          </div>
          <div className='opportunity-item'>
            <p>
              <i className='fas fa-address-card opportunity-icon' />
            Créer leurs propres startup (Partenaires: incubateurrs, accelerateurs, Flat6Labs, BiatLabs...)
            </p>
          </div>

        </div>
      </div>
    )
  }
}

export default Opportunities
