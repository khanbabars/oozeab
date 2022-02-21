import React from 'react';
import { MDBContainer } from 'mdbreact';
// import AboutText from '../blogs/about'
import services from '../images/services.PNG';
import Assignments from '../api/Assignments';




export const Konsultuppdrag = ({browseAssignment}) => { 
 


  return(


    <MDBContainer >
  
        <div>

        <br/><br/><br/>
        <p style={{ paddingTop: '20px',fontSize: '32px', color: 'black', textAlign:'left'}}>Hitta konsultuppdrag</p>     
  <hr/>  
        <br/>
        &nbsp;&nbsp; <Assignments browseAssignment={browseAssignment}/> 
        <br/> <br/>      <br/> <br/>
        <img src={services} alt={"services"} /><br/>
        
        <br/> <br/>           <br/> <br/>   

        </div>
        </MDBContainer>
      
    )}

