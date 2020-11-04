import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

const You = () => {
  return (
    <Container fluid className="bg-light py-4">
      <div id="you-div">
        <div
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          <h1 className="handwrite_title text-center display-3 my-5">
            You above all{" "}
            <sup style={{ fontSize: "14px" }} className="normal">
              TM
            </sup>
          </h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          <p id="you-subtitle" className="text-center normal mx-auto my-4">
            <b> Where to Find Me</b> shopping experience is carefully designed
            with you in mind. <b>Stress-free</b> from start to finish with
            complimentary, no-hassle services—and that’s our promise.
          </p>
        </div>
      </div>
      <Row id="you-row" className="text-center">
        <Col className="you-columns">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="300"
          >
            <Link to="/services" className="link-style">
              <img src="img/homeYou1.svg" alt="tailor-icon" width="70px" />
              <p className="my-3 text-center">
                COSTUMIZED EXPERIENCE FOR THE PERFECT FIT
              </p>
            </Link>
          </div>
        </Col>
        <Col className="you-columns">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="500"
          >
            <Link to="/services" className="link-style">
              <img src="img/homeYou2.svg" alt="tailor-icon" width="70px" />
              <p className="my-3 text-center">FREE INSURED TRANSPORTATION</p>
            </Link>
          </div>
        </Col>
        <Col className="you-columns">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="700"
          >
            <Link to="/services" className="link-style">
              <img src="img/homeYou3.svg" alt="tailor-icon" width="70px" />
              <p className="my-3 text-centernormal">ADMINISTRATION SERVICE</p>
            </Link>
          </div>
        </Col>
        <Col className="you-columns">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="900"
          >
            <Link to="/services" className="link-style">
              <img
                src="img/homeYou4.svg"
                width="70px"
                alt="return policy icon"
              />
              <p className="my-3 text-center">FREE 15 DAY RETURN POLICY</p>
            </Link>
          </div>
        </Col>
        <Col className="you-columns">
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
            data-aos-delay="1100"
          >
            <Link className="link-style" to="/services">
              <img src="img/homeYou5.svg" alt="tailor-icon" width="70px" />
              <p className="my-3 text-center">ALWAYS HERE FOR YOU</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default You;
