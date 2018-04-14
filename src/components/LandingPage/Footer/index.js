import React, {Component} from 'react'
import './style.css'

class Footer extends Component {
  render () {
    return (
      <div className='thousand-footer'>

        <div className='footer-logo-container'>
          <div className='pre-footer-logo'>
            #1000CODERS
          </div>
          <img className='footer-logo' src='logo.png' alt='gmc logo' />
        </div>

        <div className='post-footer-logo'>
          Code your Future
        </div>
      </div>
    )
  }
}

export default Footer
