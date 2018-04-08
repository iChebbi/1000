import React, { Component } from 'react'
import gmc from '../../assets/images/logoGMC.svg'
import './style.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brand-container">
          <p className="thousand">#1000Coders</p>
          <div className="v-sep" />
          <img src={gmc} className="logo" alt="GoMyCode" />
        </div>
        <div className="nav-user">
          <p className="gmc-red">student@mail.com</p>
          <div className="v-sep" />
          <p>Se déconnecter</p>
        </div>
      </div>
    )
  }
}

export default NavBar
