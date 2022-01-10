import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import logos from '../images/ooze.PNG';
import {API_ASSIGNMENT_DETAIL} from '../cache/api'



 function getAssignmentDetail () {
    return fetch(API_ASSIGNMENT_DETAIL)
      .then(data => data.json())
  }

export const ApplyJob = () => {
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAssignmentDetail()
          .then(items => {
            if(mounted) {
                setAssignment(items)
            }
          })
        return () => mounted = false;
      }, [])

    return (

<React.Fragment>

<NavLink
to ="/">

<a  href ="">
&nbsp; &nbsp;  
<img src={logos} 
style ={{  paddingTop: '23px', height: '73px', width: '116px', paddingLeft : '5px' }}

alt='logo_photo_assigment' />


    </a>

</NavLink>
<br/>   <br/>   <br/>
        <h1> Ansöka  Ansöka Ansöka Ansöka Ansöka Ansöka Ansöka</h1> 
        
       <p>{assignment.project_id}</p>
     
       </React.Fragment>
        
        )
        

    
}