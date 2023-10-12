import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import image1 from '../assets/fat1.webp'
import '../css/Features.css'
import image2 from '../assets/fat2.webp'
import image3 from '../assets/fat3.webp'
import '../css/Features.css'
import FooterComponent from "../Shared/FooterComponent";
import Fade from "react-reveal/Fade"

export const OnlineMonitoring = () => {
  return (
    <>
    <Fade In>
      <Container fluid className="text-white bg-black py-5 ">
       <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
          
            <b>Online Monitoring</b>
          </h1>
          <p style={{fontSize:"22px"}}>
            <b>Monitor your entire water network, just using your smartphone</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>1) Water Flow Monitoring</b></h6>
              <p>
                Agua’s Smart water meters track the water volume passing through
                a section of the pipeline. Some use cases for this include - </p>

               <li>   Monitor the amount of water supplied to various sections of the
                water distribution grid. </li>
              
                <li>   Generate water bills based on actual
                consumption.  </li>

             <li>  Analyze current and historical trends of
                consumption. </li>
               Identify anomalies in usage due to leaky faucets
                or damaged pipelines.
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1}  className="feature1 " />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>2) Storage Level Monitoring</b></h6>
              <p>
              Agua’s level monitoring system utilizes sensors to monitor the water levels in water and wastewater tanks. Some use cases for this include - </p>

               <li> Monitor water demand in city level storage reservoirs, overhead storage tanks, sumps and household tanks </li>
              
                <li>Monitor change in water levels as storage tanks receive freshwater, to prevent tank overflows.  </li>

             <li>   Monitor sludge levels in septic tanks and sewer manholes. Early detection of sewage overflow helps promote public health and safety. </li>
                
           
            </Col>
            <Col lg={6} md={6} xs={12} >
              <a href="#" >
                <img src={image2}  className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>3) Water Pressure Monitoring</b></h6>
              <p>
              Agua’s pressure monitoring sensors continuously monitor the water pressure in pipelines and tanks. This data is used to maintain water pressure at safe and appropriate levels. Some use cases for this include - </p>

               <li> Pressure monitoring in a city’s water distribution pipeline. High pressure loss is indicative of underground leaks.   </li>
              
                <li>   Monitoring water pressure in a building's fire safety system.  </li>

             <li>  Monitoring pressure in pressure tanks and distribution grids. </li>
                
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image3}  className="feature1 " />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>   
  <FooterComponent/>
  </Fade>
    </>
  );
};

export default OnlineMonitoring;
