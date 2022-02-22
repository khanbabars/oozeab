import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { LinkedinIcon} from "react-share";

const Footer = () => {
  return (
      <div style={{color:'white', background :'#364a61'}}>
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol  md="10">
          
          {/* <p>
          info@oozeab.se <br/>
          0700679299
        
            </p> */}
         
          
          </MDBCol>
          <MDBCol md="2">
         
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid> <div style = {{fontSize:'22px'}}>
        
        <a href="https://se.linkedin.com/company/ooze-ab" target="_blank"   rel="noopener noreferrer">
          <div style = {{fontSize:'14px' ,color : 'white'}}> följa oss på <LinkedinIcon  size={35}  /> </div> 
          
          </a></div> 
    
          <p style = {{fontSize:'15px'}}>

          uppdrag@oozeab.se | 0700679299</p>
       
    <hr/>
          &copy; {new Date().getFullYear()}  Ooze AB 
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default Footer;