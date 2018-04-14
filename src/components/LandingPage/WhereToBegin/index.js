import React from "react";
import "./WhereToBegin.css";

class WhereToBegin extends React.Component {
  render() {
    return (
      <div className="wheretobegin-container">
        <div className="wheretobegin-text-container">
          <h2>Par où commencer ? </h2>

          <div className="List-container">
            <div className = "list-element" >
              <p className="number"> 1 </p>
              <p className= "description">
                Inscription sur la page gomycode.tn/1000 et remplissage du
                formulaire d'Inscription
              </p>
            </div>
            <div className = "list-element">
              <p className="number"> 2 </p>
              <p className= "description">
                Test en ligne : la plateforme du test en ligne sera ouverte du
                1er au 8 juin 2018
              </p>
            </div>
            <div className = "list-element">
              <p className="number"> 3 </p>
              <p className= "description">
                Le challenge : cette épreuve va décider de ton admission dans le
                programme 1000. Elle permet d'identifier les plus motivés et de
                confirmer la capacité des étudiants à réussir le programme
              </p>
            </div>
          </div>
        </div>

        <div className="wheretobegin-img-container">
          <div className="gradiant" />
        </div>
      </div>
    );
  }
}

export default WhereToBegin;
