import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ApplyJob } from '../components/ApplyJob';    



export const JobDetail = () => {

    return (


 <Router>
<div>
<ul>
<li><Link to={'/ApplyJob'} className="nav-link">ApplyJob</Link></li>
</ul>
<Switch>
<Route path='/ApplyJob' component={ApplyJob} />
</Switch>
</div>
</Router>
    )

    
}

