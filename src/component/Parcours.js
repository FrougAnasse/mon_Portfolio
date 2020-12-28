import React from 'react'

import './Parcours.css'

import ucp from '../image/ucp.svg';
import lycee from '../image/lycee.svg';
import udemy from '../image/udemy-logo.png';

 function Parcours({titre,formation1,formation2,formation3}) {
    return (
        <div id='Parcours'className="section-parcours">
            <div className="parcours">
                <h2 ref={titre}>Mon parcours</h2>
                <div className="flex">
                    <div className="barreChronologique">
                        <div className="cercle-logo logo1">
                            <img src={udemy} alt="du logo de l'université de cergy-pontoise"/>
                        </div>
                        <div className="cercle-logo logo2">
                            <img src={ucp} alt="du logo de l'université de cergy-pontoise"/>
                        </div>
                        <div className="cercle-logo logo3">
                            <img src={lycee} alt="du logo de l'université de cergy-pontoise"/>
                        </div>
                    </div>
                    <div className="grid">
                    <div ref={formation1} className="bg-cards items1">
                            <div  className="cards">
                                <h3>Formation en autodidacte, Juillet 2020 - Aujourd'hui</h3>
                                <p>Appronfondissement de mes connaissances en CSS, HTML, Javascript et apprentissage de React JS, Symphony, GitHub à travers différentes formations en ligne et la mise en place de differents projets </p>
                            </div> 
                        </div>
                        
                        
                        <div ref={formation2} className="bg-cards items2">
                            <div  className="cards">
                                <h3>Université de Cergy-Pontoise, 2017- Juillet 2020
                                </h3>
                                <p>Licence en informatique, apprentisage des langages HTML, CSS, JAVA, C et introduction aux postes de production d'un projet professionnel (chef de projet, responsable qualité, etc...).
                                </p>
                            </div> 
                        </div>
                        <div  ref={formation3} className="bg-cards items3">
                            <div className="cards">
                                <h3>Lycée alfred Kastler, 2014-2017</h3>
                                <p> Introduction à l'informatique à travers le language python, diplômé en baccalauréat scientifique. </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Parcours;