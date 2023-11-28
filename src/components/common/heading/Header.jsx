import React, { useState, useEffect } from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'
import { FaSignInAlt, FaUserPlus  } from 'react-icons/fa';

var istoggled = false;

const Header = () => {
  
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    
    if ((window.scrollY < lastScrollY || window.scrollY < 150 ) && !istoggled) setShow(false);
    else if ((window.scrollY > lastScrollY || window.scrollY < 150) && !istoggled)  setShow(true);
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => { window.removeEventListener('scroll', controlNavbar);};
    // eslint-disable-next-line
  }, [lastScrollY]);



  const [isOpen, setOpen] = useState(false);

  const scrollToposition = (position) =>{document.getElementById(position).scrollIntoView({behavior: "auto"});}
  
  const scrollTopositionLateral = (position) =>{
    setOpen(false);
    hamburgerToggle(isOpen);
    scrollToposition(position);
  };

  const hamburgerToggle = (toggled) =>{ 
    if (!toggled) {
      istoggled = true;
      /*window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
      */
      document.getElementById("Lateral").classList.add('lateralMenuOpen');
      document.getElementById("Lateral").classList.remove('lateralMenuClosed');
      //document.getElementById("BodyContent").classList.add('noscrollpage');
      //document.getElementById("FooterContent").classList.add('noneContent');
      //document.getElementById("bgHomeid").classList.remove('bgHome');
      //document.getElementById("bgAboutid").classList.remove('bgAbout');
    } else {
      istoggled = false;
      document.getElementById("Lateral").classList.remove('lateralMenuOpen');
      document.getElementById("Lateral").classList.add('lateralMenuClosed');
      //document.getElementById("BodyContent").classList.remove('noscrollpage');
      //document.getElementById("FooterContent").classList.remove('noneContent');
      //document.getElementById("bgHomeid").classList.add('bgHome');
      //document.getElementById("bgAboutid").classList.add('bgAbout');
    }
  }

  
  return (
    <div>
        <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <header id="top">
        
          <nav className='flexSB'>
          
            <div className='logo'>
              <div className={`buttonMenu ${show && 'buttonMenuHidden'}`} >
                
                <Hamburger size={20} toggled={isOpen} toggle={setOpen} onToggle={() => hamburgerToggle(isOpen)}/></div>
                      <Link to="/"><h1 className="title">ACADEMIA</h1></Link>
            </div>
            
            <ul className="menus flexSB center">
              <li className="buttonHeader" onClick={() => scrollToposition('top')} >Home </li>
              <li className="buttonHeader" onClick={() => scrollToposition('courses')} >Classes</li>
              <li className="buttonHeader" onClick={() => scrollToposition('aboutSection')} >About</li>
            </ul>

            <ul className='flexSB rightPart'>
              <li><Link to="/"><FaSignInAlt/></Link></li>
              <li><Link to="/"><FaUserPlus/></Link></li>
            </ul>
          </nav>
        </header>
        <div id="Lateral" className="lateralMenu " >

        <div className="sizeboxLateral">
              <ul className="menus center latMenu">
              <li className="buttonHeader buttonHeaderlateral"  onClick={() => scrollTopositionLateral('top')} >Home </li>
              <li className="buttonHeader buttonHeaderlateral"  onClick={() => scrollTopositionLateral('courses')} >Classes</li>
              <li className="buttonHeader buttonHeaderlateral"  onClick={() => scrollTopositionLateral('aboutSection')} >About</li>
            </ul>

      </div>

        </div>
    </div>
    
  )
}
export default Header