import React from "react";
import {Home} from '../pages/home'
import {Services} from '../pages/Services'
import {Aboutus} from '../pages/Aboutus'
import Contact from '../pages/Contact'


export default function Page({ id }) {
  return (

      <div id={id}>
           {(() => {
        if (id === 'hem') {
          return <Home/>;
                  } 
        else if (id === 'tjänster') {
          return <Services />;
        } 
        else if (id === 'omoss'){
          return <Aboutus />;
        }
        else if (id === 'kontakt'){
            return <Contact />;
          }
      })()}
      </div>
   
  );
}