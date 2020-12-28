import React from 'react'

import './Competence.css'

function Competence({titre,competence1,competence2,competence3,competence4,competence5,competence6}) {
    return (
    <div id="competence" className='sectionCompetence'>
        <div className="div-competence">
            <h2 ref={titre}>Mes compétences</h2>
            <div className="listeCompetence">
                <div ref={competence1} className="competence">
                    <h3>React</h3>
                    <p>70%</p>
                    <div className="barreGrise">
                         <div className="barreRelle">
                         </div>
                    </div>
                </div>

                <div ref={competence2} className="competence">
                    <h3>Javascript</h3>
                    <p>80%</p>
                    <div className="barreGrise">
                        <div className="barreRelle"></div>
                    </div>
                </div>

                <div ref={competence3} className="competence">
                    <h3>CSS</h3>
                    <p>90%</p>
                    <div className="barreGrise">
                        <div className="barreRelle"></div>
                    </div>
                </div>

                <div ref={competence4} className="competence">
                    <h3>HTML</h3>
                    <p>95%</p>
                    <div className="barreGrise">
                    <div className="barreRelle"></div></div>
                </div>

                <div ref={competence5} className="competence">
                    <h3>PHP</h3>
                    <p>70%</p>
                    <div className="barreGrise">
                    <div className="barreRelle"></div></div>
                </div>

                <div ref={competence6} className="competence">
                    <h3>GIT / Github</h3>
                    <p>90%</p>
                    <div className="barreGrise">
                    <div className="barreRelle"></div></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Competence;