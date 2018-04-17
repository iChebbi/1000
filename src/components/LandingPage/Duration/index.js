import React from 'react'
import './Duration.css'

class Duration extends React.Component {
  render () {
    return (
      <div className='duration-container'>
        <div className='container'>
          <div className='duration-container-title'>
            <h2>Dates des sessions de formation</h2>
          </div>

          <div className='row duration-content'>
            <div className='duration-description col-xs-12 col-sm-12 col-md-6'>
              <p>
              Le programme dure 3 mois tous les jours du Lundi au Vendredi de 9h a 17h.<br />
              Les dates des prochaines sessions de formation sont les suivantes:
              </p>
              <ul>
                <li>
             <span className="session-title"> Session 1 : </span> 2 juillet  2018 -> 21 Septembre 2018.
              </li>
                <li>
                <span className="session-title"> Session 2 : </span> 24 Septembre 2018 -> 14 Decembre 2018.
              </li>
                <li>
                <span className="session-title"> Session 3 : </span> 17 Decembre 2018 -> 8 Mars 2019.
              </li>
                <li>
                <span className="session-title"> Session 4 : </span> 11 Mars 2019 -> 31 Mai 2019.
              </li>
              </ul>
            </div>
            <div className='duration-img col-xs-12 col-sm-12 col-md-6'>
              <img alt=""  src='duration-modified.png' />
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default Duration
