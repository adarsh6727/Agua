import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';

 export const ContactUs=()=>{
  
  return (
    <>
<Container fluid className='pt-5 pb-4 text-white bg-black'>
  <Container>
<h1 className='pb-2'style={{fontSize:'80px'}}><b>How Can We Help You ?</b></h1>
<p><b>Feel Free To Reach Out To Us</b>
</p>
</Container>
</Container>
<Container fluid className='bg-white text-black pt-5 pb-5'>
<Container>
<p style={{color:'#1D67CD',fontSize:'20px'}}>Send us a message <br/>
and we’ll get back to you shortly.</p>
<Form  style={{color:'#2e74d7',fontSize:'15px' }}>
      <Row className="mb-3">
        <Form.Group as={Col} lg={3} md={4} xs={5} controlId="formGridEmail">
          <Form.Label >First Name *</Form.Label>
          <Form.Control type="text" placeholder="First Name" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2'/>
        </Form.Group>

        <Form.Group as={Col} lg={3} md={4} xs={5} controlId="formGridPassword">
          <Form.Label>Last Name *</Form.Label>
          <Form.Control type="text" placeholder="Last Name" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2'/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} lg={2} md={3} xs={3} controlId="formGridEmail">
        <Form.Label>Code*</Form.Label>
          <Form.Select defaultValue="IN" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2' >
            <option>IN...</option>
            <option>A...</option>
            <option>B...</option>
            <option>C...</option>
            <option>D...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} lg={4} md={5} xs={7} controlId="formGridPassword">
          <Form.Label>Phone*</Form.Label>
          <Form.Control type="text" placeholder="Phone" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2'/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email*</Form.Label>
        <Form.Control placeholder="e.g.,email@example.com"  style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Company</Form.Label>
        <Form.Control placeholder="Company" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-2 pb-2'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Subject</Form.Label>
        <Form.Control placeholder="e.g.,Support" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7'}} className='pt-3 pb-3'  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Your Message</Form.Label>
        <Form.Control placeholder="Enter text here" style={{backgroundColor: '#E5EBFA',fontSize:'13px', color:'#6c86c7',paddingBottom:'70px' }} className='pt-3'  />
      </Form.Group>
    
     
  
     

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>

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

export default ContactUs
