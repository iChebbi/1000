import React from 'react'
import './WhereToBegin.css'

class WhereToBegin extends React.Component {
  render () {
    return (
      <div className='wheretobegin-container'>
        <div className='container'>
          <h2>Comment participer?</h2>
          <div className='steps'>
            <div className='step'>
              <div className='number'>1</div>
              <h3>Formulaire en ligne</h3>
              <p className='mt10'>
              Inscription sur le lien <a target='_blank' link='www.gomycode.tn/1000'>GOMYCODE 1000 CODERS</a> et remplissage du formulaire
              des données personnelles et des motivations.
            </p>
            </div>
            <div className='step'>
              <div className='number'>2</div>
              <h3>Test en ligne</h3>
              <p className='mt10'>
              Passage des tests logiques en ligne sur la platforme qui s'ouvre après
              la soumission du formulaire de l'étape précédente.
            </p>
            </div>
            <div className='step'>
              <div className='number'>3</div>
              <h3>Epreuves sur place</h3>
              <p className='mt10'>
              Vous serez invités à des épreuves sur place
              (challenge de problem solving et entretiens de motivations)
              après la réussite du test en ligne.
            </p>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default WhereToBegin
