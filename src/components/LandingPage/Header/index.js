import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

class Header extends React.Component {
  render () {
    return (
      <div className='thousand-navbar'>
        <div className='logo-container'>
          <img className='logo' src='logo.png' alt='gmc logo' />
          <div className='pre-logo'>
            #1000CODERS
          </div>
        </div>

         <div className="post-logo">
          <Link to="/platform">Login</Link>
        </div>
      </div>

    )
  }
}

export default Header
