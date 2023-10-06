import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Midimages from "../assets/mid-image.webp";
import Midimages1 from "../assets/mid image2.webp";
import Image1 from "../assets/image_1.webp";
import Image2 from "../assets/image_2.webp";
import Image3 from "../assets/image_3.webp";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Pic1 from "../assets/pic1.webp";
import Pic2 from "../assets/pic2.webp";
import Pic3 from "../assets/pic3.webp";
import Pic5 from "../assets/pic5.webp";
import Pic6 from "../assets/pic6.webp";
import cardimage from "../assets/Card imsges.png";
import cardimage1 from "../assets/Card images2.png";
import Pic4 from "../assets/pic4.webp";
import Pic7 from "../assets/pic7.webp";
import Pic8 from "../assets/pic8.webp";
import Pic9 from "../assets/pic9.webp";
import Mid1 from "../assets/mid 1.webp";
import Im1 from "../assets/Im1.webp";
import Im2 from "../assets/im2.webp";
import Im3 from "../assets/im3.webp";
import Im4 from "../assets/im4.webp";
import '../css/Home.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';




export const Home = () => {
  return (
    <>
      <Container fluid className="bg-black pb-4 pt-3 ">
        <Container>
          <Row>
            <Col lg={5} md={6} xs={12} className="pb-3">
              <h1 className="text-white">
               <b  style={{ fontWeight:'900',fontSize:'40px'}}>“Let’s make your</b> 
                <b style={{ color: "#87CEEB",fontWeight:'900',fontSize:'40px' }}> water visible</b> <b style={{fontWeight:'900',fontSize:'40px'}}>  and </b>
                <b style={{ color: "#90EE90",fontWeight:'900',fontSize:'40px' }}> Cost invisible”</b>
              </h1>
              <p className="text-white" style={{ fontSize: "small" }}>
                <b>
              
                  Imagine a Smart device that gives you insights about your
                  entire water network, increases the lifespan of your water
                  infrastructure, and saves you money on water. Whether you are
                  a large water utility, industry, or housing complex, we have a
                  solution for everyone!
                </b>
              </p>
              <p className="text-white" style={{ fontSize: "small" }}>
                <b>1300+ Clients are making money by using water right </b>
              </p>
              <Button variant="light" size="sm" href="https://calendly.com/partnerships-agua/30min">
                <b>Book a demo </b>
              </Button>
            </Col>
            <Col lg={7} md={6} xs={12}>
            
              <div>
            <video width="100%" height="100%" controls    >
                <source src="https://video.wixstatic.com/video/dc1522_8a73b32e7e7f4072a0efe5d5a2afece3/480p/mp4/file.mp4" type="video/mp4" className="videos"  />
            </video>
        </div>
                
              
            </Col>
          </Row>
          </Container>
        </Container>
     
     

      <Container fluid   style={{backgroundColor: "#F4FCFF"}} >
        <Container>
           <Carousel
            autoPlay={true}
            infiniteLoop={true}
            interval={2000}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            transitionTime={1000} 
            transitionEffect="fade"
            animation= "fade 1.5s ease-in-out"
       
         >
            <div>
              <img src={Pic1} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic2} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic3} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic5} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic6} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic4} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic7} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic8} style={{ width: "150px" }} />
            </div>
            <div>
              <img src={Pic9} style={{ width: "150px" }} />
            </div>  
          </Carousel> 
         
          
        
          
        </Container>
      </Container>
      <Container fluid className=" pt-5 pb-5"> 
        <Container>
          <div >
            <h1 className=" text-center pb-4">
              <b>Connecting the Physical and Digital worlds </b>
            </h1>
          </div>
          <Row>
            <Col lg={5} md={6} xs={10}>
              <img
                src={Midimages1}
                style={{ maxWidth: "400px", height: "350px" }} 
                className="image1"
              />
            </Col>

            <Col lg={7} md={6} xs={10} >
              <img
                src={Midimages} className="image1"
                style={{width:'570px', height: "350px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid style={{ backgroundColor: "#F4FCFF" }} className="pt-5 my-3" >
        <Container >
  
            <h1  style={{fontWeight:'900' }}  className="text-black text-center  ">
             Make Your Water Infra Smarter
            </h1>
  

          {/* Cards Section  */}
          <Row
            className="text-black pb-5 pt-4 align-items-center"
           
          >
            <Col lg={3} md={3} xs={6} className="my-3  ">
              <Card
                style={{ border: "3px", maxWidth: "190px", height: "430px" }}
                className="card-hover">
                <Card.Img
                  variant="top"
                  src={Image1}
                  className="img-fluid "
                  style={{ width: "160px", height: "180px"}}
                  
              
                />
                <Card.Body>
                  <Card.Title>
                    <b className="fs-6">Online Monitoring</b>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Monitor your entire water network, just using your
                    smartphone
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ position: "absolute", bottom: "0px" }}
                    className="mb-2 mt-2"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={3} xs={6} className="my-3  ">
              <Card
                style={{ border: "3px", maxWidth: "190px", height: "430px" }}
                className="card-hover"
              >
                <Card.Img
                  variant="top"
                  src={Image2}
                  className="img-fluid"
                  style={{ width: "160px", height: "180px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <b className="fs-6">Advanced Automation</b>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Efficient distribution of water resource with reduced
                    operational cost
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ position: "absolute", bottom: "0px" }}
                    className="mb-2 mt-2"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={3} xs={6} className="my-3  ">
              <Card
                style={{ border: "3px", maxWidth: "190px", height: "430px" }}
                className="card-hover"
              >
                <Card.Img
                  variant="top"
                  src={Image3}
                  style={{ width: "160px", height: "180px" }}
                  className="img-fluid"
                />
                <Card.Body>
                  <Card.Title>
                    <b className="fs-6">Leakage Detection</b>
                  </Card.Title>
                  <Card.Text className="my-3">
                    We protect your infrastructure while reducing your water and
                    energy bills
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ position: "absolute", bottom: "0px" }}
                    className="mb-2 mt-2"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={3} xs={6} className="my-3  ">
              <Card
                style={{ border: "3px", maxWidth: "190px", height: "430px" }}
                className="card-hover"
              >
                <Card.Img
                  variant="top"
                  src={Midimages1}
                  style={{ width: "160px", height: "180px" }}
                />
                <Card.Body>
                  <Card.Title>
                    <b className="fs-6">Quality Management</b>
                  </Card.Title>
                  <Card.Text className="my-3">
                    Keep an eye on your health, subscribe to our water quality
                    alerts
                  </Card.Text>
                  <Button
                    variant="primary"
                    style={{ position: "absolute", bottom: "0px" }}
                    className="mb-2 mt-2 "
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-black pt-5 pb-5"style={{fontWeight:'800'}}>
        <Container>
          <h1 className="text-center text-white pt-3 pb-3" style={{fontWeight:'700',fontSize:'40px'}}>
            Impact that we created
          </h1>
          <Row>
            <Col lg={4} md={4} xs={12} className="text-white text-center">
              <h2 style={{fontWeight:'800',fontSize:'50px'}}> 35%</h2>
              <p style={{fontWeight:'800',fontSize:'18px'}}>Water and electricity saved</p>
            </Col>
            <Col lg={4} md={4} xs={12} className="text-white text-center">
              <h2 style={{fontWeight:'800',fontSize:'50px'}}>
                3100000 <span style={{ fontSize: "15px",fontWeight:'800' }}> Litres</span>
              </h2>
              <p style={{fontWeight:'800',fontSize:'18px'}}>Water saved</p>
            </Col>
            <Col lg={4} md={4} xs={12} className="text-white text-center"style={{fontWeight:'800'}}>
              <h2 style={{fontWeight:'800',fontSize:'50px'}}>
                1023840 <span style={{ fontSize: "15px" }}>Kg</span>
              </h2>
              <p style={{fontWeight:'800',fontSize:'18px'}}>Carbon emission avoided</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="my-4">
        <Container>
          <div className=" text-center pt-3" style={{ color: "#000000" }}>
            <h3 style={{fontWeight:'700',fontSize:'40px'}}>
              Our customer stories
            </h3>
            <p style={{ fontSize: "small" }}>
              We are trusted among industry leaders
            </p>
          </div>
        </Container>
      </Container>
    <Container fluid className="pt-5 pb-5">
        <Row className="justify-content-center align-items-center">
          <Col lg={8} md={11} xs={11} className="  ">
          <Card 
           style={{width:'100%', height: "100%" }}
           className="shadow-lg  pt-5 border-5  rounded-1  cards ">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={3000}
              showIndicators={false}
              showStatus={false}
              showArrows={false}
              transitionTime={1000}
              transitionEffect='fade'
              animation="fade 1.5s ease-in-out"
>
            
              <div >
                <Row>
                  <Col lg={3} md={2} xs={2}>
                    <a href="">
                      <img
                        src={cardimage}
                        className=""
                        style={{ width: "100px" }}
                      />
                    </a>
                  </Col>
                  <Col lg={8} md={8} xs={12} className=" ">
                    <p style={{ fontsize: "12px" }}>
                      Ashirwad by Ali Axis R&T Centre is associated with Agua
                      Wireless for quite some now and we are working together on
                      some cutting-edge technology projects. Rohit and Kanish
                      are really great and thorough professionals. We look
                      forward to working with Agua on more projects creating
                      meaningful solutions for our customers.
                    </p>
                    <span className="d-flex justify-content-end  pb-3">
                      <b>
                        Lokesh pancholi <br className="ms-auto  " /> Design
                        manager
                      </b>
                    </span>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col lg={3} md={2} xs={2}>
                    <a href="">
                      <img
                        src={cardimage1}
                        className=""
                        style={{ width: "100px" }}
                      />
                    </a>
                  </Col>
                  <Col lg={8} md={8} xs={12} className=" ">
                    <p style={{ fontsize: "12px" }}>
                      We deployed Agua's flow sensor in a residential apartment
                      three years back. They have helped us with accurate
                      billing of every house. These systems have not caused any
                      malfunction till date.
                    </p>
                    <span className="d-flex justify-content-end ">
                      <b>
                        Dharma Krishnappa
                        <br /> Director
                      </b>
                    </span>
                  </Col>
                </Row>
              </div>
              <div>
                <Col lg={8} md={8} xs={12} className="">
                  <p style={{ fontsize: "12px" }} className="ms-5 ">
                    The water machine alarm system is working absolutely fine
                    and it's really working well. It was installed in 2019 and
                    since then we have not faced any issues in terms of
                    functionality.
                  </p>
                  <span className="d-flex justify-content-end">
                    <b>
                      Mayank <br /> Manager <br /> Drugvilla Pharmacy
                    </b>
                  </span>
                </Col>
              </div>
            
            </Carousel>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="bg-black text-white pt-5">
        <Container>
          <h1 className="text-center pt-4"style={{fontWeight:'700'}}>Technology Integrations</h1>

          <Row>
           
            <Col
              lg={6}
              md={8}
              xs={12}
              className="my-5 "
              style={{ fontSize: "18px",fontWeight:'500' }}
            >
              <b>AGUA ONE</b>, our IoT gateway is enabling sustainable water
              management across the water value chain. This state-of-the-art
              solution offers numerous benefits to our customers. Key features
              which make our gateway stand out:
              <Container>
              <p className="pt-3 ms-2 "  style={{ fontSize: "16px" }} >
                * Seamless communication over advanced wireless protocols, like
                LoRa, 4G, GSM, WiFi and Bluetooth.
              </p>
              <p className="pt-1 ms-2 "  style={{ fontSize: "16px" }}>
                * Power options like AC power, solar power and battery backup,
                ensure uninterrupted operation.
              </p>
              <p className="pt-1 ms-2" style={{ fontSize: "16px" }}>
                * 24/7 monitoring, Geotagging, Alert system and accurate data
                analytics, help you make data-driven decisions
              </p>
              </Container>

            <p  style={{ fontSize: "16px" }}> With our reliable and accurate solutions, you can rest assured
              that you are choosing a solution that makes your facility
              future-ready.</p> 
            </Col>
           
            <Col lg={6} md={4} xs={12} className="my-4">
              <a href="" alt="">
                <img
                  src={Mid1}
                  className="img-fluid "
                  style={{ width: "393px", height: "438px" }}
                />
              </a>
            </Col>
          </Row>
          <Row className=" pt-5 pb-5 align-items-center ">
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im1}
                className="img-fluid"
                style={{ width: "180px", height: "80px" }}
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im2}
                className="img-fluid"
                style={{ width: "106px", height: "116px" }}
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im3}
                className="img-fluid"
                style={{ width: "118px", height: "118px" }}
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im4}
                className="img-fluid"
                style={{ width: "179px", height: "79px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
          <MDBCarousel  fade>
      <MDBCarouselItem
   
        style={{
          width: "100%",
          height: "350px",
        }}
        itemId={1}
        className="img-fluid"
       src='https://static.wixstatic.com/media/dc1522_77acc46c588e4dc4944bbc690c527a15~mv2.png/v1/fill/w_1003,h_306,al_c,lg_1,q_85,enc_auto/dc1522_77acc46c588e4dc4944bbc690c527a15~mv2.png' 
        alt='...'
      >
        
        <h1 className="text-center pb-4 " >
          
          <b style={{fontWeight:"600"}}>Take your first step towards sustainable water future</b>
        </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-center pb-5">
              <Button
                variant="light"
                className="me-md-2 mb-2 fs-5 "
                style={{ width: "200px"}}
                href="https://calendly.com/partnerships-agua/30min"
              >
                <b className="button">Book a Demo</b>
              </Button>
              <Button
                variant="light"
                className="ms-md-2 mb-2 fs-5 "
                style={{ width: "200px" }}
                href="https://www.aguaws.com/product-catalogue"
                
              >
                <b className=" button">Product Catalog</b>
              </Button>
            </div>
         
      </MDBCarouselItem>

      <MDBCarouselItem
       className="img-fluid carousel"        style={{
          width: "100%",
          height: "350px",
        }}
        itemId={2}
        src='https://static.wixstatic.com/media/dc1522_f1437bd23d914bf0876596e33a5d0f76~mv2.png/v1/fill/w_1003,h_306,al_c,lg_1,q_85,enc_auto/dc1522_f1437bd23d914bf0876596e33a5d0f76~mv2.png'
        alt='...'
      >
         <h1 className="text-center pb-4">
          
          <b style={{fontWeight:"600"}}>Take your first step towards sustainable water future</b>
        </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-center pb-5">
              <Button
                variant="light"
                className="me-md-2 mb-2 fs-5 button"
                style={{ width: "200px" }}
                href="https://calendly.com/partnerships-agua/30min"
              >
                <b>Book a Demo</b>
              </Button>
              <Button
                variant="light"
                className="ms-md-2 mb-2 fs-5  button"
                style={{ width: "200px" }}
                href="https://www.aguaws.com/product-catalogue"
              >
                <b>Product Catalog</b>
              </Button>
            </div>
       
      </MDBCarouselItem>

      <MDBCarouselItem
        className="img-fluid carousel"    
          style={{
           width: "100%",
           height: "350px",
         }}
        itemId={3}
        src='https://static.wixstatic.com/media/dc1522_649cae8446624806b7a7a1155eaf3311~mv2.png/v1/fill/w_1003,h_306,al_c,lg_1,q_85,enc_auto/dc1522_649cae8446624806b7a7a1155eaf3311~mv2.png'
        alt='...'
      >
        <h1 className="text-center pb-4">
          
          <b style={{fontWeight:"600"}}>Take your first step towards sustainable water future</b>
        </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-center pb-5">
              <Button
                variant="light"
                className="me-md-2 mb-2 fs-5 button"
                style={{ width: "200px" }}
                href="https://calendly.com/partnerships-agua/30min"
              >
                <b>Book a Demo</b>
              </Button>
              <Button
                variant="light"
                className="ms-md-2 mb-2 fs-5  button"
                style={{ width: "200px" }}
                href="https://www.aguaws.com/product-catalogue"
              >
                <b>Product Catalog</b>
              </Button>
            </div>
      </MDBCarouselItem>
      <MDBCarouselItem
       className="img-fluid carousel "        style={{
          width: "100%",
          height: "350px",
        }}
        itemId={4}
        src='https://static.wixstatic.com/media/dc1522_a8f2b375cbff4405b82a3ae72231e296~mv2.png/v1/fill/w_1003,h_306,al_c,lg_1,q_85,enc_auto/dc1522_a8f2b375cbff4405b82a3ae72231e296~mv2.png'
        alt='...'
      >
        <h1 className="text-center pb-4">
          
          <b style={{fontWeight:"600"}}>Take your first step towards sustainable water future</b>
        </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-center pb-5">
              <Button
                variant="light"
                className="me-md-2 mb-2 fs-5 button"
                style={{ width: "200px" }}
                href="https://calendly.com/partnerships-agua/30min"
              >
                <b>Book a Demo</b>
              </Button>
              <Button
                variant="light"
                className="ms-md-2 mb-2 fs-5  button"
                style={{ width: "200px" }}
                href="https://www.aguaws.com/product-catalogue"
              >
                <b>Product Catalog</b>
              </Button>
            </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="img-fluid carousel"         
        style={{
           width: "100%",
           height: "350px",
           
         }}
        itemId={5}
        src='https://static.wixstatic.com/media/dc1522_ba7cfbe0edf34fe9adc25bb1c56a29de~mv2.png/v1/fill/w_1003,h_306,al_c,lg_1,q_85,enc_auto/dc1522_ba7cfbe0edf34fe9adc25bb1c56a29de~mv2.png'
        alt='...'
      >
        <h1 className="text-center pb-4">
          
          <b style={{fontWeight:"600"}}>Take your first step towards sustainable water future</b>
        </h1>
        <div className="d-grid gap-2 d-md-flex justify-content-center pb-5">
              <Button
                variant="light"
                className="me-md-2 mb-2 fs-5 button"
                style={{ width: "200px" }}
                href="https://calendly.com/partnerships-agua/30min"
              >
                <b>Book a Demo</b>
              </Button>
              <Button
                variant="light"
                className="ms-md-2 mb-2 fs-5  button"
                style={{ width: "200px" }}
                href="https://www.aguaws.com/product-catalogue"
              >
                <b>Product Catalog</b>
              </Button>
            </div>
      </MDBCarouselItem>
    </MDBCarousel>     
    <Container fluid className=" pt-5 pb-5 bg-black text-white">
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
              <a href="/" className="fa fa-twitter-square fs-2 ms-2 text-white text-decoration-none "></a>

<a href="/" className="fa fa-facebook-square fs-2  ms-2 text-white  text-decoration-none"> </a>

<a  href="/" className="fa fa-instagram fs-2  ms-2 text-white  text-decoration-none "></a>

<a  href="/" className="fa fa-linkedin-square fs-2 ms-2 text-white  text-decoration-none "></a>
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

export default Home;
