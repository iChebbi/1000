import React, { Component } from 'react'

import './style.css'

class TabBar extends Component {
	setTab = (e) => {
		this.props.setTab(e.target.getAttribute('componentname'))
	}

  render() {
    return (
      <div className="tab-container">
        <button componentname="Conditions" className={(this.props.activeTab === 'Conditions' ? 'tab-btn tab-btn-active' : 'tab-btn' )} onClick={ (e) => this.setTab(e) } > Conditions </button>
        <button componentname="Profil" className={(this.props.activeTab === 'Profil' ? 'tab-btn tab-btn-active' : 'tab-btn' )} onClick={ (e) => this.setTab(e) } >Profil</button>
        <button componentname="Background" className={(this.props.activeTab === 'Background' ? 'tab-btn tab-btn-active' : 'tab-btn' )} onClick={ (e) => this.setTab(e) } >Background</button>
        <button componentname="Conseils" className={(this.props.activeTab === 'Conseils' ? 'tab-btn tab-btn-active' : 'tab-btn' )} onClick={ (e) => this.setTab(e) } >Conseils</button>
        <button disabled componentname="Test" className={(this.props.activeTab === 'Test' ? 'tab-btn tab-btn-active' : 'tab-btn' )} >Test en ligne</button>
        <button disabled componentname="Entretien" className={(this.props.activeTab === 'Entretien' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Entretiens</button>
        <button disabled componentname="Resultat" className={(this.props.activeTab === 'Resultat' ? 'tab-btn tab-btn-active' : 'tab-btn' )}  >Résultats</button>
        <span className="Parrainez">Parrainez</span>
      </div>
    )
  }
}

export default TabBar
