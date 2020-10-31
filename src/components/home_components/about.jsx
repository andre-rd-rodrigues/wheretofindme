import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const About = () => {
  return (
    <Container className="my-5">
      <Row id="about-row">
        <Col md={5} className="my-auto">
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <Image src="img/homeAbout.jpeg" rounded fluid />
          </div>
        </Col>

        <Col md={7} className="my-auto pl-md-5">
          <div
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h1
              className="handwrite_title display-3 text-center responsive-top"
              id="about-h1"
            >
              About us
            </h1>
            <p className="normal mt-5 text-justify">
              We're a minimal and exquisite <b>travel agency</b> that loves to
              make dreams come true! At Where to Find Me, we believe that
              traveling is the best school of life as a meaningful road to{" "}
              <b>fulfillment</b>. We take care of the boring part, like travel
              administrations and other things, so you can just relax and live
              the full extended experience of traveling! We've personalized
              service with highly competent co-workers with the same passion for
              traveling as you! So, are you ready to become part of the family?
            </p>
            <div className="text-right">
              <Link to="/about" className="servicesLink-button text-right mt-4">
                SEE MORE
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
