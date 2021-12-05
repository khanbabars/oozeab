import React, { useState } from 'react';
import { MDBContainer } from 'mdbreact';
// import AboutText from '../blogs/about'
import services from '../images/services.PNG';
import Assignments from '../api/Assignments';
import Assignment_detail from '../api/Assignment_detail';



export const Konsultuppdrag = () => { 
 


  return(


    <MDBContainer >
  
        <div>
   
        <br/><br/><br/>
        <p style={{ paddingTop: '20px',fontSize: '32px', color: 'black', textAlign:'left'}}><ul>Hitta konsultuppdrag</ul></p>     <hr/>  
        <br/>
        &nbsp;&nbsp; <Assignments/> 
        <img src={services} alt={"services"} /><br/>
        
        <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>

        </div>
        </MDBContainer>
      
    )}

