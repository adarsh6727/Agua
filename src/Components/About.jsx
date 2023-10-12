import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "../assets/About.webp";
import about2 from '../assets/About1.webp'
import FooterComponent from "../Shared/FooterComponent";
import Fade from 'react-reveal/Fade';


export const About = () => {
  return (
    <>
  <Fade In>
      <Container fluid className="text-white bg-black py-3">
        <Container>
          <h1 style={{fontSize:'80px'}}>
           
            <b>Our Story</b>
          </h1>
          <p className="py-3"style={{fontSize:"20px",fontWeight:'500'}}>
            
              Our journey began as citizens of water scarce Indian cities, who
              have first-hand experienced problems while procuring and consuming
              water. With a shared sense of purpose, commitment towards water
              conservation and passion to use technology as an enabler for
              radical change, Agua was born.
          
          </p>
        </Container>
      </Container>
      <Container fluid className="bg-white py-3">
        <Container>
          <Row className="align-items-center">
          
            <Col lg={6} md={12} xs={12} className=" d-flex align-items-center pt-4 ">
              <p style={{fontSize:'19px'}}>
                We started off with a humble product - a wired motor controller
                which allowed water pumps to operate automatically whenever
                there was a shortage of water in the storage tanks and supply
                available in the pipeline. This modest solution solved a small
                but significant problem of eliminating tank overflows, which
                typically wasted 15% of the water supplied. That was a moment of
                hope and inspiration for us that fueled our desire to make a
                bigger impact.
              </p>
            </Col>
     
            <Col lg={6} md={12} xs={12} className="text-center">
              <img
                src={about1}
                className="img-fluid w-auto"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-black text-white py-5">
        <Container>
          <p   style={{fontSize:'18px',textAlign:'center',fontWeight:'600'}}>
           
              Our success is a result of our relentless pursuit of innovation,
              perseverance, and unwavering commitment to developing cutting-edge
              solutions in-house. We take pride in embodying the spirit of "Make
              in India" while delivering world-class solutions to our customers.
              We understand the emotional and practical value of water for our
              customers, and it drives us to constantly strive for excellence.
         
          </p>
        </Container>
      </Container>
      <Container fluid className="text-black py-5 ">
        <Container>
          <Row className=" align-items-center">
            <Col lg={5} md={5} xs={12}>
          <img src={about2} className="img-fluid"style={{height:'450px'}} />
            </Col>
            <Col lg={6} md={7} xs={12}  style={{fontSize:'18px'}}>
           <p>Innovation is at the heart of what we do. Everyone at Agua is a builder, driven by their desire to deconstruct the biggest problems in the water space, and create sustainable solutions on behalf of our customers. Our customer-centric approach has allowed us to gain a comprehensive understanding of the entire water landscape, and build custom solution for individual users. Our extensive research and technological expertise enable us to identify and eliminate the hidden costs associated with water management across the entire value chain. We strive to offer a diverse range of solutions that address the critical problems faced by all stakeholders in the water value chain.</p>          
        <p> The limited water resources that we have today deserve to be used right. What would it take for you to take the first step?</p>  
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="text-white bg-black py-5 ">
        <Container>
          <h1 className="pt-2 pb-3 text-center"><b>Our vision</b></h1>
          <p style={{fontSize:'20px',textAlign:'center'}}>
        
            We aim to create a sustainable future where our precious water resources are used efficiently and to their fullest potential.
             By leveraging technology at every stage of the water cycle, we aim to facilitate fair distribution,  efficient usage, and optimal reuse of our water resources.
              Our vision is to empower every individual, irrespective of their socio-economic status or location, with access to clean and safe water.
        
          </p>
        </Container>

      </Container>
     
    <FooterComponent/>
    </Fade>
    </>
  );
};

export default About;
