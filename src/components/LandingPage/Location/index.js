import React from 'react'
import './Location.css'

class Location extends React.Component {
  render () {
    return (
      <div className='location-container'>
        <div className='location-text-container'>
          <h2>Ou se passent les sessions ?</h2>
          <p className='location-text-descripttion'>
            Les sessions se passent dans les Hackerspaces de GoMyCode.
          </p>
        </div>
        <div className='locations'>
          <div className='location-img-content-wrapper'>
            <div
              className="location-img-content"
              style={{ backgroundImage: 'url("tunis.jpg")' }}
            />
            <div className='location-name'>Tunis</div>
          </div>
          <div className='location-img-content-wrapper'>
            <div
              className="location-img-content"
              style={{ backgroundImage: 'url("sousse.jpg")' }}
            />
            <div className='location-name'>Sousse</div>
          </div>
          <div className='location-img-content-wrapper'>
            <div
              className="location-img-content"
              style={{ backgroundImage: 'url("sfax.jpg" )' }}
            />
            <div className='location-name'>Sfax</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Location
