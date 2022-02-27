import React from 'react'
import { MDBContainer } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow,MDBCol } from 'mdb-react-ui-kit';
import services from '../images/services.PNG';


export const Services = () => { return(

    <MDBContainer className="text-left my-5">
   
        <div>
        <br/>  <br/> <br/>  <br/><br/>  <br/> <br/>  <br/>
        <h2>Våra tjänster</h2>
     
    

        
        <p style={{ paddingTop: '10px',fontSize: '18px', color: 'black', display: 'inline-block', 
            textAlign:'left'}}>
           <br/> 

Vi hjälper er att lyckas med era digitala satsningar genom att utveckla lösningar specifikt för er verksamhet. Hemsidor, interna system, digitala betallösningar, affärssystem samt Android- & iOS-appar är exempel på lösningar som vi levererat. Vi erbjuder även förvaltning och underhåll av nya och befintliga system.
            <br/>
Vi vill gärna jobba med dig!
Vi hjälper företag i hela Sverige att digitaliseras. Därför finns vi inte till för vår egen skull. Vårt enda mål är hjälpa dig bli ännu mer lönsam.
Vi är kända för vårt glada humör, vårt enkla sätt, vår tekniska höjd och vår affärsmässiga kompetens. Vi tror på goda samarbeten, på noggrant genomförda projekt och på tydliga, mätbara mål.
Så hör av dig om du har ett digitaliseringsbehov och vill ha en förutsättningslös diskussion med någon som är expert på området.
Vi gör digitaliseringen enkel.
                </p> 
                <br/>  <br/> <br/>  <br/>
        <MDBRow>
      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Databasutveckling </MDBCardTitle>
            <MDBCardText>
            Vi har stark kunskap inom databas område vi jobbar daligen med DBA, Performance, Utveckling, licenering, strategy, design, arkitektur. Våra experter arbetar daligen med stora databaser Oracle, Micrrosoft SQL, Postgres 
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Förvaltning</MDBCardTitle>
            <MDBCardText>
            I en digital värld är det viktigt att IT-system utvecklas och förvaltas. För att uppnå detta erbjuder vi dedikerade och involverade utvecklare som kontinuerligt jobbar med systemet. Vi hjälper er att hålla era produkter levande.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Front-End</MDBCardTitle>
            <MDBCardText>
            Vi håller oss ständigt ajour med de senaste teknikerna inom front-end. Med verktyg som HTML, CSS, Javascript, React och React Native bygger vi snabba och intuitiva gränssnitt som sätter användaren i fokus.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    </MDBRow>
    
    <br/> <br/>
    <MDBRow>
      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Integration </MDBCardTitle>
            <MDBCardText>
            Vi jobbar med allt ifrån databasmodellering till API-utveckling samt integration mot tredjepartsleverantörer. Dessutom använder vi oss av de senaste välbeprövade ramverken för att snabbt bygga upp stabila och användarvänliga gränssnitt.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Backend och Fullstack utveckling</MDBCardTitle>
            <MDBCardText>
            Vi har stark kunskap inom databas område vi jobbar daligen med DBA, Performance, Utveckling, licenering, strategy, design, arkitektur. Våra experter arbetar daligen med stora databaser Oracle, Micrrosoft SQL, Postgres 
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Business Intelligence</MDBCardTitle>
            <MDBCardText>
            Vi håller oss ständigt ajour med de senaste teknikerna inom front-end. Med verktyg som HTML, CSS, Javascript, React och React Native bygger vi snabba och intuitiva gränssnitt som sätter användaren i fokus.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



    </MDBRow>

    <br/> <br/>
    <MDBRow>
      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Konsultuppdrag </MDBCardTitle>
            <MDBCardText>
            Vi jobbar med allt ifrån databasmodellering till API-utveckling samt integration mot tredjepartsleverantörer. Dessutom använder vi oss av de senaste välbeprövade ramverken för att snabbt bygga upp stabila och användarvänliga gränssnitt.
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol sm='4'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle> Bokföring, fakturering och finansiella tjänster</MDBCardTitle>
            <MDBCardText>
            Vi kan hjälpa till med bokföring 
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      




    </MDBRow>


<br/><br/>

<br/><br/><br/> <br/><br/> 

<br/><br/><br/> <br/><br/> 
<img src={services} alt={"services"} /><br/>
        </div>
        <br/><br/><br/> <br/><br/> <br/>
        </MDBContainer>
        
        
    )}

