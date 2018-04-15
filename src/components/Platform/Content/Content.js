import React, { Component } from 'react'

import TabBar from '../TabBar/TabBar'
import Conditions from '../Conditions/Conditions'
import Profil from '../Profil/Profil'
import Background from '../Background/Background'
import Conseils from '../Conseils/Conseils'

import './style.css'
import Admission from '../Admission/Admission'

class Content extends Component {
  state = {
    activeTab: 'Conditions',
    extended: false
  }

  extend = () => {
    this.setState({ extended: true })
  }

  setTab = tab => {
    this.setState({ activeTab: tab })
  }

  renderContent = tabName => {
    switch (tabName) {
      case 'Conditions':
        return <Conditions setTab={this.setTab} />
      case 'Profil':
        return <Profil setTab={this.setTab} />
      case 'Background':
        return <Background setTab={this.setTab} />
      case 'Conseils':
        return <Conseils extend={this.extend} setTab={this.setTab} />
      case 'Test':
        return <Admission setTab={this.setTab} />
      default:
        return <Conditions setTab={this.setTab} />
    }
  }

  render() {
    return (
      <div className="Content">
        <React.Fragment>
          {!this.state.extended && (
            <div>
              <p className="content-title">Candidature</p>
              <TabBar activeTab={this.state.activeTab} setTab={this.setTab} />
            </div>
          )}
          {this.renderContent(this.state.activeTab)}
        </React.Fragment>
      </div>
    )
  }
}

export default Content
