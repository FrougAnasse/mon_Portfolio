import React from 'react'


import './Header.css'

import Typewriter from 'typewriter-effect';

function Header({titreHeader,textHeader,button1,button2}) {
    return (
        <div id="header" className="header-body">
            <div className="bg">
                <div className="text">
                    <h1 
                    ref={titreHeader}
                    >Bienvenue sur mon Portfolio</h1>
                    <div ref={textHeader}  className="p-header">
                        <Typewriter
                        
                        onInit= {(typewritter)=>{
                            typewritter
                            .changeDelay(20)
                            .typeString("Moi c'est Anasse FROUG,")
                            .pauseFor(500)
                            .typeString("<strong> développeur </strong>")
                            .typeString("<strong> <span class='span-header lighblack'> HTML !</span></strong>")
                            .pauseFor(1000)
                            .deleteChars(6)
                            .typeString("<strong> <span class='span-header cyan'> CSS !</span></strong>")
                            .pauseFor(1000)
                            .deleteChars(5)
                            .typeString("<strong> <span class='span-header purple'> Javascript !</span></strong>")
                            .pauseFor(1000)
                            .deleteChars(12)
                            .typeString("<strong> <span class='span-header blue'> React !</span></strong>")
                            .start();
                        }}
                        />
                    </div>
                    <div className="block">
                        <button className="btn black"
                                ref={button1}
                                onClick={()=>window.location.href='#portfolio'}>Portfolio
                        </button>
                        <button className="btn white"
                                ref={button2}
                                onClick={()=>window.location.href='#competence'}>Mes compétences
                        </button>
                    </div>
                    <div className="block">
                        <i className="fab fa-github" 
                                 onClick={()=>window.open('https://github.com/FrougAnasse')}
                        ></i>

                        <i className="fab fa-linkedin" 
                            onClick={()=>window.open('https://www.linkedin.com/in/anasse-froug-087120200/')}></i>
                    </div>
                </div>
     
                
                
            </div>
        </div>
    )
}

export default Header;
