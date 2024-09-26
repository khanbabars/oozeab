import React from "react";
import { Home } from "../pages/home";
import { Konsultuppdrag } from "../pages/Konsultuppdrag";
import { Services } from "../pages/Services";
import Contact from "../pages/Contact";
import { About } from "../pages/About";
import { Customers } from "../pages/Customers";

export default function Page({ id, browseAssignment }) {
  return (
    <div id={id}>
      {(() => {
        if (id === "hem") {
          return <Home />;
        } else if (id === "konsultuppdrag") {
          return <Konsultuppdrag browseAssignment={browseAssignment} />;
        } else if (id === "tjanster") {
          return <Services />;
        } else if (id === "customers") {
          return <Customers />;
        } else if (id === "Om") {
          return <About />;
        } else if (id === "kontakt") {
          return  <Contact />;
        } else if (id === "kund") {
          return <Contact />;
        }
      })()}
    </div>
  );
}
