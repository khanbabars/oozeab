import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { LinkedinIcon } from "react-share";

const Footer = () => {
  return (
    <div style={{ color: "white", background: "#364a61" }}>
 
        <Container fluid className="text-center text-md-left">
          <Row>
            <Col md="10">
              {/* <p>
          info@oozeab.se <br/>
          0700679299
        
            </p> */}
            </Col>
            <Col md="2">
              <a href="/Villkor" target="_blank" style={{ color: "white" }}>
                Allmänna villkor{" "}
              </a> <br/>
              <a href="/Policy" target="_blank" style={{ color: "white" }}>
                personuppgiftspolicy{" "}
              </a>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            {" "}
            <div style={{ fontSize: "22px" }}>
              <a
                href="https://se.linkedin.com/company/ooze-ab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ fontSize: "16px", color: "white" }}>
                  {" "}
                  följa oss på <LinkedinIcon size={35} />{" "}
                </div>
              </a>
            </div>
            <p style={{ fontSize: "15px" }}>uppdrag@oozeab.se</p>
            <hr />
            &copy; {new Date().getFullYear()} Ooze AB
          </Container>
        </div>

    </div>
  );
};

export default Footer;
