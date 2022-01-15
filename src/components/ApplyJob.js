import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import logos from '../images/ooze.PNG';
import {API_ASSIGNMENT_DETAIL, OOZE_SITE_ADDRESS} from '../cache/api'

  import {
          LinkedinShareButton, LinkedinIcon, 
          TwitterShareButton,  TwitterIcon, 
          FacebookMessengerShareButton, FacebookMessengerIcon,
          EmailShareButton,             EmailIcon} from "react-share";





          
 function getAssignmentDetail (id) {
    return fetch(API_ASSIGNMENT_DETAIL + id)
      .then(data => data.json())
     
  }

export const ApplyJob = (props) => {
    let assignment_id = props.match.url.substring(1)
    let assignmentUrl = OOZE_SITE_ADDRESS + assignment_id
    
  
   
    const [assignment, setAssignment] = useState([]);

    useEffect(() => {
        let mounted = true;
  
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

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style= {{ fontSize:'13px', borderRadius: '25px', color:'white', backgroundColor:'#17a2b8', padding : '5px'}}>{assignment.items && assignment.items[0].project_location}</b>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Startdatum:</b>  &nbsp;{assignment.items && assignment.items[0].project_start_date}   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Slutdatum:</b>   &nbsp; {assignment.items && assignment.items[0].project_end_date}   
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Omfattning:</b>  &nbsp;{assignment.items && assignment.items[0].project_availablity}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Ansök senast:</b>&nbsp;{assignment.items && assignment.items[0].application_close_date}
        
        <br/>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <p style = {{ fontSize:'15px', whiteSpace:'pre-wrap', paddingLeft:'28px', border : '1px solid gainsboro'}}>{assignment.items && assignment.items[0].project_details}</p>
       
     
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <LinkedinShareButton 
                url={assignmentUrl}
                quote={"For more information visit " + OOZE_SITE_ADDRESS}
                hashtag="#OOZEAB"
            >
                 <LinkedinIcon size={32}  round={true}/>
              </LinkedinShareButton>&nbsp;

              <EmailShareButton 
                url={assignmentUrl}
                quote={"For more information visit " + OOZE_SITE_ADDRESS}
                hashtag="#OOZEAB"
            >
                 <EmailIcon size={32}  round={true}/>
              </EmailShareButton>&nbsp;




          <TwitterShareButton 
                url={assignmentUrl}
                quote={"For more information visit " + OOZE_SITE_ADDRESS}
                hashtag="#OOZEAB"
            >
                 <TwitterIcon size={32}  round={true}/>
              </TwitterShareButton>&nbsp;

              <FacebookMessengerShareButton 
                url={assignmentUrl}
                quote={"For more information visit " + OOZE_SITE_ADDRESS}
                hashtag="#OOZEAB"
            >
                 <FacebookMessengerIcon size={32}  round={true}/>
              </FacebookMessengerShareButton>&nbsp;
    
   
       <br/><br/>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Skicka CV till </b> uppdrag@oozeab.se


       </React.Fragment>
        
        )
        

    
}