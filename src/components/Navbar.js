import React, { Component } from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import logo from '../images/ooze.PNG';


export default class Navbar extends Component {
  state = {
      isOpen: false
  };

  scrollToTop = () => {
    this.setState({ isOpen: !this.setState.isOpen});
  };

  render() {
   
    return (
      <section id = 'nav-bar' >
      <nav className="nav" id="navbar" >
        <div className="nav-content" >
          <div  className="nav-header" >
            <Link to = "/">
               
                </Link>

               
                </div>
          <ul className="nav navbar-right">
            
          <li >

<Link
  
  to="/#hem"
  smooth={true}
  offset={-70}
  duration={100}>

<p style={{ paddingTop: '10px', height: '40px', width: '40px'}} > <img src={logo} /></p>
</Link>
</li>
            <li >

              <Link
                
                to="/#Konsultuppdrag"
                smooth={true}
                offset={-70}
                duration={100}>

<p style={{ paddingTop: '20px',fontSize: '20px', fontWeight: '400', color: '#434952', paddingLeft: '50px'}} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Konsultuppdrag </p>
              </Link>
            </li>
            <li >
              <Link
                
                to="/#omoss"
                smooth={true}
                offset={-70}
                duration={100}
              
              >
                <p style={{ paddingTop: '20px', fontSize: '20px', fontWeight: '400', color: '#434952'}} >&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Om oss</p>
              </Link>
            </li>
            <li >
              <Link
                
                to="/#kontakt"
                smooth={true}
                offset={-70}
                duration={100}
               
              >
                <p style={{paddingTop: '20px', fontSize: '20px', fontWeight: '400', color: '#434952'}} > &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kontakt</p>
              </Link>
            </li>
            {/* <li >
            <Link
  
  to="/#hem"
  smooth={true}
  offset={-70}
  duration={100}>

<p style={{ paddingLeft: '330px', paddingTop: '10px', height: '30px', width: '30px'}} > <img src={snow} /></p>
</Link>
</li> */}
          </ul>
        </div>
      </nav>
      </section>
    );
  }
}