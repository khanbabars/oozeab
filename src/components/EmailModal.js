import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn, MDBInput,MDBContainer,MDBView } from "mdbreact";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 700px;
  height: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  
  
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
   background-color:#17a2b8;
    color: #fff;
    border: none;

    
    
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  
`;

export const EmailModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require('../images/white.jpg')} alt='camera' />
              <ModalContent>
      
             
              <h1>Are you ready?</h1>
              
      
      <form >
     
      <div className="container">
     <MDBRow >
    
       <MDBCol lg="12" className="lg-0 mb-10 text-left my-5">
   
       <MDBCard style={{fontWeight : 'bold' }}>

       <MDBCardBody >

       <p style={{   textAlign: 'center', marginLeft:'auto', 
       marginRight:'auto', fontWeight : 'bold', fontSize : '22px', color :'#364a61'}}>Ansök</p>

     <div className="md-form">
       <MDBInput
      
         hint="Förnamn *"
         required/>
       </div>
       <br /> 

     <div className="md-form">
       <MDBInput

         hint="Efternamn *"
         required/>
      </div>
      <br />
       
       
     <div className="md-form">
       <MDBInput
         type='email'
     
         hint="E-postadress *"
         required/>
       </div>
       <br />



       <br/><br/>


         <br/> <br/> <br/> 
    
{/* 
       <div>
     <input type="checkbox" />
   </div> */}

     </MDBCardBody>

     </MDBCard >

     </MDBCol>
 

     </MDBRow >
       
     </div>


     </form>



              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};