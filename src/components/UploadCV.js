import React from "react";
import axios from "axios";
import {OOZE_RECEIVE_CONSULTANT_RESUME} from '../cache/api'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput,MDBContainer } from "mdbreact";

const  UploadCV = () => {

  const [firstName, setFirstName] = React.useState();
  const [uploadFile, setUploadFile] = React.useState();
  
  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("first_name", firstName);
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
  };

  return (
    <React.Fragment> 
       <form onSubmit={submitForm}>
        <MDBContainer>
      <MDBRow >
        
        <MDBCol lg="12" className="lg-0 mb-12 text-left my-5">
          
            
          <MDBCard >

            <MDBCardBody>
     
      <div className="md-form">
        <MDBInput
          onChange={(e) => setFirstName(e.target.value)}
 /*          placeholder={"Namn"} */
          hint="Förnamn"
        />
        </div>
        <br /> <br />
        <input type="file" 
        className="form-control-file"
        onChange={(e) => setUploadFile(e.target.files[0])} />
        <br /> <br />
        {/* <input type="submit" /> */}
        
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