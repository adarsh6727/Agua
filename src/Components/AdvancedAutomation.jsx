import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import image1 from '../assets/adv1.webp'
import image2 from '../assets/adv2.webp'
import image3 from '../assets/adv3.webp'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const AdavancedAutomation = () => {
  return (
    <div>
          <Container fluid className="text-white bg-black pt-5 pb-3">
      <Container>
          <h1 className="pb-2" style={{ fontSize: "50px" }}>
            {" "}
            <b>Advanced Automation</b>
          </h1>
          <p>
            <b>Efficient distribution of water resources, with reduced operational costs

</b>
          </p>
          </Container>
      </Container>
      <Container fluid className="text-black bg-white pt-5 pb-5">
        <Container>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>
              1) City Wide Water Distribution</b></h6>
              <p>
              AGUA's smart water distribution technology monitors and controls the water supply from source to consumer, ensuring a steady stream of fresh, clean water for every household. The system works using sensors and controllers placed at different points in the distribution network, such as at water sources, storage tanks, distribution nodes, and household inlets. Our systems help make the water network efficient and sustainable by -</p>

               <p>  ●  Monitor water levels in storage reservoirs. </p>
              
                <p>    ● Automating water pumps and supply valves, according to schedule, or based on real-time demand from storage reservoirs.  </p>

             <p>   ●Predicting future water demand and notifying the water utility to arrange and allocate water accordingly.</p>
                ● Tracking water pressure at different points in the distribution network to generate alerts in case of any theft, leakage or unmetered connections.
           
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image1} style={{width:'450px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row className="pt-2 pb-5">
            <Col lg={6} md={6} xs={12}>
              <h6> <b>


2) Quality Based Water Distribution</b></h6>
              <p>
              Agua’s level monitoring system utilizes sensors to monitor the water levels in water and wastewater tanks. Some use cases for this include -

</p>

               <p>  Agua’s quality-based water distribution technology is used to monitor the quality of treated water, and redirect the water for reuse if the quality is good for the intended purpose. This system can be utilised in Sewage and Effluent treatment plants. It increases the efficiency of water reuse and reduces the stress on freshwater sources by -

​</p>
              
                <p>● Monitoring key water quality parameters like pH, Total Suspended Solids, Biological Oxygen Demand, Chemical Oxygen Demand.  </p>

             <p>   ● Mapping real-time water quality data, with quality requirements in applications like gardening, flushing, cooling towers etc.</p>
             <p>   ● Automatically pumping treated water to intended application if water quality is sufficient. If not, the supply is automatically switched from treated to freshwater sources.</p>
           <p>● Monitor change in water levels as storage tanks receive freshwater, to prevent tank overflows.</p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image2} style={{width:'450px',height:'450px'}} className="feature1" />
              </a>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h6> <b>3) Automated Pump Control</b></h6>
              <p>
              Agua’s water level controller is a smart system that automates the operation of water pumps, based on real-time supply and demand. The water pump will only run when there is an available water supply and will stop pumping when the target storage tank is full. Our system eliminates tank overflows, as well as motor dry runs by -</p>

               <p>  ● Monitoring tank levels in target tanks and water flow in supply pipelines.</p>
              
                <p>    ● Automatically turning the water pump on, as soon as water storage dips beyond a pre-set level, and turning it off, when the tank is full or when water supply runs out.  </p>

             <p>   ● Scheduling the water pump to run at pre-set times. This is useful in industrial applications, as well as gardening systems </p>
                
            </Col>
            <Col lg={6} md={6} xs={12}>
              <a href="#" >
                <img src={image3} style={{width:'450px',height:'450px'}} className="feature1" />
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
    </div>
  )
}

export default AdavancedAutomation
