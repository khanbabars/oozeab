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


            
            <Link exact to = "/">
               
                </Link>

               
                </div>
          <ul className="nav navbar-right">
            
          <li >

<Link
  
  to="/#hem"
  smooth={true}
  offset={-70}
  duration={100}>

<p style={{ paddingTop: '10px', height: '40px', width: '50px', paddingRight: '100px'}} > <img src={logo} alt='logo_photo'/></p>
</Link>&nbsp;
</li>
<li >

              <Link
                
                to="/#konsultuppdrag"
                smooth={true}
                offset={-70}
                duration={100}>

<p style={{ paddingTop: '20px',fontSize: '20px', fontWeight: '400', color: '#434952', paddingLeft: '40px'}} > Konsultuppdrag </p>
              </Link>
            </li>

            <li >

<Link
  
  to="/#kunder"
  smooth={true}
  offset={-70}
  duration={100}>

<p style={{ paddingTop: '20px',fontSize: '20px', fontWeight: '400', color: '#434952', paddingLeft: '50px'}} >För kunder</p>
</Link>
</li>


            <li >
              <Link
                
                to="/#tjanster"
                smooth={true}
                offset={-70}
                duration={100}
              
              >
                <p style={{ paddingTop: '20px', fontSize: '20px', fontWeight: '400', color: '#434952'}} >&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Tjänster</p>
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
</li> */



}
          </ul>
          
  
       
        </div>
      </nav>
      </section>
    );
  }
}