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
          <TreeItem nodeId="1" label="Applications"></TreeItem>
          
          <TreeItem nodeId="2" label="Documents">
            <TreeItem nodeId="3" label="Todos" />

            <TreeItem nodeId="4" label="ESO">
              <TreeItem nodeId="8" label="Primero" />
              <TreeItem nodeId="9" label="Segundo" />
              <TreeItem nodeId="10" label="Tercero" />
              <TreeItem nodeId="11" label="Cuarto" />
            </TreeItem>


            <TreeItem nodeId="5" label="Bachiller">
              <TreeItem nodeId="12" label="Primero" />
              <TreeItem nodeId="13" label="Segundo" />
            </TreeItem>

            <TreeItem nodeId="6" label="Universidad">
              <TreeItem nodeId="14" label="Primero" />
              <TreeItem nodeId="15" label="Segundo" />
              <TreeItem nodeId="16" label="Tercero" />
              <TreeItem nodeId="17" label="Cuarto" />
            </TreeItem>

          </TreeItem>
          <TreeItem nodeId="7" label="About"></TreeItem>
        </TreeView>
      </Box>

      </div>
    );
}

export default LateralMenu