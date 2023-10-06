import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from '../assets/fat1.webp'
import '../css/Features.css'
import image2 from '../assets/fat2.webp'
import image3 from '../assets/fat3.webp'
import '../css/Features.css'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const OnlineMonitoring = () => {
  return (
    <>
      <Container fluid className="text-white bg-black pt-5 pb-3">
       <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
          
            <b>Online Monitoring</b>
          </h1>
          <p>
            <b>Monitor your entire water network, just using your smartphone</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>1) Water Flow Monitoring</b></h6>
              <p>
                Agua’s Smart water meters track the water volume passing through
                a section of the pipeline. Some use cases for this include - </p>

               <p>  ●   Monitor the amount of water supplied to various sections of the
                water distribution grid. </p>
              
                <p>    ● Generate water bills based on actual
                consumption.  </p>

             <p>   ● Analyze current and historical trends of
                consumption. </p>
                ● Identify anomalies in usage due to leaky faucets
                or damaged pipelines.
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1} style={{width:'400px',height:'400px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>2) Storage Level Monitoring</b></h6>
              <p>
              Agua’s level monitoring system utilizes sensors to monitor the water levels in water and wastewater tanks. Some use cases for this include - </p>

               <p>  ● Monitor water demand in city level storage reservoirs, overhead storage tanks, sumps and household tanks </p>
              
                <p>● Monitor change in water levels as storage tanks receive freshwater, to prevent tank overflows.  </p>

             <p>   ●  Monitor sludge levels in septic tanks and sewer manholes. Early detection of sewage overflow helps promote public health and safety. </p>
                
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image2} style={{width:'400px',height:'400px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h6> <b>3) Water Pressure Monitoring</b></h6>
              <p>
              Agua’s pressure monitoring sensors continuously monitor the water pressure in pipelines and tanks. This data is used to maintain water pressure at safe and appropriate levels. Some use cases for this include - </p>

               <p>  ● Pressure monitoring in a city’s water distribution pipeline. High pressure loss is indicative of underground leaks.   </p>
              
                <p>    ● Monitoring water pressure in a building's fire safety system.  </p>

             <p>   ● Monitoring pressure in pressure tanks and distribution grids. </p>
                
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image3} style={{width:'400px',height:'400px'}} className="feature1" />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>   
      <Container fluid className=" pt-5 pb-4 bg-black text-white">
        <Container>
          <Row >
            <Col lg={5} md={7} xs={12}>
              <h6>
                <b>Address :</b>
              </h6>
              <p style={{fontSize:'15px'}}>
                No. 465, Beri Div Dighal, Madana, Jhajjar, Haryana, India -
                124102
              </p>
              <h6 className=""> <b>Phone No. :</b></h6>
              <p>​1800 3090 609</p>
            </Col>
            <Col lg={3} md={5} xs={6}>
              <div >

              <h6>
                <b>Follow us on:</b>
              </h6>
              <a href="/" className="fa fa-twitter-square fs-2 ms-2 text-white"></a>

<a href="/" className="fa fa-facebook-square fs-2  ms-2 text-white"> </a>

<a  href="/" className="fa fa-instagram fs-2  ms-2 text-white "></a>

<a  href="/" className="fa fa-linkedin-square fs-2 ms-2 text-white  "></a>
              </div>
                <div className="pt-4  ">
              <h6 className="padding" > <b>Drop Us a Mail :</b></h6>
              <a href="https://www.google.com/gmail/about/" className="fa fa-envelope fs-2 ms-2 text-white" ></a>
              </div>
           
            </Col>

            <Col lg={4} md={5} xs={12}>
              <h6 style={{fontWeight:'600'}}>
              Join our newsletter
              </h6>
             
              <ButtonToolbar  aria-label="Toolbar with Button groups" >
       
       <InputGroup className="rounded-3">
         <input id="btnGroupAddon"  style={{width:'170px',color:'blue',outlineColor:'red',backgroundColor:'#E5EBFA'}} />
         <Form.Control
    
         placeholder="subscribe"
         aria-required="true"
          style={{cursor:'pointer',outlineColor:'red'}}
        
         />
       </InputGroup>
     </ButtonToolbar>     
            </Col>
            </Row>
        </Container>
      </Container>
      <hr className="m-0 " />
      <Container fluid className="pt-4 pb-5 bg-black">
         <Container>
        
        <p style={{fontSize:"16px"}} className="text-white" >
            © 2023 Agua Wireless Systems Private Limited. All Rights Reserved. Various Trademarks Held By Their Respective Owners.</p>
        </Container>
      </Container>
    </>
  );
};

export default OnlineMonitoring;
