import React from 'react';
import Navigationbar from '../src/components/Navigationbar'
import Page from './components/Page'
import {Provider} from 'react-redux'
import store from './cache/store'
import {CookieConsentPage} from './components/CookieConsentPage'

 

function App() {
  return (
 
    
  <React.Fragment>
    <CookieConsentPage/>
   <Provider store = {store}>
      <Navigationbar/>
        <Page   id="Konsultuppdrag"/>
        <Page   id="tjänster"/>
        <Page   id="omoss"/>
        <Page   id="kontakt"/> 
      </Provider>
  
  </React.Fragment>



  );

  
}

export default App;
