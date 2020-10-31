import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Services = () => {
  return (
    <Container fluid className="bg-light" id="services-container">
      <Row className="services-row">
        <Col md={6} style={{ padding: 0 }}>
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <img
              src="img/homeServices.jpeg"
              alt="travel-img"
              className="img-fluid rounded"
            />
          </div>
        </Col>
        <Col md={5} className="service-text px-4 d-flex flex-column mx-auto">
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h1 className="mb-4 display-4 handwrite responsive-top">
              Essential guidance
            </h1>
            <p className="normal my-4">
              Where to find me focus in travel guidance by
              <b> uncomplicating</b> the traditional process. Get relevant
              <b> information</b> by the minute without having to worry about
              what comes next.
            </p>
            <p className="normal">
              Simply select your <b>favorite destination</b> from the comfort of
              your own home and allow us to do what we do best and enjoy the
              experience worthy for you or your only favorite person.
            </p>
            <div className="text-right mt-2">
              <Link to="/services" className="services-link text-right mt-4">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </Col>
      </Row>

      {/* ROW 2 */}
      <Row className="services-row">
        <Col
          md={5}
          className="service-text px-4 d-flex flex-column mx-auto responsive-order1"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h1 className="mb-4 display-4 handwrite responsive-top">
              Iconic places
            </h1>
            <p className="normal my-4">
              All of our travel options have three things in common —{" "}
              <b>vision, experience</b>, and an extraordinary attention to
              detail. These defining pillars now live on through Where to Find
              Me. From our premiere guidance to our world renowned admnistration
              service, your traveling is in the hands of the{" "}
              <b>masters of this craft</b> and maintain the same principles that
              define our finest travel experiences.
            </p>

            <div className="text-right mt-3">
              <Link to="/services" className="services-link text-right mt-4 ">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6} style={{ padding: 0 }} clasName="responsive-order2">
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <img
              src="img/homeServices2.jpeg"
              alt="travel-img"
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>
      {/* ROW 3 */}
      <Row className="services-row">
        <Col md={6} style={{ padding: 0 }}>
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <img
              src="img/homeServices.jpeg"
              alt="travel-img"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col md={5} className="service-text px-4 d-flex flex-column mx-auto">
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h1 className="mb-4 display-4 handwrite responsive-top">
              Perfectly priced
            </h1>
            <p className="normal my-4">
              <b>Modern luxuries</b> tailored to you. This is travel management
              expertise within reach. Timeless, empathetic, made to order and
              all priced to meet your needs.
            </p>
            <p className="normal">
              Simply select your favorite spot from the <b>comfort</b> of your
              own home and allow us to do what we do best—present you with a
              couture caliber experience worthy for you or your only favorite
              person.
            </p>
            <div className="text-right mt-3">
              <Link to="/services" className="services-link text-right mt-4">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
