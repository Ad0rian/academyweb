import React from "react";
import "./header.css";
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
*/

const LateralMenu = (Lat) => {
    Lat = document.getElementById("Lateral");
    //console.log(Lat);
    return (

      <div className="sizeboxLateral">
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

      </div>
    );
}

export default LateralMenu