import React from 'react';
import Navigationbar from '../src/components/Navigationbar'
import Page from './components/Page'
import {Provider} from 'react-redux'
import store from './cache/store'
import {CookieConsentPage} from './components/CookieConsentPage'
import {Jumbotron} from './jumbotron'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApplyJob } from './components/ApplyJob';      


function App() {

  const switchRoute = true;
  if (switchRoute)  {
  return (
 
  <React.Fragment>
    <CookieConsentPage/>
    <Provider  store = {store}>
   <Navigationbar/>
   <Jumbotron/> 
      <Page   id="hem"/> 
       <Page   id="konsultuppdrag"/>
       <Page   id="tjanster"/>
       <Page   id="kontakt"/>   
      </Provider>   
      
  </React.Fragment>);}

return (
<React.Fragment>
  <Router>
  <Navigationbar/>
  <Switch>
   
    <Route path='/ApplyJob' component={ApplyJob} />

  </Switch>
      </Router>
  </React.Fragment>);}

export default App;
