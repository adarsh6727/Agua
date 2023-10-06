import React from "react";
 import Container from "react-bootstrap/Container";
 import Nav from "react-bootstrap/Nav";
 import Navbar from "react-bootstrap/Navbar";
 import Offcanvas from "react-bootstrap/Offcanvas";
 import Logo from "../assets/logo.webp";
 import Button from "react-bootstrap/Button";
import "./../css/Navbar.css";
 import Dropdown from "react-bootstrap/Dropdown"

function App() {
  return (
    <>

      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand="md"
          className="bg-black"
          sticky="top"
          
        >
          <Container fluid>
      
            <Navbar.Brand href="#">
              <a href="/">
                <img
                  src={Logo}
                  className="img-fluid"
                  style={{ width: "120px",height:'50px' }}
                />
              </a>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="custom-toggle-button text-secondary bg-white"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Offcanvas.Body>
                <Nav className="navbar-custom  d-flex justify-content-end">
                  <Nav.Link
                    className="text-white"
                    style={{ fontSize: "16px",fontWeight:'1000'}}
                    href="/"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    style={{ fontSize: "16px  " ,fontWeight:'1000'}}
                    href="/About"
                  >
                    About Us
                  </Nav.Link>
           <Dropdown>
             <Dropdown.Toggle
               
               className="text-white bg-black "
               style={{ fontSize: "16px",fontWeight:'1000'}}
               variant="link"
              
             
             >
               Features
             </Dropdown.Toggle>
             <Dropdown.Menu className="text-black ">
               <Dropdown.Item
                 style={{ fontSize: "16px" ,fontWeight:'1000'}}
                 href="/OnlineMonitoring"
               >
                 Online Monitoring
               </Dropdown.Item>
               <Dropdown.Item
                 style={{ fontSize: "16px",fontWeight:'1000' }}
                 href="/AdvancedAutomation"
               >
                 Advanced Automation
               </Dropdown.Item>
               <Dropdown.Item
                 style={{ fontSize: "16px" ,fontWeight:'1000'}}
                 href="/LeakageDetection"
               >
                 Leakage Detection
               </Dropdown.Item>
               <Dropdown.Item
                 style={{ fontSize: "16px",fontWeight:'1000' }}
                 href="/QualityManagement"
               >
                 Quality Management
               </Dropdown.Item>
              
             </Dropdown.Menu>
           </Dropdown>
               


                  <Nav.Link
                    className="text-white"
                    style={{ fontSize: "16px",fontWeight:'1000' }}
                    href="/FAQ"
                  >
                    FAQ
                  </Nav.Link>

                  <Nav.Link
                    className="text-white"
                    style={{ fontSize: "16px ",fontWeight:'1000' }}
                    href="/ContactUs"
                  >
                    Contact Us
                  </Nav.Link>
                  <Nav.Link
                    className="pt-0"
                    style={{width:'150px' }}
                    href="Book"
                  >
                    <Button variant="light" size="sm"style={{fontSize:'16px',fontWeight:'1000'}} href="https://calendly.com/partnerships-agua/30min?">
                      Book a demo
                    </Button>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
      ))}
       
          
        
    </>
  );
}

export default App;
