import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logos from "../images/ooze.PNG";
import { API_ASSIGNMENT_DETAIL, OOZE_SITE_ADDRESS } from "../cache/api";
import { CookieConsentPage } from "../components/CookieConsentPage";
import Footer from "../components/Footer";

import {
  LinkedinShareButton,
  LinkedinIcon,
  //   TwitterShareButton,  TwitterIcon,
  //   FacebookMessengerShareButton, FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

import UploadCV from "../components/UploadCV";

function getAssignmentDetail(id) {
  return fetch(API_ASSIGNMENT_DETAIL + id).then((data) => data.json());
}

export const ApplyJob = (props) => {
  let assignment_id = props.match.url.substring(1);
  let assignmentUrl = OOZE_SITE_ADDRESS + assignment_id;

  const [assignment, setAssignment] = useState([]);

  useEffect(() => {
    let mounted = true;

    getAssignmentDetail(assignment_id).then((items) => {
      if (mounted) {
        setAssignment(items);
      }
    });
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <NavLink to="/">
        &nbsp; &nbsp;
        <img
          src={logos}
          style={{
            paddingTop: "23px",
            height: "73px",
            width: "116px",
            paddingLeft: "5px",
          }}
          alt="logo_photo_assigment"
        />
      </NavLink>
      <br /> <br />
      <hr />
      <h3>
        &nbsp;&nbsp;{assignment.items && assignment.items[0].project_heading}
      </h3>
      <p style={{ fontSize: "11px", textAlign: "left", paddingLeft: "25px" }}>
        <a
          href="https://upgraded.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {assignment.items && assignment.items[0].consultant_company}
        </a>
      </p>
      <hr />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <b
        style={{
          fontSize: "13px",
          borderRadius: "25px",
          color: "white",
          backgroundColor: "#17a2b8",
          padding: "5px",
        }}
      >
        {assignment.items && assignment.items[0].project_location}
      </b>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Startdatum:</b> &nbsp;
      {assignment.items && assignment.items[0].project_start_date}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>
        Slutdatum:
      </b> &nbsp; {assignment.items && assignment.items[0].project_end_date}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Omfattning:</b> &nbsp;
      {assignment.items && assignment.items[0].project_availablity}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Ansök senast:</b>&nbsp;
      {assignment.items && assignment.items[0].application_close_date}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <LinkedinShareButton
        url={assignmentUrl}
        quote={"For more information visit " + OOZE_SITE_ADDRESS}
        hashtag="#OOZEAB"
      >
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      &nbsp;
      <EmailShareButton
        url={assignmentUrl}
        quote={"For more information visit " + OOZE_SITE_ADDRESS}
        hashtag="#OOZEAB"
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      &nbsp;
      <br />
      <p
        style={{
          fontSize: "15px",
          whiteSpace: "pre-wrap",
          paddingLeft: "28px",
          border: "1px solid gainsboro",
          marginTop: "15px",
          paddingTop: "20px",
          textAlign: "left",
        }}
      >
        {assignment.items && assignment.items[0].project_details}
      </p>
      <UploadCV projectProps={assignment.items} />
      <br /> <br /> <br /> <br />
      <CookieConsentPage />
      <Footer />
    </React.Fragment>
  );
};
