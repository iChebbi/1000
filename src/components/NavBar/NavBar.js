import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authActions'

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
        {window.localStorage.access_token && (
          <div className="nav-user">
            <p className="gmc-red">{window.localStorage.user_email}</p>
            <div className="v-sep" />
            <button onClick={() => this.props.logout()}>Se déconnecter</button>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
