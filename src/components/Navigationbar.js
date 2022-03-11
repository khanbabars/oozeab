import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBView,
} from "mdbreact";
import "../App.css";
import Navbar from "./Navbar";
import Page from "./Page";
import { BrowserRouter as Router } from "react-router-dom";

class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <Page id="hem" />
            <MDBNavbar
              fixed="top"
              dark
              expand="md"
              scrolling
              transparent
              style={{ backgroundColor: "white" }}
            >
              <MDBNavbarBrand>
                <Navbar />
              </MDBNavbarBrand>
              {!this.state.isWideEnough && (
                <MDBNavbarToggler onClick={this.onClick} />
              )}
              <MDBCollapse isOpen={this.state.collapse} navbar></MDBCollapse>
            </MDBNavbar>

            <MDBView>
              {/* <Jumbotron/> */}
              <MDBMask
                overlay="purple-light"
                className="flex-center flex-column text-white text-center"
              ></MDBMask>
            </MDBView>
          </Router>
        </header>
      </div>
    );
  }
}

export default Navigationbar;
