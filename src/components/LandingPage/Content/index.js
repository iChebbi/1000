import React, {Component} from 'react'
import './content.css'

class Content extends Component {
  render () {
    return (
      <div className='content-container'>
        <div className='dark-gradiant' />
        <div className='content-text'>
          <div className='content-text-header'>
           <h2>
            Le contenu du programme
           </h2>
          </div>
          <p>
          Le Full Time Coding est un programme intensif de 3 mois avec une expérience d'apprentissage unique trés axée sur les
          projets et alternant activitées de groupe et coaching. <br/><br/>
          Découvrez notre méthodologie en détail sur la page de notre programme <a href="https://gomycode.tn/full-time" target='_blank' rel="noopener noreferrer">Full Time Coding</a>. <br/><br/>
          Les parcours technologiques préposés sont les suivants :
          </p>
          <ul>
            <li>
             Javascript: <a link='#' target='_blank'>Télécharger le programme.</a>
            </li>
            <li>
             Java: <a link='#' target='_blank'>Télécharger le programme.</a>
            </li>
            <li>
             PHP: <a link='#' target='_blank'>Télécharger le programme.</a>
            </li>
          </ul>
          <p>
          Ces technologies sont largement utilisées par les grandes entreprises technologiques(Facebook, Google, Amazon...).
          Elles permettent de créer des applications web et mobile intuitives, dynamiques et scalables.
          </p>
        </div>
      </div>
    )
  }
}

export default Content
