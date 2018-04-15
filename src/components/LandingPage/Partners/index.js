import React, {Component} from 'react'
import './partners.css'

class Partners extends Component {

  render () {
    return (
      <div className='partners-container'>
        <div className='partners-container-content'>
          <h2>Les entreprises qui recrutent</h2>
          <div className='partners-logo'>
            <img alt=""  src='partners/talant.jpg' />
            <img alt=""  src='partners/wevioo.png' />
            <img alt=""  src='partners/linedata.jpg' />
            <img alt=""  src='partners/satoripop.jpg' />
            <img alt=""  src='partners/fis.jpg' />
          </div>
        </div>
      </div>
    )
  }
}

export default Partners
