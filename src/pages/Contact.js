import React, { Component } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput, MDBView,MDBContainer } from "mdbreact";
import axios from 'axios';
import { API_POST_CONTACT } from '../cache/api'

export default class  Contact extends Component {


  constructor(){
    super();
    this.state = {  url : API_POST_CONTACT,  name :'', email:'', comments :'',}}
 

  ContactSubmit = event => {
    axios.post(this.state.url, { api_name: this.state.name, api_email:this.state.email, api_comments:this.state.comments})
      .then(res => {
        //console.log('Contact info has sent');
        // console.log(res.data);
      })

      event.preventDefault();
      this.setState({name: '', email: '', comments: ''}) //clear all
    }


    handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    }

render() {
  return (
    <div>
    < form onSubmit={this.ContactSubmit} className="my-5" style={{ align:'center'}}>
      <MDBContainer>
      <MDBRow >
        
        <MDBCol lg="12" className="lg-0 mb-12 text-left my-5">
          
        <div>
               
              </div>            
          <MDBCard >

            <MDBCardBody>

              <MDBView  >            
     
     <img src = {require('../images/mix.jpg' )  } style={{ width: '50%',  textAlign: 'center', marginLeft:'auto', display : 'block', marginRight:'auto'}}/>
    </MDBView>
        

              <div className="md-form">
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Namn
              </label>
                <MDBInput
                
                  icon="envelope"
                  iconClass="grey-text"
                  type="text"
                  id="name"
                  name='name'
                  value={this.state.name}
                  required onChange={this.handleChange}
                />
              </div>
              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Mejl
              </label>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  iconClass="grey-text"
                  type="text"
                  id="email"
                  name='email'
                  value={this.state.email}
                  required onChange={this.handleChange}
                />
              </div>

              <label
                htmlFor="defaultFormRegisterNameEx"
                className="grey-text"
              >
                Fråga
              </label>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  iconClass="grey-text"
                  type="textarea"
                  id="comments"
                  name='comments'
                  value={this.state.comments}
                  onChange={this.handleChange}
                />
              </div>
              
              <div className="text-center">
              <MDBBtn color="info" type="submit">
            Skicka
          </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        <MDBCol lg="7">
         <MDBRow className="text-center">
  
            <MDBCol md="6">
            </MDBCol>


             
          
          </MDBRow>
        </MDBCol>
      </MDBRow>
        
      <br/>
              <p  style={{ textAlign: 'center'}}>info@oozeab.se<br/>+46700679299</p>         
      </MDBContainer>

</ form>
 </div>
  );
}   

}