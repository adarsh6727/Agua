import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import FooterComponent from "../Shared/FooterComponent";
import { useForm, Controller } from "react-hook-form";
import Fade from "react-reveal/Fade"


export const ProductCatalog = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };
  return (
    <>
    <Fade In>
   <Container fluid className="bg-black text-white py-5">
        <Container>
          <h1 style={{ fontSize: "70px", fontWeight: "800" }}>
            Product Catalogue
          </h1>
        </Container>
      </Container>
      </Fade>
      <Container fluid className="py-5 text-black ">
        <Container>
          <h1 style={{ fontSize: "22px", fontWeight: "700" }} className="pb-3">
            Product Catalogue Is Ready! Please Submit This Form To Download
            Product Catalogue!
          </h1>
          <Form style={{ color: "black", fontSize: "16px", fontWeight: "500"  }} onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
              <Col lg={3} md={4} xs={6}>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name <span className="text-danger fw-bold">*</span> </Form.Label>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{ required: "First Name is required" }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        style={{
                          borderColor: "black",
                          borderRadius: "0px",
                          fontSize: "16px",
                           fontWeight: "600" ,
                           
                        }}
                        className="pt-2 pb-2 text-secondary"
                        {...field}
                      />
                    )}
                  />
                  {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                </Form.Group>
              </Col>

              <Col lg={3} md={4} xs={6}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name <span className="text-danger fw-bold">*</span></Form.Label>
                  <Controller
                    name="lastName"
                    control={control}
                    rules={{ required: "Last Name is required" }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        style={{
                          borderColor: "black",
                          borderRadius: "0px",
                          fontSize: "16px",
                          fontWeight: "600" 
                        }}
                        className="pt-2 pb-2 text-secondary"
                        {...field}
                      />
                    )}
                  />
                  {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                </Form.Group>
              </Col>

              <Col lg={4} md={4} xs={8}>
                <Form.Group controlId="phone">
                  <Form.Label>Phone <span className="text-danger fw-bold">*</span></Form.Label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{ required: "Phone is required" }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        style={{
                          borderColor: "black",
                          borderRadius: "0px",
                          fontSize: "16px",
                          fontWeight: "600" 
                        }}
                        className="pt-2 pb-2 text-secondary"
                        {...field}
                      />
                    )}
                  />
                  {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={5} md={5} xs={8}>
                <Form.Group controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Controller
                    name="company"
                    control={control}
                    render={({ field }) => (
                      <Form.Control
                        placeholder="Company"
                        style={{
                          borderRadius: "0px",
                          borderColor: "black",
                          fontSize: "16px",
                          fontWeight: "600" 
                        }}
                        className="pt-2 pb-2 text-secondary"
                        {...field}
                      />
                    )}
                  />
                </Form.Group>
              </Col>

              <Col lg={5} md={5} xs={8}>
                <Form.Group controlId="email">
                  <Form.Label>Email <span className="text-danger fw-bold">*</span></Form.Label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <Form.Control
                        placeholder="Email"
                        style={{
                          borderRadius: "0px",
                          borderColor: "black",
                          fontSize: "16px",
                          fontWeight: "600" 
                        }}
                        className="pt-2 pb-2 text-secondary"
                        {...field}
                      />
                    )}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </Form.Group>
              </Col>
            </Row>
            <div className="pt-4">
              <Button
                variant="dark"
                type="submit"
                style={{ width: "150px" }}
                className="button"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
      <FooterComponent/>
    </>
  );
};
export default ProductCatalog

