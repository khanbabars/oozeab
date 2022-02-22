import React from 'react'
import { MDBContainer } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,MDBCol } from 'mdb-react-ui-kit';



export const Aboutus = () => { return(

    <MDBContainer className="text-left my-5">
   
        <div>
        
        <h2>Våra tjänster</h2>
        <br/>
        <br/><br/>
        <MDBRow>
      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    
            <p style={{ paddingTop: '10px',fontSize: '18px', color: 'black', display: 'inline-block', 
            textAlign:'left'}}>
           <br/>  <br/>

Vi hjälper er att lyckas med era digitala satsningar genom att utveckla lösningar specifikt för er verksamhet. Hemsidor, interna system, digitala betallösningar, affärssystem samt Android- & iOS-appar är exempel på lösningar som vi levererat. Vi erbjuder även förvaltning och underhåll av nya och befintliga system.
            <br/>
Vi vill gärna jobba med dig!
Vi hjälper företag i hela Sverige att digitaliseras. Därför finns vi inte till för vår egen skull. Vårt enda mål är hjälpa dig bli ännu mer lönsam.
Vi är kända för vårt glada humör, vårt enkla sätt, vår tekniska höjd och vår affärsmässiga kompetens. Vi tror på goda samarbeten, på noggrant genomförda projekt och på tydliga, mätbara mål.
Så hör av dig om du har ett digitaliseringsbehov och vill ha en förutsättningslös diskussion med någon som är expert på området.
Vi gör digitaliseringen enkel.
                </p> 
   

<br/><br/>

  
<br/><br/><br/> <br/>


        </div>
        </MDBContainer>
    )}

