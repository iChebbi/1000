import React from 'react'
import './style.css'

class Opportunities extends React.Component {
  render () {
    return (
      <div className='opportunities-container'>
        <div className='container'>
          <h2>les métiers cibles de nos étudiants ?</h2>
          <div className='row'>
            <div className='opportunity col-xs-10 col-sm-4'>
              <h3>Développeur dans une entreprise technologique</h3>
              <p className='mt10'>Développeur web dans une entreprise technologique comme un éditeur de logiciel, une SS2I, un site de e-commerce ou une marketplace.</p>
            </div>

            <div className='opportunity col-xs-10 col-sm-4'>
              <h3>Freelancer</h3>
              <p className='mt10'>Développeur web Freelancer: le freelancing est entrain de devenir une option de carrière. Plusieurs sites postent chaque jours des milliers de projets à réaliser en mode Freelance.</p>
            </div>

            <div className='opportunity col-xs-10 col-sm-4'>
              <h3>CTO ou co-fondateur</h3>
              <p className='mt10'>CTO ou co-fondateur d'une startup: notre programme est très orienté produit et permet aux étudiants de créer leur produit technologique au cours de la formation.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Opportunities
