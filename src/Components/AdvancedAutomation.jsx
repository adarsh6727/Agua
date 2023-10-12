import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import image1 from '../assets/adv1.webp'
import image2 from '../assets/adv2.webp'
import image3 from '../assets/adv3.webp'
import FooterComponent from '../Shared/FooterComponent'
import Fade from 'react-reveal/Fade';


export const AdavancedAutomation = () => {
  return (
    
    <>
    <Fade In>
          <Container fluid className="text-white bg-black py-5">
      <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
          
            <b>Advanced Automation</b>
          </h1>
          <p style={{fontSize:"22px"}}>
            <b>Efficient distribution of water resources, with reduced operational costs

</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
             <h6 style={{fontSize:'20px'}}> <b>
              1) City Wide Water Distribution</b></h6>
              <p>
              AGUA's smart water distribution technology monitors and controls the water supply from source to consumer, ensuring a steady stream of fresh, clean water for every household. The system works using sensors and controllers placed at different points in the distribution network, such as at water sources, storage tanks, distribution nodes, and household inlets. Our systems help make the water network efficient and sustainable by -

               <li> Monitor water levels in storage reservoirs. </li>
              
                <li>  Automating water pumps and supply valves, according to schedule, or based on real-time demand from storage reservoirs.  </li>

             <li>   Predicting future water demand and notifying the water utility to arrange and allocate water accordingly.</li>
                Tracking water pressure at different points in the distribution network to generate alerts in case of any theft, leakage or unmetered connections.</p>
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1}  className="feature1" />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
             <h6 style={{fontSize:'20px'}}> <b>


2) Quality Based Water Distribution</b></h6>
              <p>
              Agua’s level monitoring system utilizes sensors to monitor the water levels in water and wastewater tanks. Some use cases for this include -

</p>

               <p>  Agua’s quality-based water distribution technology is used to monitor the quality of treated water, and redirect the water for reuse if the quality is good for the intended purpose. This system can be utilised in Sewage and Effluent treatment plants. It increases the efficiency of water reuse and reduces the stress on freshwater sources by -

​</p>
              
                <li> Monitoring key water quality parameters like pH, Total Suspended Solids, Biological Oxygen Demand, Chemical Oxygen Demand.  </li>

             <li>   Mapping real-time water quality data, with quality requirements in applications like gardening, flushing, cooling towers etc.</li>
             <li>    Automatically pumping treated water to intended application if water quality is sufficient. If not, the supply is automatically switched from treated to freshwater sources.</li>
           <li> Monitor change in water levels as storage tanks receive freshwater, to prevent tank overflows.</li>
            </Col>
            <Col lg={6} md={6} xs={12} className='d-grid gap-1'>
              <a href="#" >
                <img src={image2} style={{width:'450px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
             <h6 style={{fontSize:'20px'}}> <b>3) Automated Pump Control</b></h6>
              <p>
              Agua’s water level controller is a smart system that automates the operation of water pumps, based on real-time supply and demand. The water pump will only run when there is an available water supply and will stop pumping when the target storage tank is full. Our system eliminates tank overflows, as well as motor dry runs by -</p>

               <li>  Monitoring tank levels in target tanks and water flow in supply pipelines.</li>
              
                <li>     Automatically turning the water pump on, as soon as water storage dips beyond a pre-set level, and turning it off, when the tank is full or when water supply runs out.  </li>

             <li>    Scheduling the water pump to run at pre-set times. This is useful in industrial applications, as well as gardening systems </li>
                
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
  )
}

export default AdavancedAutomation
