import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about1 from "../assets/About.webp";
import about2 from '../assets/About1.webp'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const About = () => {
  return (
    <>
      <Container fluid className="text-white bg-black  pb-5">
        <Container>
          <h1 style={{fontSize:'80px'}}>
           
            <b>Our Story</b>
          </h1>
          <h6 className="pt-4 ">
            <b>
              Our journey began as citizens of water scarce Indian cities, who
              have first-hand experienced problems while procuring and consuming
              water. With a shared sense of purpose, commitment towards water
              conservation and passion to use technology as an enabler for
              radical change, Agua was born.
            </b>
          </h6>
        </Container>
      </Container>
      <Container fluid className="bg-white pt-3 pb-3">
        <Container>
          <Row className="">
            <Col lg={6} md={12} xs={12} className="pt-5 pb-5">
              <p>
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
            <Col lg={6} md={12} xs={12}>
              <img
                src={about1}
                className="img-fluid"
                style={{ height: "300px", width: "500px" }}
                alt="Your Alt Text"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-black text-white pt-5 pb-4">
        <Container>
          <p style={{fontSize:'16px',textAlign:'center'}}>
            <b>
              Our success is a result of our relentless pursuit of innovation,
              perseverance, and unwavering commitment to developing cutting-edge
              solutions in-house. We take pride in embodying the spirit of "Make
              in India" while delivering world-class solutions to our customers.
              We understand the emotional and practical value of water for our
              customers, and it drives us to constantly strive for excellence.
            </b>
          </p>
        </Container>
      </Container>
      <Container fluid className="text-black pt-5 pb-4">
        <Container>
          <Row>
            <Col lg={5} md={5} xs={12}>
          <img src={about2} className="img-fluid"style={{width:'400px',height:'400px'}} />
            </Col>
            <Col lg={7} md={7} xs={12}>
          <p>Innovation is at the heart of what we do. Everyone at Agua is a builder, driven by their desire to deconstruct the biggest problems in the water space, and create sustainable solutions on behalf of our customers. Our customer-centric approach has allowed us to gain a comprehensive understanding of the entire water landscape, and build custom solution for individual users. Our extensive research and technological expertise enable us to identify and eliminate the hidden costs associated with water management across the entire value chain. We strive to offer a diverse range of solutions that address the critical problems faced by all stakeholders in the water value chain.</p>
          <p>The limited water resources that we have today deserve to be used right. What would it take for you to take the first step?</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="text-white bg-black pt-3 pb-3">
        <Container>
          <h1 className="pt-2 pb-3 text-center"><b>Our vision</b></h1>
          <p style={{fontSize:'16px',textAlign:'center'}}>
            <b>
            We aim to create a sustainable future where our precious water resources are used efficiently and to their fullest potential.
             By leveraging technology at every stage of the water cycle, we aim to facilitate fair distribution,  efficient usage, and optimal reuse of our water resources.
              Our vision is to empower every individual, irrespective of their socio-economic status or location, with access to clean and safe water.
            </b>
          </p>
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
              <h6 style={{fontWeight:'600'}} >
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

export default About;
