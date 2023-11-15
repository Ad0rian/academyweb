import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'
import { FaSignInAlt, FaUserPlus  } from 'react-icons/fa';
import LateralMenu from './LateralMenu';

const Header = () => {

  const scrollToposition = (position) =>{
    window.scrollTo({
      top: position, 
      behavior: 'smooth'
    });
  };

  return (
    <div>
        <meta name="viewport" 
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
        <header id="top">
        
          <nav className='flexSB'>
          
            <div className='logo'>
              <div className="buttonMenu"><Hamburger id="HamburgerMenu" size={20} onToggle={toggled => {
                if (toggled) {
                  window.scrollTo({
                    top: 0, 
                    behavior: 'smooth'
                  });
                  document.getElementById("Lateral").classList.add('lateralMenuOpen');
                  document.getElementById("Lateral").classList.remove('lateralMenuClosed');
                  document.getElementById("BodyContent").classList.add('noscrollpage');
                  document.getElementById("FooterContent").classList.add('noneContent');
                  document.getElementById("bgHomeid").classList.remove('bgHome');
                  document.getElementById("bgAboutid").classList.remove('bgAbout');
                } else {
                  document.getElementById("Lateral").classList.remove('lateralMenuOpen');
                  document.getElementById("Lateral").classList.add('lateralMenuClosed');
                  document.getElementById("BodyContent").classList.remove('noscrollpage');
                  document.getElementById("FooterContent").classList.remove('noneContent');
                  document.getElementById("bgHomeid").classList.add('bgHome');
                  document.getElementById("bgAboutid").classList.add('bgAbout');
                }
              }} /></div>
                      <Link to="/"><h1 className="title">ACADEMIA</h1></Link>
            </div>
            
            <ul className="menus flexSB center">
              <li className="buttonHeader" onClick={() => scrollToposition(0)} >Home </li>
              <li className="buttonHeader" onClick={() => scrollToposition(600)} >Classes</li>
              <li className="buttonHeader" onClick={() => scrollToposition(1500)} >About</li>
            </ul>

            <ul className='flexSB rightPart'>
              <li><Link to="/"><FaSignInAlt/></Link></li>
              <li><Link to="/"><FaUserPlus/></Link></li>
            </ul>
          </nav>
        </header>
        <div id="Lateral" className="lateralMenu " >
          <LateralMenu/>
        </div>
    </div>
    
  )
}

export default Header