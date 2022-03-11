import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { MDBRow, MDBCol, MDBCardBody, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import { useState } from "react";
import { OOZE_EMAIL_SUBSCRIPTION } from "../cache/api";

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
  width: 1000px;
  height: 650px;
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
    background-color: #17a2b8;
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
  const [apiReply, setApiReply] = useState(false);
  const [name, setName] = useState();
  const [emailAddress, setEmailAddress] = useState();

  const submitForm = (event) => {
    event.preventDefault();

    const dataArray = new FormData();
    dataArray.append("name", name);
    dataArray.append("email_address", emailAddress);

    axios
      .post(OOZE_EMAIL_SUBSCRIPTION, dataArray, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        return response;
      })
      .then((response) => {
        //  console.log(response.request.status)
        if (response.request.status === 200) {
          setApiReply(true);
          setShowModal(false);
        } else {
          setApiReply(false);
        }
      })
      .catch((error) => {
        // error response
      });
  };

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        // console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  if (!apiReply)
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalImg src={require("../images/diego.jpg")} alt="camera" />

                <ModalContent>
                  <br /> <br /> <br /> <br />
                  <h1>&nbsp;&nbsp;Prenumerera</h1>
                  <p style={{ fontSize: "15px", marginLeft: "25px" }}>
                    Prenumerera för att få uppdrags förfrågningar på mejl
                  </p>
                  <form onSubmit={submitForm}>
                    <div>
                      <MDBRow>
                        <MDBCol className="lg-12 mb-10 text-left my-5">
                          <MDBCardBody>
                            <MDBInput
                              onChange={(e) => setName(e.target.value)}
                              hint="Namn *"
                              required
                            />

                            <MDBInput
                              type="email"
                              onChange={(e) => setEmailAddress(e.target.value)}
                              hint="E-postadress *"
                              required
                            />

                            <br />

                            <div className="text-center">
                              <MDBBtn
                                color="info"
                                type="submit"
                                onClick={closeModal}
                              >
                                Skicka
                              </MDBBtn>
                            </div>
                          </MDBCardBody>
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </form>
                </ModalContent>
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
};
