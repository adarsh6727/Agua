import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "../css/Features.css";
import image1 from "../assets/qua1.webp";
import image2 from "../assets/qua2.webp";
import image3 from "../assets/qua3.webp";
import FooterComponent from "../Shared/FooterComponent";
import Fade from "react-reveal/Fade"

export const QualityManagement = () => {
  return (
    <>
    <Fade In>
      <Container fluid className="text-white bg-black py-5">
        <Container>
        <h1 className="pb-2" style={{ fontSize: "50px" }}>
         
          <b>Quality Management</b>
        </h1>
        <p style={{fontSize:"22px"}}>
          <b>
            Keep an eye on your health, subscribe to our water quality alerts
          </b>
        </p>
        </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}>
               
                <b>1) Building Inlets</b>
              </h6>
              <p>
               
                Residential, commercial and industrial buildings get their water
                supply from various sources - municipal supply, borewells,
                tankers. It is important to ensure that the water used is safe
                and suitable for the intended purpose. Agua’s water quality
                monitoring technology -
              </p>
              <li>
               
                 Monitor parameters like pH, Total Dissolved Solids, Hardness
                and Free Chlorine.
              </li>
              <li>
               
                 Deviation from prescribed norms is notified to all users in
                real-time.
              </li>
              <li>
                 This helps the facility take corrective actions and install
                water treatment equipment wherever required.
              </li>
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
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}>
               
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
              <li>
               
                 Monitor water quality parameters like Biological Oxygen
                Demand, Chemical Oxygen Demand, TSS and pH. ​
              </li>
              <li>
               
                 The facility management is notified if treated water quality
                deviates from pollution control board norms.
              </li>
              <li>
               
                 If the treated water is of high quality, it can be redirected
                for reuse within the facility.
              </li>
               Treatment process efficiency improves in the STP/ETP, when plant
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
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}>
               
                <b> 3) Industrial Processes</b>
              </h6>
              <p>
                Industrial processes such as manufacturing, power generation and
                food processing require large volumes of water. To ensure that
                production quality does not suffer, it is important to ensure
                that the input water is safe and of the highest quality. Agua’s
                water quality monitoring technology -
              </p>
              <li>
               
                 Monitor parameters such as pH, turbidity, temperature, and
                chemical composition of the water.
              </li>
              <li>
               
                 This is done across different stages of the manufacturing
                process, as water quality required might differ at each stage.
              </li>
              <li>
               
                 Any deviations from prescribed norms are immediately notified
                to the facility manager to take corrective action.
              </li>
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
     <FooterComponent/>
     </Fade>
    </>
  );
};

export default QualityManagement;
