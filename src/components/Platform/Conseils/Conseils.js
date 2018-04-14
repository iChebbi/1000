import React, { Component } from 'react'
import './style.css'

class Conseils extends Component {
  startTest = () => {
    this.props.extend()
    this.props.setTab('Test')
  }

  render() {
    return (
      <div className="Conseils">
        <div className="header">Conseils</div>
        <div>
          <p>
            Vous avez <span className="important">45 minutes</span> pour
            effectuer le test en ligne. Ne passez pas trop de temps sur une
            seule question.
          </p>

          <p>
            Le test ne doit pas <span className="important">s’interrompre</span>.
            Si le test est interrompu, vous ne pourrez pas le refaire et votre
            candidature ne sera pas retenue.
          </p>

          <p>
            Assurez-vous bien que vous avez une{' '}
            <span className="important">bonne connexion</span> internet et que
            vous êtes 100% disponible pour faire le test pendant les 45
            prochaines minutes.
          </p>
        </div>
        <div className="navigation">
          <button className="btn-next" onClick={() => this.startTest()}>
            Start !
          </button>
        </div>
      </div>
    )
  }
}

export default Conseils
