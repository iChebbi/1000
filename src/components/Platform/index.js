import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from './NavBar/NavBar'
import Login from './Login/Login';
import Content from './Content/Content'
import Footer from './Footer/Footer'

import './style.css'

class Platform extends Component {
  render() {
    return (
      <div className="Platform">
        <NavBar />
        {!window.localStorage.access_token && <Login />}
        {window.localStorage.access_token && <Content />}
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Platform)