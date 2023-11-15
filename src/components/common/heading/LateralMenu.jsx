import React from "react";
import "./header.css";
import scrollToposition from"./Header.jsx";
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView'; 
import { TreeItem } from '@mui/x-tree-view/TreeItem';

/*
import { useRef } from "react";
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react'
import Navbar from './Navbar';



 <Box sx={{ minHeight: 180, flexGrow: 1, maxWidth: 300 }}>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem nodeId="1" label="Home"></TreeItem>
          <TreeItem nodeId="2" label="Classes"></TreeItem>
          <TreeItem nodeId="7" label="About"></TreeItem>
        </TreeView>
      </Box>

      document.getElementById("Lateral").classList.remove('lateralMenuOpen');
                  document.getElementById("Lateral").classList.add('lateralMenuClosed');
                  document.getElementById("BodyContent").classList.remove('noscrollpage');
                  document.getElementById("FooterContent").classList.remove('noneContent');
                  document.getElementById("bgHomeid").classList.add('bgHome');
                  document.getElementById("bgAboutid").classList.add('bgAbout');
*/

const LateralMenu = (Lat) => {
    Lat = document.getElementById("Lateral");
    const scrollTopositionLateral = (position) =>{
      document.getElementById("Lateral").classList.remove('lateralMenuOpen');
      document.getElementById("Lateral").classList.add('lateralMenuClosed');
      document.getElementById("BodyContent").classList.remove('noscrollpage');
      document.getElementById("FooterContent").classList.remove('noneContent');
      document.getElementById("bgHomeid").classList.add('bgHome');
      document.getElementById("bgAboutid").classList.add('bgAbout');
      scrollToposition(position);
      //Not working
    };

    return (

      <div className="sizeboxLateral">
      
     
      
      <ul className="menus flexSB center">
              <li className="buttonHeader" onClick={() => scrollTopositionLateral(0)} >Home </li>
              <li className="buttonHeader" onClick={() => scrollTopositionLateral(600)} >Classes</li>
              <li className="buttonHeader" onClick={() => scrollTopositionLateral(1500)} >About</li>
            </ul>

      </div>
    );
}

export default LateralMenu