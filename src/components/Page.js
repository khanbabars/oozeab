import React from "react";
import {Home} from '../pages/home'
import {Konsultuppdrag} from '../pages/Konsultuppdrag'
import {Aboutus} from '../pages/Aboutus'
import Contact from '../pages/Contact'


export default function Page({ id }) {
  return (

      <div id={id}>
           {(() => {
        if (id === 'hem') {
          return <Home/>;
                  } 
        else if (id === 'konsultuppdrag') {
          return <Konsultuppdrag />;
        } 
        else if (id === 'tjanster'){
          return <Aboutus />;
        }
        else if (id === 'kontakt'){
            return <Contact />;
          }
          else if (id === 'kund'){
            return <Contact />;
          }
      })()}
      </div>
   
  );
}