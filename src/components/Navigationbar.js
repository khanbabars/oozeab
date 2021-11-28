import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Jumbotron} from '../jumbotron'
import '../App.css'
import Navbar from './Navbar'
import Page from './Page'




class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
        <Page   id="hem"/>
          <Router>
      
            <MDBNavbar  fixed="top" dark expand="md" scrolling transparent style={{backgroundColor: 'white'}}>
              <MDBNavbarBrand >
                <Navbar/>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                 
                    
                  
                  
               
                  </MDBNavbarNav>
                  {/* <SocialIcon url="https://github.com/khanbabars" />&nbsp;&nbsp;
                  <SocialIcon url="https://twitter.com/khanbabars" />&nbsp;&nbsp;
                  <SocialIcon url="https://www.linkedin.com/in/shazib-saleem-warraich-6a04a926" /> */}
              </MDBCollapse>
            </MDBNavbar>
            
         
        
          <MDBView  >
          <Jumbotron/>
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
             
            </MDBMask>
          </MDBView>
 </Router>
        </header>
      </div>
    );
  }
}

export default Navigationbar;