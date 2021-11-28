import React from 'react'
import { MDBContainer } from 'mdbreact';
// import AboutText from '../blogs/about'
import services from '../images/services.PNG';
import Assignments from '../api/Assignments';




export const Konsultuppdrag = () => { 
    
  return(


    <MDBContainer >
  
        <div>
   
        <br/><br/><br/>
        <hr/>    <p style={{ paddingTop: '20px',fontSize: '30px', color: '#434952', textAlign:'left'}}><ul>Hitta konsultuppdrag</ul></p>     <hr/>  
        <br/><br/> 
        &nbsp;&nbsp;<Assignments/>
        <br/><br/><br/><br/>
      
        
        <img src={services} alt={"services"} /><br/>
        
        <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>

        </div>
        </MDBContainer>
      
    )}

