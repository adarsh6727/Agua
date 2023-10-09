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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const Home = () => {
  const waterInfraSmarter = [
    { img: Image1, title: 'Online Monitoring', description: 'Monitor your entire water network, just using your smartphone', link: '' },
    { img: Image2, title: 'Advanced Automation', description: 'Efficient distribution of water resource with reduced operational cost', link: '' },
    { img: Image3, title: 'Leakage Detection', description: 'We protect your infrastructure while reducing your water and energy bills', link: '' },
    { img: Midimages1, title: 'Quality Management', description: 'Keep an eye on your health, subscribe to our water quality alerts', link: '' }
  ];


  const customerStoriesSlider = [
    {
      img: cardimage, description: `Ashirwad by Ali Axis R&T Centre is associated with Agua
    Wireless for quite some now and we are working together on
    some cutting-edge technology projects. Rohit and Kanish
    are really great and thorough professionals. We look
    forward to working with Agua on more projects creating
    meaningful solutions for our customers.`, customerName: 'Lokesh pancholi', customerDesignation: 'Design manager'
    },
    {
      img: cardimage1, description: `We deployed Agua's flow sensor in a residential apartment
    three years back. They have helped us with accurate
    billing of every house. These systems have not caused any
    malfunction till date.`, customerName: 'Dharma Krishnappa', customerDesignation: 'Director'
    },
  ];
  const bookDemoSlider = [
    'https://static.wixstatic.com/media/dc1522_ba7cfbe0edf34fe9adc25bb1c56a29de~mv2.png/v1/fill/w_1039,h_287,al_c,lg_1,q_85,enc_auto/dc1522_ba7cfbe0edf34fe9adc25bb1c56a29de~mv2.png',
    'https://static.wixstatic.com/media/dc1522_649cae8446624806b7a7a1155eaf3311~mv2.png/v1/fill/w_1039,h_287,al_c,lg_1,q_85,enc_auto/dc1522_649cae8446624806b7a7a1155eaf3311~mv2.png',
    'https://static.wixstatic.com/media/dc1522_a8f2b375cbff4405b82a3ae72231e296~mv2.png/v1/fill/w_1039,h_287,al_c,lg_1,q_85,enc_auto/dc1522_a8f2b375cbff4405b82a3ae72231e296~mv2.png',
    'https://static.wixstatic.com/media/dc1522_77acc46c588e4dc4944bbc690c527a15~mv2.png/v1/fill/w_1039,h_287,al_c,lg_1,q_85,enc_auto/dc1522_77acc46c588e4dc4944bbc690c527a15~mv2.png',
    'https://static.wixstatic.com/media/dc1522_f1437bd23d914bf0876596e33a5d0f76~mv2.png/v1/fill/w_1039,h_287,al_c,lg_1,q_85,enc_auto/dc1522_f1437bd23d914bf0876596e33a5d0f76~mv2.png'
  ];


  const partnersSlider = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6, Pic7, Pic8, Pic9];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    lazyLoad: true,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };

  const settingsCustomerStories = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    arrows: false, // Hide the previous slide control
  };

  const settings2 = {
    dots: false,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  return (
    <>
      <Container fluid className="bg-black pb-4 pt-3 ">
        <Container>
          <Row>
            <Col lg={5} md={6} xs={12} className="pb-3">
              <h1 className="text-white">
                <b style={{ fontWeight: '900', fontSize: '40px' }}>“Let’s make your</b>
                <b style={{ color: "#87CEEB", fontWeight: '900', fontSize: '40px' }}> water visible</b> <b style={{ fontWeight: '900', fontSize: '40px' }}>  and </b>
                <b style={{ color: "#90EE90", fontWeight: '900', fontSize: '40px' }}> Cost invisible”</b>
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
                  <source src="https://video.wixstatic.com/video/dc1522_8a73b32e7e7f4072a0efe5d5a2afece3/480p/mp4/file.mp4" type="video/mp4" className="videos" />
                </video>
              </div>


            </Col>
          </Row>
        </Container>
      </Container>



      <div className="container-fluid">
        <Slider {...settings2}>
          {partnersSlider.map((item, key) =>
            <div key={key} className="d-flex justify-content-center">
              <img src={item} style={{ width: "150px", objectFit: 'contain', height: '150px' }} />
            </div>
          )}
        </Slider>
      </div>

      <Container fluid className=" pt-5 pb-5">
        <Container>
          <div >
            <h1 className=" text-center pb-4">
              <b>Connecting the Physical and Digital worlds </b>
            </h1>
          </div>
          <Row className="justify-content-center text-center align-items-center equal-height">
            <Col md={6} xs={10}>
              <img
                src={Midimages1}
                className="img-responsive section3"
                style={{ maxWidth: "100%" }}
              />
            </Col>

            <Col md={6} xs={10} >
              <img
                src={Midimages}
                className="img-responsive section3"

                style={{ maxWidth: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>


      <Container fluid style={{ backgroundColor: "#F4FCFF" }} className="pt-5 my-3" >
        <Container >
          <h1 style={{ fontWeight: '900' }} className="text-black text-center  ">
            Make Your Water Infra Smarter
          </h1>

          {/* Cards Section  */}
          <Row className="text-black pb-5 pt-4 align-items-center gy-3">
            {waterInfraSmarter.map((item, index) =>
              <Col md={3} xs={12} key={index}>
                <Card className="border-0 slider">
                  <Card.Img src={item.img} className="card-img-top smarterImg" />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </Container>

      <Container fluid className="bg-black pt-5 pb-5" style={{ fontWeight: '800' }}>
        <Container>
          <h1 className="text-center text-white pt-3 pb-3" style={{ fontWeight: '700', fontSize: '40px' }}>
            Impact that we created
          </h1>
          <Row>
            <Col lg={4} md={4} xs={12} className="text-white text-center">
              <h2 style={{ fontWeight: '800', fontSize: '50px' }}> 35%</h2>
              <p style={{ fontWeight: '800', fontSize: '18px' }}>Water and electricity saved</p>
            </Col>
            <Col lg={4} md={4} xs={12} className="text-white text-center">
              <h2 style={{ fontWeight: '800', fontSize: '50px' }}>
                3100000 <span style={{ fontSize: "15px", fontWeight: '800' }}> Litres</span>
              </h2>
              <p style={{ fontWeight: '800', fontSize: '18px' }}>Water saved</p>
            </Col>
            <Col lg={4} md={4} xs={12} className="text-white text-center" style={{ fontWeight: '800' }}>
              <h2 style={{ fontWeight: '800', fontSize: '50px' }}>
                1023840 <span style={{ fontSize: "15px" }}>Kg</span>
              </h2>
              <p style={{ fontWeight: '800', fontSize: '18px' }}>Carbon emission avoided</p>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="my-4">
        <Container>
          <div className=" text-center pt-3" style={{ color: "#000000" }}>
            <h3 style={{ fontWeight: '700', fontSize: '40px' }}>
              Our customer stories
            </h3>
            <p style={{ fontSize: "small" }}>
              We are trusted among industry leaders
            </p>
          </div>
        </Container>
      </Container>
      <Container className="py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <Card className="shadow py-3">
              <Card.Body>
                <Slider {...settingsCustomerStories}>
                  {customerStoriesSlider.map((item, key) =>
                    <div key={key}>
                      <div className="row align-items-center justify-content-center " >
                        <div className="col-4 " >
                          <img src={item.img} className="d-block mx-auto" style={{ width: "100px", objectFit: 'contain', height: '100px' }} />
                        </div>
                        <div className="col-8 px-2" >
                          <h6 >{item.description}</h6>
                          <div className="d-flex justify-content-end ">
                            <h6 className="fw-bold">{item.customerName} <br /> {item.customerDesignation} </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Slider>
              </Card.Body>
            </Card>
          </div>
        </div>

      </Container >
      <Container fluid className="bg-black text-white pt-5">
        <Container>
          <h1 className="text-center pt-4" style={{ fontWeight: '700' }}>Technology Integrations</h1>
          <Row className="align-items-center">
            <Col lg={6} md={8} xs={12}              >
              <p>
                AGUA ONE, our IoT gateway is enabling sustainable water
                management across the water value chain. This state-of-the-art
                solution offers numerous benefits to our customers. Key features
                which make our gateway stand out:
              </p>
              <ul className="d-grid gap-3">
                <li>Seamless communication over advanced wireless protocols, like
                  LoRa, 4G, GSM, WiFi and Bluetooth.</li>
                <li>Power options like AC power, solar power and battery backup,
                  ensure uninterrupted operation.</li>
                <li>24/7 monitoring, Geotagging, Alert system and accurate data
                  analytics, help you make data-driven decisions</li>
              </ul>

              <p style={{ fontSize: "16px" }}> With our reliable and accurate solutions, you can rest assured
                that you are choosing a solution that makes your facility
                future-ready.</p>
            </Col>

            <Col lg={6} md={4} xs={12} className="text-center">
              <img
                src={Mid1}
                className="img-fluid w-auto"
              />
            </Col>
          </Row>

          <Row className=" pt-5 pb-5 align-items-center text-center ">
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im1}
                className="img-fluid techImg"
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im2}
                className="img-fluid techImg"
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im3}
                className="img-fluid techImg"
              />
            </Col>
            <Col lg={3} md={3} xs={3}>
              <img
                src={Im4}
                className="img-fluid techImg"

              />
            </Col>
          </Row>
        </Container>
      </Container>


      <div className="container-fluid px-0 mx-0 position-relative w-100 overflow-hidden bg-black user-select-none">

        <div className="position-absolute  z-3 top-0 bottom-0 w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white text-center ">Take your first step towards sustainable water future</h1>
          <div className="d-grid gap-3 d-md-flex justify-content-md-end">
            <button className="btn btn-primary">Book a demo</button>
            <button className="btn btn-primary">Product Catalog</button>
          </div>
        </div>

        <Slider {...settings}>
          {bookDemoSlider.map((item, key) =>
            <div key={key}>
              <img src={item} style={{ width: "100%", objectFit: 'cover', height: '400px' }} />
            </div>
          )}
        </Slider>
      </div>

      <Container fluid className=" pt-5 pb-5 bg-black text-white">
        <Container>
          <Row >
            <Col lg={5} md={7} xs={12}>
              <h6>
                <b>Address :</b>
              </h6>
              <p style={{ fontSize: '15px' }}>
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

                <a href="/" className="fa fa-instagram fs-2  ms-2 text-white  text-decoration-none "></a>

                <a href="/" className="fa fa-linkedin-square fs-2 ms-2 text-white  text-decoration-none "></a>
              </div>
              <div className="pt-4  ">
                <h6 className="padding" > <b>Drop Us a Mail :</b></h6>
                <a href="https://www.google.com/gmail/about/" className="fa fa-envelope fs-2 ms-2 text-white" ></a>
              </div>

            </Col>

            <Col lg={4} md={5} xs={12}>
              <h6 style={{ fontWeight: '600' }}>
                Join our newsletter
              </h6>
              <ButtonToolbar aria-label="Toolbar with Button groups" >

                <InputGroup className="rounded-3">
                  <input id="btnGroupAddon" style={{ width: '170px', color: 'blue', outlineColor: 'red', backgroundColor: '#E5EBFA' }} />
                  <Form.Control

                    placeholder="subscribe"
                    aria-required="true"
                    style={{ cursor: 'pointer', outlineColor: 'red' }}

                  />
                </InputGroup>
              </ButtonToolbar>
            </Col>
          </Row>

        </Container>
      </Container>
      <hr className="m-0 " />
      <Container fluid className="py-4 bg-black">
        <Container style={{ fontSize: "16px" }} className="text-white">
          © 2023 Agua Wireless Systems Private Limited. All Rights Reserved. Various Trademarks Held By Their Respective Owners.
        </Container>
      </Container>



    </>
  );
};

export default Home;
