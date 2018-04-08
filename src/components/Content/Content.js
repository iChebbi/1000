import React, { Component } from 'react'

import TabBar from '../TabBar/TabBar'
import Profile from '../Profile/Profile'
import Admission from '../Admission/Admission'
import './style.css'

class Content extends Component {
  state = {
    extended: false
  }

  extend = () => {
    this.setState({ extended: true })
  }
  render() {
    return (
      <div className="Content">
        {!this.state.extended && (
          <React.Fragment>
            <p className="content-title">Candidature</p>
            <TabBar />
            <Profile extend={this.extend} />
          </React.Fragment>
        )}
        {this.state.extended && <Admission />}
      </div>
    )
  }
}

export default Content
