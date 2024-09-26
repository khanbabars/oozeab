import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css";
import {CustomNavbar} from "./Navbar";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";

export const Navigationbar = () => {


  
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setisWideEnough] = useState(false);
  const onClick = () => {  
    setCollapse(!collapse)
    
  }
    

  return (
    <div>
      <header>
        <Router>
          
          <Page id="hem" />
          <br />
      <Navbar bg="white" data-bs-theme="white"   fixed="top"  >
        <Container fluid>
        <CustomNavbar/>
        </Container>
      </Navbar> 

      
   

      
        </Router>
      </header>
    </div>
  

    );
  
};

export default Navigationbar;