import React, {Component} from 'react'
import './content.css'

class Content extends Component {
  render () {
    return (
      <div className='content-container'>
        <div className='dark-gradiant' />
        <div className='content-text'>
          <h2>Le contenu du programme</h2>
          <p>
            Le contenu du programme est exactement celui du programme Full Time coding
            (www.gomycode.tn/full-time) avec 2 nouveaux parcours en plus du parcours Fullstack
            le contenu du programme est exactement celui du programme Full Time coding
            <span> (www.gomycode.tn/full-time)</span> avec 2 nouveaux parcours en plus du parcours Fullstack
            Javascript actuel: Le parcours Fullstack Java (Angular + Java) et le parcours PHP (avec le framework
             Symphony). Letudiant pourra choisir le parcours qui lui convient le plus.
          </p>
        </div>
      </div>
    )
  }
}

export default Content
