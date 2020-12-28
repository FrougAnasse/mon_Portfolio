import React,{useRef} from 'react';

import './App.css';

import Nav from './component/Nav';
import Header from './component/Header';
import Description from './component/Description';
import MonPortfolio from './component/MonPortfolio';
import Competence from './component/Competence';
// import Parcours from './component/Parcours';
import Contact from './component/Contact';

import {gsap,Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useEffect } from 'react';




function App() {

  gsap.registerPlugin(ScrollTrigger);

  //ref à la bar de navigation
  const navRef=useRef(null);

  //ref aux élements du header
  const h1Header=useRef(null);
  const pHeader=useRef(null);
  const headerbutton1=useRef(null);
  const headerbutton2=useRef(null);
  

  //présentation
  const titreP=useRef(null);
  const sousTitre=useRef(null);
  const pP=useRef(null);
  const pP2=useRef(null);

  //portfolio
  const titrePortfolio=useRef(null);
  const prjP1=useRef(null);
  const prjP2=useRef(null);
  const prjP3=useRef(null);
  const prjP4=useRef(null);
  const prjP5=useRef(null);
  const prjP6=useRef(null);
  const prjP7=useRef(null);
  //compétence
  const titreC=useRef(null);
  const c1=useRef(null);
  const c2=useRef(null);
  const c3=useRef(null);
  const c4=useRef(null);
  const c5=useRef(null);
  const c6=useRef(null);

  //parcours
  // const titreParcours=useRef(null);
  // const pParcours1=useRef(null);
  // const pParcours2=useRef(null);
  // const pParcours3=useRef(null);

  //contact
  const titreContact=useRef(null);
  const input1Contact=useRef(null);
  const input2Contact=useRef(null);
  const input3Contact=useRef(null);
  const msgContact=useRef(null);
  const btnContact=useRef(null);
 
  useEffect(() => {
    
    //initialisation des réferences
      //nav
      const nav=navRef.current;

      //header
      const h1H=h1Header.current;
      const pH=pHeader.current;
      const btn1H=headerbutton1.current;
      const btn2H=headerbutton2.current;

      //presentation
    
      const presentationTab=[titreP.current,sousTitre.current,pP.current
                            ,pP2.current];

      //portfolio
      const portfolio=[
        titrePortfolio.current,
        prjP1.current,
        prjP2.current,
        prjP3.current,
        prjP4.current,
        prjP5.current,
        prjP6.current,
        prjP7.current
      ]

      //compétence
      const competence=[
        titreC.current,
        c1.current,
        c2.current,
        c3.current,
        c4.current,
        c5.current,
        c6.current
      ]

      //parcours
      // const parcours=[
      //   titreParcours.current,
      //   pParcours1.current,
      //   pParcours2.current,
      //   pParcours3.current
      // ]

      //contact

      const contact=[
        titreContact.current,
        input1Contact.current,
        input2Contact.current,
        input3Contact.current,
        msgContact.current,
        btnContact.current,
      ]

    //anim header + nav
    gsap.from(nav, {left: '-300px', ease: Power3.easeOut, duration: 4});
    gsap.from(h1H, {y: '-300px', duration: 2});
    gsap.from(pH, {y: '-300px', duration: 2});
    gsap.from(btn1H,{opacity:0,duration: 3 });
    gsap.from(btn2H,{opacity:0,duration: 3 });
    
    //anim presentation
    for(let i=0;i<presentationTab.length;i++){
      gsap.from(presentationTab[i],{
        left:'100px',
        opacity:0,
        duration: 1,
        ease:'none',
        delay:i*0.3,
        scrollTrigger:{
          trigger:presentationTab[0],
          start:'top-=300px left+=100px',
          toggleActions:'play'
          //markers:true
        } 
      });
    }
    
    //anim portfolio
    for(let i=0;i<portfolio.length;i++){
      gsap.from(portfolio[i],{
        x:'100px',
        opacity:0,
        duration: 2,
        ease:'none',
        delay:i*0.1,
        scrollTrigger:{
          trigger:portfolio[0],
          start:'top-=300px left+=100px',
          end:'top+=600px left+=100px',
          toggleActions:'play'
         // markers:true
        } 
      });
    }

    //anim compétence
    for(let i=0;i<competence.length;i++){
      gsap.from(competence[i],{
        y:'100px',
        opacity:0,
        duration: 1,
        ease:'none',
        delay:i*0.5,
        scrollTrigger:{
          trigger:competence[0],
          start:'top-=300px left+=100px',
          end:'top+=600px left+=100px',
          toggleActions:'play'
         // markers:true
        } 
      });
    }

    //anim formation
    // for(let i=0;i<parcours.length;i++){
    //   gsap.from(parcours[i],{
    //     y:'100px',
    //     opacity:0,
    //     duration: 1,
    //     ease:'none',
    //     delay:i,
    //     scrollTrigger:{
    //       trigger:parcours[0],
    //       start:'top-=300px left+=100px',
    //       end:'top+=600px left+=100px',
    //       toggleActions:'play'
    //      // markers:true
    //     } 
    //   });
    // }


    //contact
    for(let i=0;i<contact.length;i++){
      gsap.from(contact[i],{
        y:'100px',
        opacity:0,
        duration: 1,
        ease:'none',
        delay:i*0.8,
        scrollTrigger:{
          trigger:contact[0],
          start:'top-=900px left+=100px',
          end:'top+=600px left+=100px',
          toggleActions:'play'
         // markers:true
        } 
      });
    }
   


  }, []);

  
     return (
       <div>
         <Nav
          idNav={navRef}
         />
          <Header
          titreHeader={h1Header}
          textHeader={pHeader}
          button1={headerbutton1}
          button2={headerbutton2}
          /> 
         <Description titre={titreP} sstitre={sousTitre} p={pP} p2={pP2}/>
          <MonPortfolio
            titre={titrePortfolio}
            prj1={prjP1}
            prj2={prjP2}
            prj3={prjP3}
            prj4={prjP4}
            prj5={prjP5}
            prj6={prjP6}
            prj7={prjP7}
          /> 
          <Competence
          titre={titreC}
          competence1={c1}
          competence2={c2}
          competence3={c3}
          competence4={c4}
          competence5={c5}
          competence6={c6}
          />
          {/* <Parcours
          titre={ titreParcours}
          formation1={pParcours1}
          formation2={pParcours2}
          formation3={pParcours3}
          /> */}
          <Contact
              titre={titreContact}
              input1={input1Contact}
              input2={input2Contact}
              input3={input3Contact}
              textarea={msgContact}
              btn={btnContact}


          />
        </div>

  
  );
}

export default App;
