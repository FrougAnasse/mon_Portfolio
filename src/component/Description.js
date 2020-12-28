import React from 'react'

import './Description.css';

 function Description({titre,sstitre,p,p2}) {
    return (
        <div id='section-description' className='section-description'>
            <div className="descriptionBg">
             <h2 ref={titre}>Présentation </h2>
             <div className="flex">
                <div className="text">
                    <p ref={p}>Diplômé en informatique de l'Université de Cergy Pontoise, j'ai pu me spécialiser sur les langages informatiques HTML, CSS, Javascript, PHP et Java</p>
                    
                    <p ref={p2}>Grâce à cela j'ai pu réaliser mon projet professionnel qui est de devenir développeur web et mettre en pratique mes compétences à travers différents projets. Je serais donc très heureux de vous accompagner sur vos futurs projets <span role="img" aria-label="emoji sourire">😉</span></p>
                </div>
                
            </div>
        </div>
            
        </div>
    )
}
export default Description;