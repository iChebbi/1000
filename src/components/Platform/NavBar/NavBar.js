import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { logout } from '../../../actions/authActions'

import gmc from '../../../assets/images/logoGMC.svg'
import './style.css'

class NavBar extends Component {
  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <div className="NavBar">
        <div className="brand-container">
          <Link to="/">
            <p className="thousand">#1000Coders</p>
          </Link>
          <div className="v-sep" />
          <Link to="/">
            <img src={gmc} className="logo" alt="GoMyCode" />
          </Link>
        </div>
        {window.location.pathname === '/platform' &&
          window.localStorage.access_token && (
            <div className="nav-user">
              <p className="gmc-red">{window.localStorage.user_email}</p>
              <div className="v-sep" />
              <button onClick={() => this.logout()}>Se déconnecter</button>
            </div>
          )}
        {window.location.pathname === '/' && (
					<div className="nav-user">
          <Link className="gmc-red" to="/platform">
            Login
          </Link>
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
