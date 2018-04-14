import React from 'react'
import './Duration.css'

class Duration extends React.Component {
  render() {
    return (
      <div className="duration-container">
        <div className="duration-description">
          <div className="title-container">
            <h2>La durée du programme</h2>
          </div>
          <div className="text-duration-container">
            <p>
              Le programme dure 4 mois tous les jours du Lundi au Vendredi de 9h
              à 17h
            </p>
            <p>La premiére session commence le Lundi 2 juillet 2018</p>
          </div>
          <div className="duration-description-link">
            <h3>Voir le calendrier</h3>
          </div>
        </div>
        <div className="duration-img">
          <img alt="" src="duration.png" />
        </div>
      </div>
    )
  }
}

export default Duration
