import React, { Component } from 'react'
import './partners.css'

class Partners extends Component {
  render() {
    return (
      <div className="partners-container">
        <div className="partners-container-content">
          <h2>Les entreprises partenaires</h2>
          <div className="partners-logo">
            <img alt="" src="talant.jpg" />
            <img alt="" src="wevioo.png" />
            <img alt="" src="linedata.jpg" />
            <img alt="" src="satoripop.jpg" />
            <img alt="" src="fis.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

export default Partners
