import React from 'react';
import {API_ASSIGNMENT_DETAIL} from '../cache/api'


export default class Assignment_detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {  url : API_ASSIGNMENT_DETAIL,  project_id: 2470,
                        loading: true,  items: [],  setInterval: 3600000, 
                        fetch: false
 }};
async componentDidMount() {  
        fetchData(this.state).then((item)=>{
          this.setState({ 
          items : item,
          loading : false
     });},
     )}       

static getDerivedStateFromProps(nextProps, state)
    {     state.fetch = true   
        return  state }

      shouldComponentUpdate (nextProps, nextState){   
        setTimeout(() => {  if(this.state.fetch){     
        fetchData(this.state).then((item)=>{     
            this.setState({ 
            items : item,
            fetch :false });  })  }},
            this.state.setInterval);  
      return true }
 
      render() { const { loading, items} = this.state;
        if (loading)  {  
        return <div>Loading ... </div>; } 
        else {
        return (  
 <React.Fragment>        

    <div> <ul >{this.state.items.map((item, index) => <li key={index}> &nbsp;&nbsp;<a style={{ paddingTop: '5px', fontSize: '20px', color: '#434952'}}  href={item.project_heading}>
        <b style={{ fontSize:'19px', padding: '5px'}}>{item.project_heading}</b> &nbsp;&nbsp;&nbsp;<b style={{ fontSize:'12px', borderRadius: '25px', color:'white', backgroundColor:'#426279', padding: '2px'}} >  UP</b> 
        <br/> &nbsp;&nbsp;&nbsp;&nbsp;Omfattning: {item.project_availablity}   
        <br/>&nbsp;&nbsp;&nbsp;&nbsp;Ansök senast:{item.project_details} 
    
        <br/>&nbsp;&nbsp;&nbsp; <b style= {{ fontSize:'14px', borderRadius: '25px', color:'white', backgroundColor:'#17a2b8', padding : '4px'}}>{item.project_location}</b>   </a> <br/><br/><br/></li>)}</ul></div>

          
            
 
 </React.Fragment>) }}}
 
 async function fetchData(state){      
  const response = await fetch(state.url+ state.project_id); //fetch
  const data = await response.json();
  const content=[]  = data.items //assign items to content array
  const item =  content||[]
  return item }   //return items 