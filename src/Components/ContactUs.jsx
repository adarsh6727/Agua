import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FooterComponent from '../Shared/FooterComponent';
import Fade from 'react-reveal/Fade';
const ContactUs = () => {
  const { control, handleSubmit, formState, setError } = useForm();
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <>
    <Fade In>
      <Container fluid className="pt-5 pb-4 text-white bg-black">
        <Container>
          <h1 className="pb-2" style={{ fontSize: '80px' }}>
            <b>How Can We Help You ?</b>
          </h1>
          <p style={{ fontSize: "22px" }}>
            <b>Feel Free To Reach Out To Us</b>
          </p>
        </Container>
      </Container>
      </Fade>
      <Container fluid className="bg-white text-black pt-5 pb-5 ">
        <Container>
          <div>
            <p style={{ color: '#1D67CD', fontSize: '20px' }}>Send us a message <br />
              and we’ll get back to you shortly.</p>
          </div>
          <Col md={10} xs={12} >
            <form onSubmit={handleSubmit(onSubmit)} style={{ color: '#2e74d7', fontSize: '16px',fontWeight:'600' }}>
              <Row className="mb-3">
                <Form.Group as={Col} lg={4} md={4} xs={5} controlId="formGridEmail">
                  <Form.Label className=''>First Name <span style={{color:'red',fontWeight:'700'}}> *</span></Form.Label>
                  <Controller
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'First Name is required' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        className="pt-3  pb-3 "
                        style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                        {...field}
                      />
                    )}
                  />
                  {formState.errors.firstName && <p style={{color:'red'}}>{formState.errors.firstName.message}</p>}
                </Form.Group>

                <Form.Group as={Col} lg={4} md={4} xs={5} controlId="formGridPassword">
                  <Form.Label>Last Name <span style={{color:'red',fontWeight:'700'}}> *</span>   </Form.Label>
                  <Controller
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Last Name is required' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        className="pt-3 pb-3"
                        style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                        {...field}
                      />
                    )}
                  />
                  {formState.errors.lastName && <p style={{color:'red'}}>{formState.errors.lastName.message}</p>}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} lg={3} md={3} xs={4} controlId="formGridEmail">
                  <Form.Label>Code </Form.Label>
                  <Controller
                    name="code"
                    control={control}
                    defaultValue="IN"
                    render={({ field }) => (
                      <Form.Select
                        className="pt-3 pb-3"
                        style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7' ,fontWeight:'600' }}
                        {...field}
                      >
                        <option value="IN">IN...</option>
                        <option value="A">A...</option>
                        <option value="B">B...</option>
                        <option value="C">C...</option>
                        <option value="D">D...</option>
                      </Form.Select>
                    )}
                  />
                </Form.Group>

                <Form.Group as={Col} lg={5} md={5} xs={6} controlId="formGridPassword">
                  <Form.Label>Phone <span style={{color:'red',fontWeight:'700'}}> *</span></Form.Label>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Phone is required' }}
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        className="pt-3 pb-3"
                        style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                        {...field}
                      />
                    )}
                  />
                  {formState.errors.phone && <p style={{color:'red'}}>{formState.errors.phone.message}</p>}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email <span style={{color:'red',fontWeight:'700'}}> *</span> </Form.Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Email is required' }}
                  render={({ field }) => (
                    <Form.Control
                      placeholder="e.g., email@example.com"
                      className="pt-3 pb-3"
                      style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                      {...field}
                    />
                  )}
                />
                {formState.errors.email && <p style={{color:'red'}}>{formState.errors.email.message}</p>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Company</Form.Label>
                <Controller
                  name="company"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      placeholder="Company"
                      className="pt-3 pb-3"
                      style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                      {...field}
                    />
                  )}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Subject</Form.Label>
                <Controller
                  name="subject"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      placeholder="e.g., Support"
                      className="pt-4 pb-4"
                      style={{borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7',fontWeight:'600' }}
                      {...field}
                    />
                  )}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Your Message</Form.Label>
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Form.Control
                      placeholder="Enter text here"
                      style={{ borderRadius:'4px', backgroundColor: '#E5EBFA', fontSize: '16px', color: '#6c86c7', paddingBottom: '70px',fontWeight:'600' }}
                      className="pt-3"
                      {...field}
                    />
                  )}
                />
              </Form.Group>

              <div className="pt-4">
                <Button variant="primary" type="submit" style={{ width: '130px' }} className="button">
                  Send
                </Button>
              </div>
            </form>
         </Col>
</Container>
</Container>
<FooterComponent/>
</>
)}
export default  ContactUs