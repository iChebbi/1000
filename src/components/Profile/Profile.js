import React, { Component } from 'react'
import info from '../../assets/images/info-circle.svg'
import './style.css'

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <p className="profile-title">Dis-nous en un peu plus sur toi</p>
        <p className="profile-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          rhoncus congue est ac finibus. Aenean eleifend condimentum mi nec
          rutrum. Pellentesque vel dui bibendum, dapibus est non, finibus dui.
          Proin mauris justo, facilisis sit amet nisi vel, vestibulum lacinia
          libero. Etiam sagittis dolor sed risus fringilla, sit amet lacinia
          ante feugiat. Phasellus leo nunc, pulvinar sed augue eu, lacinia
          tincidunt felis. Vivamus ut arcu sed arcu tincidunt egestas. Integer
          quis ultrices purus.
        </p>
        <div className="profile-form-container">
          <div className="profile-form">
            <div className="form-element">
              <label htmlFor="">Langue</label>
              <div className="form-toggle">
                <button className="toggle">Anglais</button>
                <button className="toggle toggle-active">Français</button>
              </div>
            </div>
            <div className="form-element">
              <label htmlFor="">Sexe</label>
              <div className="form-toggle">
                <button className="toggle toggle-active">Féminin</button>
                <button className="toggle">Masculin</button>
              </div>{' '}
            </div>
            <div className="form-element">
              <label htmlFor="">Prénom</label>
              <input type="text" />
            </div>
            <div className="form-element">
              <label htmlFor="">Nom</label>
              <input type="text" />
            </div>
            <div className="form-element">
              <label htmlFor="">Code postal</label>
              <input type="text" />
            </div>
            <div className="form-element">
              <label htmlFor="">Pays</label>
              <select className="country">
                <option value="" />
                <option value="">Tunisie</option>
              </select>
            </div>
            <div className="form-element">
              <label htmlFor="">Date de naissance</label>
              <select className="day" />
              <select className="month" />
              <select className="year" />
            </div>
            <div className="form-element">
              <label htmlFor="">Téléphone</label>
              <select className="phone" />
              <input className="phone" type="text" />
            </div>

            <button className="btn-red-gmc" onClick={() => this.props.extend()}>
              Valider
            </button>
          </div>
          <div className="info">
            <span className="info-text">Un Problème ?</span>
            <img className="info-circle" src={info} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
