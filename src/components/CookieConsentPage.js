import React from "react";
import CookieConsent from "react-cookie-consent";

export const CookieConsentPage = () => {
  return (
    <React.Fragment>
      <CookieConsent
        location="bottom"
        buttonText="Jag förstår!"
        cookieName="OozeCookie"
        style={{ background: "#17a2b8" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}
      >
        Vi använder cookies för att ge dig en bättre upplevelse av OOZE AB.
        <span style={{ fontSize: "11px" }}>
          {" "}
          <br /> När du använder vår webbsida godkänner du alla cookies i
          enlighet med vår policy. &nbsp;{" "}
          <a href="/Villkor" target="_blank">
            Läs mer{" "}
          </a>
        </span>
      </CookieConsent>
    </React.Fragment>
  );
};
