import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Footer from "./home_components/footer";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="contact-div m-0 fade">
        <Container id="contact" className="py-5">
          <h1 className="handwrite display-3 text-center text-white py-4">
            Contact us
          </h1>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your beautiful name here..."
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Your awesome email here..."
                    required
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>
                    Phone - <small>Optional</small>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your very private phone number here..."
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={9}
                    placeholder="And your message here..."
                    required
                  />
                </Form.Group>
                <div className="text-right">
                  <Button variant="light" type="submit">
                    Submit
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
