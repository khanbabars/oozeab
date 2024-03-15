import React, { useState } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap'
import { EmailModal } from './components/EmailModal';
import "./pages/Custom.css";





export const Jumbotron = () =>  { 

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };


return (
  <>


<Jumbo fluid className= "jumbo">
    
    <Container >


  
      
    <div className="overlay">
    <p>We match the best tech talent for your projects<br/></p>
    
  
    </div>
   
    <div><button id="register-uppdrag"  className="register-for-mail"  onClick={openModal}>Registera dig </button> 
    </div>


<div className="middle">


<p>Vill du ta del av våra konsultuppdrag direkt per mail?
</p></div>
<div>





</div>
<div className ='adjust-modal'>
    <EmailModal showModal={showModal} setShowModal={setShowModal} />

</div>

      
    </Container>
</Jumbo>

  </>
);
}