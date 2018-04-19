import React from 'react'
import './Location.css'

class Location extends React.Component {
  render () {
    return (
      <div className='location-container'>
        <div className='location-text-container'>
          <h2>Ou se passent les sessions ?</h2>
          <p className='location-text-descripttion'>
          Les sessions se passent dans les Hackerspaces de GoMyCode dans les villes ci-dessous. <br/>
            <span className="hebergement">L'hébergement est possible dans la limite des places disponibles.</span>
          </p>
        </div>
        <div className='locations'>
          <div className='location-img-content-wrapper'>
            <div
              className='location-img-content'
              style={{ backgroundImage: 'url("locations/tunis.jpg")' }}
            />
            <div className='location-name'>TUNIS</div>
          </div>
          <div className='location-img-content-wrapper'>
            <div
              className='location-img-content'
              style={{ backgroundImage: 'url("locations/sousse.jpg")' }}
            />
            <div className='location-name'>SOUSSE</div>
          </div>
          <div className='location-img-content-wrapper'>
            <div
              className='location-img-content'
              style={{ backgroundImage: 'url("locations/sfax.jpg" )' }}
            />
            <div className='location-name'>SFAX</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Location
