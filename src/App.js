import React, { useState  } from 'react';
import Navigationbar from '../src/components/Navigationbar'
import Page from './components/Page'
import {Provider} from 'react-redux'
import store from './cache/store'
import {CookieConsentPage} from './components/CookieConsentPage'
import {Jumbotron} from './jumbotron'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApplyJob } from './components/ApplyJob';      


function Main() {

  
  const [switchRoute, setstate] = useState(false)

 
  const browseAssignment = ()=> {
    if(switchRoute===false) { 
setstate({ switchRoute : true})
    }
    else{
      setstate({ switchRoute : false})
    }
  }


  if (!switchRoute)  {
  return (
 
  <React.Fragment>
    <CookieConsentPage/>
    <Provider  store = {store}>
   <Navigationbar/>
   <Jumbotron/> 
       <Page   id="hem"/> 
       <Page   id="konsultuppdrag" browseAssignment={browseAssignment}/>
       <Page   id="tjanster"/>
       <Page   id="kontakt"/>   
      </Provider>   
      
  </React.Fragment>);}
}
function App () { 
return (
<React.Fragment>
  <Router>

  <Switch>
  <Route path='/' component={Main} exact={true}/>
    <Route path='/ApplyJob' component={ApplyJob} exact={true} />
    </Switch>
      </Router>
  </React.Fragment>);}

export default App;
