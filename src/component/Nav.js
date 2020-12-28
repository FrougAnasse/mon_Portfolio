import React,{useEffect,useRef} from 'react';

import './Nav.css';
import identity from '../image/identity.jpg';


function Nav({idNav}) {
     const burgerRef=useRef(null);
     // Similaire à componentDidMount et componentDidUpdate : 
     useEffect(() => {
      const nav=idNav.current;
      const burger=burgerRef.current;

      burger.addEventListener('click',function(){
        burger.classList.toggle('active');
        nav.classList.toggle('display');
      })

       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <>
        <div className="burger "
              ref={burgerRef}
        >
          <div className="ligne1"></div>
          <div className="ligne2"></div>
          <div className="ligne3"></div>
        </div>

        <nav className="display"
          ref={idNav}
        >
          <div className="items">
              <img src={identity} alt="identité de Anasse FROUG" className="photo-identity"/>
          </div>
          <ul>
            <li>
                <a href="#header"> Accueil</a>
            </li>
            <li>
                <a href="#section-description">Présentation</a></li>
            <li>
                   <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#competence">Compétences</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="items">
               {/* <i className="fab fa-linkedin" 
               onClick={()=>window.open('https://www.linkedin.com/in/anasse-froug-087120200/')}></i> */}

              <a  href="#contact"><i class="fab fas fa-envelope-open-text"></i>
              </a>
          </div>
        </nav>

      

      </>
    )
}
export default Nav;