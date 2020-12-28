import React from 'react'

import './MonPortfolio.css';


import projetCasseBrick from '../image/imageProjet/casse-brick.PNG';
import projetSnake from '../image/imageProjet/snake.PNG';
import trombi from '../image/imageProjet/trombino.PNG';
import barber from '../image/imageProjet/barber.PNG';
import kyoto from '../image/imageProjet/kyoto.PNG';
import livret from '../image/imageProjet/livret-recette.PNG';
import Mytube from '../image/imageProjet/Mytube.PNG';


 function MonPortfolio({titre,prj1,prj2,prj3,prj4,prj5,prj6,prj7}) {
    return (
        <div id="portfolio" className='section-portfolio'>
            <div className="container">
                <h2 ref={titre}>Mon Portfolio</h2>
                <div className="liste-projet">

                <div ref={prj1} className="cards">
                        <img src={Mytube} alt="présentation du projet"/>
                        <div  className="descriptionCards">
                            <h3>App Mytube</h3>
                            <p>Une Application permettant de partager ces video.</p>
                            <p>Utilisation de React, Firebase</p>
                            <button
                             onClick={
                                ()=>window.open("https://project-mytube.netlify.app/")}
                            >Vers le projet</button>
                        </div>
                    </div>

                <div ref={prj2} className="cards">
                        <img src={livret} alt="présentation du projet"/>
                        <div  className="descriptionCards">
                            <h3>App livret de recettes</h3>
                            <p>Une Application permettant le stockage et la consultations de recettes en ligne.</p>
                            <p>Utilisation de React, Firebase</p>
                            <button
                             onClick={
                                ()=>window.open("https://livret-recette-froug.netlify.app")}
                            >Vers le projet</button>
                        </div>
                    </div>
                   
                    <div ref={prj3} className="cards">
                        <img src={kyoto} alt="présentation du projet"/>
                        <div  className="descriptionCards">
                            <h3>Site Kyoto</h3>
                            <p>Un site de voyage présentant la ville de Kyoto.</p><p> Utilisation de CSS, HTLM, Javascript</p>
                            <button
                             onClick={
                                ()=>window.open("https://trombinoscope-anasse-froug.online/SiteKyoto/SiteKyoto/")}
                            >Vers le projet</button>
                        </div>
                    </div>
                
                <div ref={prj4} className="cards">
                        <img src={barber} alt="présentation du projet"/>
                        <div className="descriptionCards">
                            <h3>Site Barbier</h3>
                            <p>Un site pour présenatnt une boutique de barbier. </p><p> Utilisation de HTML,CSS, Javascript</p>
                            <button
                             onClick={
                                ()=>window.open("https://trombinoscope-anasse-froug.online/public_html/barber/")}
                            >Vers le projet</button>
                        </div>
                    </div>

                    <div ref={prj5} className="cards">
                        <img src={trombi} alt="présentation du projet"/>
                        <div className="descriptionCards">
                            <h3>Trombinoscope UCP</h3>
                            <p>Un trombinoscope en ligne crée pour l'universités de Cergy-Pontoise.</p><p> Utilisation de Boostrap, Mysql, PHP, HTML</p>
                            <button 
                            onClick={
                                ()=>window.open("http://trombinoscope-anasse-froug.online/trombinoscope/trombinoscope/index.php")}>Vers le projet</button>
                        </div>
                    </div>

                    <div ref={prj6} className="cards">
                        <img src={projetCasseBrick} alt="présentation du projet casse-brique"/>
                        <div className="descriptionCards">
                            <h3>Casse-Briques</h3>
                            <p>Un petit projet qui consisté en la création d'un casse-briques en Javascript.</p>
                            <button 
                            onClick={()=>window.open('https://trombinoscope-anasse-froug.online/casse-brick/casse-brick/casse-brick')}>
                                Vers le projet</button>
                        </div>
                    </div>

                    <div ref={prj7} className="cards">
                        <img src={projetSnake} alt="présentation du projet Snake"/>
                        <div className="descriptionCards">
                            <h3>Snake</h3>
                            <p>Un petit projet consistant en la création d'un jeu Snake en Javascript. </p>
                            <button onClick={()=>window.open('https://trombinoscope-anasse-froug.online/game2/game2/')}>Vers le projet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonPortfolio;