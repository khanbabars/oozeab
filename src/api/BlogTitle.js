import React from "react";
import {API_TITLE} from '../cache/api'

export default class BlogTitle extends React.Component {
    constructor(props){
        super(props);
        this.state = {  url : API_TITLE,  
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
    <div> <ul >{this.state.items.map((item, index) => <li key={index}> <a href={item.link}>{item.title}</a> </li>)}</ul></div>
 </React.Fragment>) }}}
 
 async function fetchData(state){      
  const response = await fetch(state.url); //fetch
  const data = await response.json();
  const content=[]  = data.items //assign items to content array
  const item =  content||[]
  return item }   //return items 