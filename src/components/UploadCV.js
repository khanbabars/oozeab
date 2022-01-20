import React from "react";
import axios from "axios";
import {OOZE_RECEIVE_CONSULTANT_RESUME} from '../cache/api'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput,MDBContainer, MDBFormInline } from "mdbreact";
import { MDBCheckbox } from 'mdb-react-ui-kit'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState } from "react";

const  UploadCV = () => {

  const [firstName, setFirstName]             = useState();
  const [lastName, setLastName]               = useState();
  const [projectName, setProjectName]         = useState();
  const [projectSupplier, setProjectSupplier] = useState();
  const [emailAddress, setEmailAddress]       = useState();
  const [emailLinkedinProfile, setEmailLinkedinProfile] = useState();
  const [uploadFile, setUploadFile]            = useState();
  const [contactNumber, setContactNumber]     = useState();
 


  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("first_name", firstName);
    dataArray.append("last_name",  lastName);
    dataArray.append("project_name", 'project');
    dataArray.append("project_supplier", 'Uppgraded'); 
    dataArray.append("email_address", emailAddress);
    dataArray.append("linkedin_profile", emailLinkedinProfile);
    dataArray.append("contact_number", contactNumber);  
    dataArray.append("resume",uploadFile);

    axios
      .post(OOZE_RECEIVE_CONSULTANT_RESUME, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((response) => {
        // successfully uploaded response
        console.log(response)
      })
      .catch((error) => {
        // error response
      });

      console.log (contactNumber  )
  };

  return (
    <React.Fragment> 
       <form onSubmit={submitForm}>
      <MDBContainer>
      <MDBRow >
        
        <MDBCol lg="12" className="lg-0 mb-10 text-left my-5">
    
        <MDBCard >

        <MDBCardBody>

        <p style={{   textAlign: 'center', marginLeft:'auto', 
        marginRight:'auto', fontWeight : 'bold', fontSize : '22px', color :'#364a61'}}>Ansök</p>

      <div className="md-form">
        <MDBInput
          onChange={(e) => setFirstName(e.target.value)}
          hint="Förnamn *"
          required/>
        </div>
        <br /> 

      <div className="md-form">
        <MDBInput
          onChange={(e) => setLastName(e.target.value)}
          hint="Efternamn *"
          required/>
       </div>
       <br />
        
        
      <div className="md-form">
        <MDBInput
          type='email'
          onChange={(e) => setEmailAddress(e.target.value)}
          hint="E-postadress *"
          required/>
        </div>
        <br />

      <div className="md-form">
        <MDBInput
          onChange={(e) => setEmailLinkedinProfile(e.target.value)}
          hint="Länk till din linkedin profil"/>
        </div>
        <br />

        <PhoneInput
          country={"se"}
          value={contactNumber}
          onChange={ setContactNumber } />


        <br/><br/>

        <input type="file" 
        className="form-control-file"
        onChange={(e) => setUploadFile(e.target.files[0])} />
        <br/> 
        <br/> 
      
        <div style = {{ fontSize : '15px', color :'#364a61',  
             border : '1px solid gainsboro', padding :'10px'}}>
      <MDBFormInline>

      <MDBCheckbox  name='flexCheck' value=''  label='* Jag accepterar GDPR och OOZE AB allmänna villkor.' />


      </MDBFormInline>
      </div>

      <br/> <br/> <br/> 
        <div className="text-center">
              <MDBBtn color="info" type="submit">
            Skicka
          </MDBBtn>
        </div>

      </MDBCardBody>

      </MDBCard >

      </MDBCol>

      </MDBRow >
        
      </MDBContainer>
      </form>
</React.Fragment> 
  );

}

export default UploadCV;