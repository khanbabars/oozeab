import React from "react";
import axios from "axios";
import { OOZE_RECEIVE_CONSULTANT_RESUME } from "../cache/api";
import {

  MDBCardBody,

  MDBInput,

  MDBView
} from "mdbreact";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";



const UploadCV = ({ projectProps }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [emailLinkedinProfile, setEmailLinkedinProfile] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [contactNumber, setContactNumber] = useState("46"); //default country code
  const [apiReply, setApiReply] = useState(false);
  const [termAgree, setTermAgree] = useState(true);

  const checkboxHandler = () => {
    setTermAgree(!termAgree);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("first_name", firstName);
    dataArray.append("last_name", lastName);
    dataArray.append("project_name", projectProps[0].project_heading);
    dataArray.append("project_supplier", projectProps[0].consultant_company);
    dataArray.append("project_id", projectProps[0].project_id);
    dataArray.append("email_address", emailAddress);
    dataArray.append("linkedin_profile", emailLinkedinProfile);
    dataArray.append("contact_number", contactNumber);
    dataArray.append("resume", uploadFile);

    axios
      .post(OOZE_RECEIVE_CONSULTANT_RESUME, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response;
      })
      .then((response) => {
        //  console.log(response.request.status)
        if (response.request.status === 200) {
          setApiReply(true);
        } else {
          setApiReply(false);
        }
      })
      .catch((error) => {
        // error response
      });
  };
  if (apiReply)
    return (
      <Container>
        <Row>
          <Col lg="12" className="lg-0 mb-10 text-left my-5">
            <Card>
              
                <MDBView>
                  <img
                    src={require("../images/mix.jpg")}
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      display: "block",
                      marginRight: "auto",
                      width: "30%",
                    }}
                    alt="tick_photo"
                  />{" "}
                  <br />
                </MDBView>

                <p
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    fontSize: "17px",
                    color: "#364a61",
                  }}
                >
                  Tack för ditt intresse ! <br />
                  Vi kommer att återkoppla till dig om vi anser att bifogad
                  profil är intressant för uppdraget.
                  <br />
                  Om vi inte hörs vidare så önskar jag dig lycka till i
                  framtiden!
                </p>
              </Card>
            
          </Col>
        </Row>
      </Container>
    );

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <div className="container">
          <Row>
            <Col lg="12" className="lg-0 mb-10 text-left my-5">
              <Card style={{ fontWeight: "bold" }}>
                <MDBCardBody>
                  <p
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#364a61",
                    }}
                  >
                    Ansök
                  </p>
                  <div className="md-form">
                    <MDBInput
                      onChange={(e) => setFirstName(e.target.value)}
                      hint="Förnamn *"
                      required
                    />
                  </div>
                  <br />
                  <div className="md-form">
                    <MDBInput
                      onChange={(e) => setLastName(e.target.value)}
                      hint="Efternamn *"
                      required
                    />
                  </div>
                  <br />
                  <div className="md-form">
                    <MDBInput
                      type="email"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      hint="E-postadress *"
                      required
                    />
                  </div>
                  <br />
                  <div className="md-form">
                    <MDBInput
                      onChange={(e) => setEmailLinkedinProfile(e.target.value)}
                      hint="Länk till din linkedin profil"
                    />
                  </div>
                  <br />
                  <PhoneInput
                    country="se"
                    fullWidth="true"
                    masks={{ se: "... ... ... ........." }}
                    value={contactNumber}
                    onChange={setContactNumber}
                  />
                  <br />
                  <br />
                  <input
                    type="file"
                    required="required"
                    className="form-control-file"
                    onChange={(e) => setUploadFile(e.target.files[0])}
                  />
                  <br />
                  <br />
                  <div
                    style={{
                      fontSize: "15px",
                      color: "#364a61",
                      border: "1px solid gainsboro",
                      paddingLeft: "28px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <a
                      href="/Villkor"
                      target="_blank"
                      style={{ color: "#2F4F4F" }}
                    >
                      {" "}
                      <input
                       type="checkbox"
                        onChange={checkboxHandler}
                        name="flexCheck"
                      />
                      * Jag accepterar OOZE AB allmänna villkor och personuppgiftspolicy{" "}
                    </a>
                  </div>
                  <br /> <br /> <br />
                  <div className="text-center">
                    <Button color="info" type="submit" disabled={termAgree}>
                      Skicka
                    </Button>
                  </div>
                  {/* 
        <div>
      <input type="checkbox" />
    </div> */}
                </MDBCardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UploadCV;
