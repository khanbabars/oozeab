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
<br/>  <br/> 
<hr/>
 <h3>&nbsp;&nbsp;{assignment.items && assignment.items[0].project_heading}</h3>
      <hr/>

      
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Startdatum:</b>  &nbsp;{assignment.items && assignment.items[0].project_start_date}   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Slutdatum:</b>   &nbsp; {assignment.items && assignment.items[0].project_end_date}   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Omfattning:</b>  &nbsp;{assignment.items && assignment.items[0].project_availablity}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Ansök senast:</b>&nbsp;{assignment.items && assignment.items[0].application_close_date}
        <br/>
        <br/> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <p style = {{ fontSize:'16px', fontWeight:'normal', whiteSpace:'pre-wrap', paddingLeft:'28px'}}>{assignment.items && assignment.items[0].project_details}</p>
       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Skicka CV till </b> uppdrag@oozeab.se
    
       </React.Fragment>
        
        )
        

    
}