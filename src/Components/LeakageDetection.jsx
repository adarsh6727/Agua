import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import '../css/Features.css'
import image1 from '../assets/leak1.webp'
import image2 from '../assets/leak2.webp'
import image3 from '../assets/leak3.webp'
import FooterComponent from '../Shared/FooterComponent'
import Fade from "react-reveal/Fade"


 export const LeakageDetection = () => {
  return (
   <>
   <Fade In>
      <Container fluid className="text-white bg-black py-5">
       <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
         
            <b>
            Leakage Detection
           </b>
          </h1>
          <p style={{fontSize:"22px"}}>
            <b>We protect your infra, while reducing your water and energy bills

</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>
             
1) Leakage In Building Pipelines</b></h6>
              <p> Agua’s leakage detection technology for commercial, industrial and residential buildings, uses AI algorithms and sensors installed throughout the building’s plumbing system, to detect and locate leaks in real-time. Our system makes leak detection efficient and convenient -</p>

               <li> The sensors constantly monitor for changes in water flow and pressure. </li>
              
                <li>   AI algorithms are used to create user profiles for different sections of the pipeline, based on historical usage patterns.  </li>

             <li>  Deviations are monitored between real-time sensor data, and user profiles, to detect and pinpoint leaks in the pipeline network.</li>
               Once a leak is detected, the system would automatically shut off the water supply to that section, preventing further damage and reducing the cost of repairs.
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1} style={{width:'500px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>2) Seepage Detection In Buildings</b></h6>
              <p>
              Agua’s seepage detection system monitors water leakages in a building’s water supply. The leaked water seeps into the building’s infrastructure, causes dampness, damages the building’s stability, and hampers the health of tenants. Our system detects new and existing seepage in real-time 
</p>

               <li> Sensors are placed in rooms which are prone to water leaks - washrooms, laundry rooms, kitchens etc.
​</li>
              
                <li>Sensors are able pinpoint the source of seepage in the room’s floor, by checking electrical conductivity of the floor at various points.</li>

             <li>   Alerts are sent out, as soon as any new source of leakage is detected, so that proactive maintenance works can be carried out.</li>
             
            </Col>
            <Col lg={6} md={6} xs={12} > 
              <a href="#" >
                <img src={image2} style={{width:'500px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <h6 style={{fontSize:'20px'}}> <b>3) Leakage In City Level Distribution</b></h6>
              <p>
              Agua’s leakage detection system helps capture Non-revenue water losses for the entire city. This helps capture losses due to leakages, theft and unmetered connections. Our system utilised advanced AI algorithms and real-time data to pinpoint sources of leaks -
              </p>

               <li> Pressure and water flow data is monitored at all supply nodes, distribution nodes and building inlets.</li>
              
                <li>   Theoretical hydraulics model is created using data about pipeline, topography, network structure, as well as instruments installed on the pipeline.</li>

             <li>   This is used to capture the theoretical pressure loss that should happen between the source and destination nodes.</li>
             The system calculates Non-Revenue Water Loss by comparing the real-time pressure data to the theoretical pressure loss calculated in the hydraulics model.
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image3} style={{width:'500px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
        </Container>
      </Container>   
     <FooterComponent/>
     </Fade>
   </>
  )
}

export default LeakageDetection
