import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import logos from '../images/ooze.PNG';
import {API_ASSIGNMENT_DETAIL} from '../cache/api'



 function getAssignmentDetail (id) {
    return fetch(API_ASSIGNMENT_DETAIL + id)
      .then(data => data.json())
     
  }

export const ApplyJob = (props) => {

  
    console.log(props.match.url.substring(1))
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        let mounted = true;
        let assignment_id = props.match.url.substring(1)
  
        getAssignmentDetail(assignment_id)
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


&nbsp; &nbsp;  
<img src={logos} 
style ={{  paddingTop: '23px', height: '73px', width: '116px', paddingLeft : '5px' }}

alt='logo_photo_assigment' />



</NavLink>
<br/>  <br/> <br/> <br/>
<hr/>
 <h2>&nbsp;&nbsp;{assignment.items && assignment.items[0].project_heading}</h2>
      <hr/>
       </React.Fragment>
        
        )
        

    
}