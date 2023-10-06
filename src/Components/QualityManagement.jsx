import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../css/Features.css";
import image1 from "../assets/qua1.webp";
import image2 from "../assets/qua2.webp";
import image3 from "../assets/qua3.webp";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export const QualityManagement = () => {
  return (
    <>
      <Container fluid className="text-white bg-black pt-5 pb-3">
        <Container>
        <h1 className="pb-2" style={{ fontSize: "50px" }}>
         
          <b>Quality Management</b>
        </h1>
        <p>
          <b>
            Keep an eye on your health, subscribe to our water quality alerts
          </b>
        </p>
        </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6>
               
                <b>1) Building Inlets</b>
              </h6>
              <p>
               
                Residential, commercial and industrial buildings get their water
                supply from various sources - municipal supply, borewells,
                tankers. It is important to ensure that the water used is safe
                and suitable for the intended purpose. Agua’s water quality
                monitoring technology -
              </p>
              <p>
               
                ● Monitor parameters like pH, Total Dissolved Solids, Hardness
                and Free Chlorine.
              </p>
              <p>
               
                ● Deviation from prescribed norms is notified to all users in
                real-time.
              </p>
              <p>
                ● This helps the facility take corrective actions and install
                water treatment equipment wherever required.
              </p>
              Our technology prevents health issues, ensures the longevity of
              plumbing equipment and appliances, and improves the overall
              quality of life for residents.
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#">
                <img
                  src={image1}
                  style={{ width: "500px", height: "450px" }}
                  className="feature1"
                />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6>
               
                <b>2) Water Treatment Plants</b>
              </h6>
              <p>
                Effluent and Sewage treatment plants are designed to remove
                pollutants from wastewater. However, the performance of these
                plants can be impacted due to a wide range of technical and
                operational challenges. It is imperative to monitor the quality
                of treated water, to prevent environmental damage, as well as
                ensure compliance with local and state pollution regulations.
                Agua’s water quality monitoring technology -
              </p>
              <p>
               
                ● Monitor water quality parameters like Biological Oxygen
                Demand, Chemical Oxygen Demand, TSS and pH. ​
              </p>
              <p>
               
                ● The facility management is notified if treated water quality
                deviates from pollution control board norms.
              </p>
              <p>
               
                ● If the treated water is of high quality, it can be redirected
                for reuse within the facility.
              </p>
              ● Treatment process efficiency improves in the STP/ETP, when plant
              operations are linked with real-time quality analysis of the
              sludge (Dissolved Oxygen, Mixed Liquor Suspended Solids).
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#">
                <img
                  src={image2}
                  style={{ width: "500px", height: "450px" }}
                  className="feature1"
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h6>
               
                <b> 3) Industrial Processes</b>
              </h6>
              <p>
                Industrial processes such as manufacturing, power generation and
                food processing require large volumes of water. To ensure that
                production quality does not suffer, it is important to ensure
                that the input water is safe and of the highest quality. Agua’s
                water quality monitoring technology -
              </p>
              <p>
               
                ● Monitor parameters such as pH, turbidity, temperature, and
                chemical composition of the water.
              </p>
              <p>
               
                ● This is done across different stages of the manufacturing
                process, as water quality required might differ at each stage.
              </p>
              <p>
               
                ● Any deviations from prescribed norms are immediately notified
                to the facility manager to take corrective action.
              </p>
              Proper water quality monitoring in industrial processes can help
              prevent damage to equipment, help predict when equipment
              maintenance is required, and ensure compliance with
              production/process quality certifications.
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#">
                <img
                  src={image3}
                  style={{ width: "500px", height: "450px" }}
                  className="feature1"
                />
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

            <Col lg={4} md={5} xs={12 }>
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

export default QualityManagement;
