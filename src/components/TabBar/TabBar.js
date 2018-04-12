import React, { Component } from 'react'

import './style.css'

class TabBar extends Component {
	setTab = this.props.setTab

  render() {
    return (
      <div className="tab-container">
        <button className={(this.props.activeTab === 'Conditions' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  > Conditions </button>
        <button className={(this.props.activeTab === 'Profile' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Profile</button>
        <button className={(this.props.activeTab === 'Background' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Background</button>
        <button className={(this.props.activeTab === 'Conseils' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Conseils</button>
        <button className={(this.props.activeTab === 'Test' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Test</button>
        <button disabled className={(this.props.activeTab === 'Challenge' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Challenge</button>
        <button disabled className={(this.props.activeTab === 'Entretien' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Entretien</button>
        <button disabled className={(this.props.activeTab === 'Resultat' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Résults</button>
        <span className="Parrainez">Parrainez</span>
      </div>
    )
  }
}

export default TabBar
