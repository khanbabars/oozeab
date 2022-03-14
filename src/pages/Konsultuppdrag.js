import React from "react";
import { MDBContainer } from "mdbreact";
import Assignments from "../api/Assignments";

export const Konsultuppdrag = ({ browseAssignment }) => {
  return (
    <MDBContainer>
      
      <div>
 
        <br />
        <p
          style={{
            paddingTop: "20px",
            fontSize: "35px",
            color: "black",
            textAlign: "left",
          }}
        >
          Hitta konsultuppdrag
        </p> <br/>
        <Assignments browseAssignment={browseAssignment} />
        <br/> <br/> <br/> <br/>
      </div>
    </MDBContainer>
  );
};
