import React, { Component } from 'react'

import './style.css'

class TabBar extends Component {
  render() {
    return (
      <div className="tab-container">
        <button className="tab-btn tab-btn-active">Profil</button>
        <button className="tab-btn">Conditions</button>
        <button className="tab-btn">Skillz</button>
        <button className="tab-btn">Check</button>
        <button className="tab-btn">1000Coders</button>
        <button className="tab-btn">Réglement</button>
        <button className="tab-btn">Administration</button>
        <button className="tab-btn">Bravo</button>
        <span className="Parrainez">Parrainez</span>
      </div>
    )
  }
}

export default TabBar
