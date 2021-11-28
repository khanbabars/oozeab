import React from 'react'
import { MDBContainer } from 'mdbreact';
// import AboutText from '../blogs/about'
import services from '../images/services.PNG';




export const Services = () => { 
    
  return(


    <MDBContainer className="text-left my-5">
  
        <div>
        <p style={{ paddingTop: '20px',fontSize: '20px', color: 'black'}}>Hyr in en av våra erfarna konsulter under tidsbestämd period för att därefter göra ett kostnadsfritt övertagande av anställningen. Vi tar ansvaret för konsultens första tid hos er, det ger er möjlighet att utvärdera en kandidat innan rekrytering. Detta är ett utmärkt sätt att ta in kompetens i bolaget utan risk.</p>
        <br/><br/>
        <br/><br/><br/><br/><br/><br/>
        
        <img src={services} alt={"services"} /><br/>
        
        <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>      <br/> <br/>

        </div>
        </MDBContainer>
      
    )}

