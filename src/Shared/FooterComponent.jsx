import {
  ButtonToolbar,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
const FooterComponent = () => {
  return (
    <>
      {" "}
      <Container fluid className=" pt-5 pb-5 bg-black text-white">
        <Container>
          <Row>
            <Col lg={5} md={5} xs={12} className="pt-3">
              <h5>
                <b>Address :</b>
              </h5>
              <p style={{ fontSize: "16px" }}>
                No. 465, Beri Div Dighal, Madana, Jhajjar, Haryana, India -
                124102
              </p>
              <h5>
                {" "}
                <b>Phone No. :</b>
              </h5>
              <p style={{ fontSize: "16px" }}>​1800 3090 609</p>
            </Col>
            <Col lg={3} md={4} xs={12} className="pt-3">
              <div>
                <h5>
                  <b>Follow us on:</b>
                </h5>
                <div className="d-flex gap-2 ">
                  <a
                    href="https://twitter.com/AguaWSIndia"
                    target="_blank"
                    className="text-decoration-none text-black fs-3 bg-white rounded-pill d-flex justify-content-center align-items-center circle"
                  >
                    <i className="fa fa-twitter "></i>
                  </a>

                  <a
                    href="https://www.facebook.com/AguaWSIndia" target="_blank"
                    className="text-decoration-none text-black fs-3 bg-white rounded-pill d-flex justify-content-center align-items-center circle"
                  >
                    <i className="fa fa-facebook "></i>
                  </a>

                  <a
                    href="https://www.instagram.com/AguaWSIndia" target="_blank"
                    className="text-decoration-none text-black fs-3 bg-white rounded-pill d-flex justify-content-center align-items-center circle"
                  >
                    <i className="fa fa-instagram "></i>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/aguaws/AguaWSIndia" target="_blank"
                    className="text-decoration-none text-black fs-3 bg-white rounded-pill d-flex justify-content-center align-items-center circle"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
                </div>
                </Col>
                <Col lg={4} md={3} xs={10}>
                   
              <div>
                <h5 className="pt-3">
                
                  <b>Drop Us a Mail :</b>
                </h5>
                <a
                  href="mailto:info@aguaws.com"
                  target="_self"
                  className="fa fa-envelope text-decoration-none text-black fs-3 bg-white rounded-pill d-flex justify-content-center align-items-center circle"

                ></a>
              </div>
              </Col>
         
          </Row>
        </Container>
      </Container>
      <hr className="m-0 " />
      <Container fluid className="py-4 bg-black">
        <Container style={{ fontSize: "16px" }} className="text-white">
          © 2023 Agua Wireless Systems Private Limited. All Rights Reserved.
          Various Trademarks Held By Their Respective Owners.
        </Container>
      </Container>
    </>
  );
};

export default FooterComponent;
