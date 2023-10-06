import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import '../css/Features.css'
import image1 from '../assets/leak1.webp'
import image2 from '../assets/leak2.webp'
import image3 from '../assets/leak3.webp'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


 export const LeakageDetection = () => {
  return (
   <>
      <Container fluid className="text-white bg-black pt-5 pb-3">
       <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
            {" "}
            <b>
            Leakage Detection
           </b>
          </h1>
          <p>
            <b>We protect your infra, while reducing your water and energy bills

</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>
             
1) Leakage In Building Pipelines</b></h6>
              <p> Agua’s leakage detection technology for commercial, industrial and residential buildings, uses AI algorithms and sensors installed throughout the building’s plumbing system, to detect and locate leaks in real-time. Our system makes leak detection efficient and convenient -</p>

               <p>  ● The sensors constantly monitor for changes in water flow and pressure. </p>
              
                <p>    ●AI algorithms are used to create user profiles for different sections of the pipeline, based on historical usage patterns.  </p>

             <p>   ●Deviations are monitored between real-time sensor data, and user profiles, to detect and pinpoint leaks in the pipeline network.</p>
                ● Once a leak is detected, the system would automatically shut off the water supply to that section, preventing further damage and reducing the cost of repairs.
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1} style={{width:'500px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>2) Seepage Detection In Buildings</b></h6>
              <p>
              Agua’s seepage detection system monitors water leakages in a building’s water supply. The leaked water seeps into the building’s infrastructure, causes dampness, damages the building’s stability, and hampers the health of tenants. Our system detects new and existing seepage in real-time 
</p>

               <p>  ● Sensors are placed in rooms which are prone to water leaks - washrooms, laundry rooms, kitchens etc.
​</p>
              
                <p>●Sensors are able pinpoint the source of seepage in the room’s floor, by checking electrical conductivity of the floor at various points.</p>

             <p>   ●  Alerts are sent out, as soon as any new source of leakage is detected, so that proactive maintenance works can be carried out.</p>
             
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image2} style={{width:'500px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h6> <b>3) Leakage In City Level Distribution</b></h6>
              <p>
              Agua’s leakage detection system helps capture Non-revenue water losses for the entire city. This helps capture losses due to leakages, theft and unmetered connections. Our system utilised advanced AI algorithms and real-time data to pinpoint sources of leaks -
              </p>

               <p>  ●Pressure and water flow data is monitored at all supply nodes, distribution nodes and building inlets.</p>
              
                <p>    ● Theoretical hydraulics model is created using data about pipeline, topography, network structure, as well as instruments installed on the pipeline.</p>

             <p>    ● This is used to capture the theoretical pressure loss that should happen between the source and destination nodes.</p>
              ● The system calculates Non-Revenue Water Loss by comparing the real-time pressure data to the theoretical pressure loss calculated in the hydraulics model.
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image3} style={{width:'500px',height:'450px'}} className="feature1" />
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
  )
}

export default LeakageDetection
