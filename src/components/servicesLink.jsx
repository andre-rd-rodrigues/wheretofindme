import React from "react";
import Parallax from "./commons/parallax";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./home_components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import DivImg from "./commons/div-img";

AOS.init();

const ServicesLink = () => {
  const icons = {
    width: "50px",
  };
  const width = {
    maxWidth: "400px",
  };
  return (
    <React.Fragment>
      <Parallax
        img="img/servicesTitle.jpeg"
        height="400px"
        gradient={true}
        title={
          <h1
            className="handwrite p-4 text-white text-center focus-in title-txt"
            style={{ fontWeight: "bold" }}
          >
            ULTIMATE TRAVEL DEALS
          </h1>
        }
      />

      {/*   COMPANY VALUES */}

      <Container>
        <Row className="text-center" id="serviceLink-row">
          <Col md={3} className="scale responsive-top">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="300"
            >
              <img
                src="img/serviceIcon1.png"
                alt="guidance-icon"
                style={icons}
              />
              <h3 className="my-2">Guidance</h3>
              <p>Expert inside & travel knowledge</p>
            </div>
          </Col>
          <Col md={3} className="scale responsive-top">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="500"
            >
              <img src="img/serviceIcon2.png" alt="value-icon" style={icons} />
              <h3 className="my-2">Value</h3>
              <p>Irresistable rates, offers & benefits</p>
            </div>
          </Col>
          <Col md={3} className="scale responsive-top">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="700"
            >
              <img src="img/serviceIcon3.png" alt="peace-icon" style={icons} />
              <h3 className="my-2">Peace of Mind</h3>
              <p>Reassurance to book with confidence</p>
            </div>
          </Col>
          <Col md={3} className="scale responsive-top">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="900"
            >
              <img
                src="img/serviceIcon4.png"
                alt="guidance-icon"
                style={icons}
              />
              <h3 className="my-2">Service</h3>
              <p>Beside you every step of the way</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/*      CITIES */}

      <Container fluid className="bg-light py-5">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          <h1 className="handwrite_title display-2 text-center mb-5">Cities</h1>
        </div>
        <Row className="servicesLink-cities">
          <Col md={6} className="text-center m-3 ">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <DivImg img="img/hongKong.jpeg" position="top" />
              <div style={width} className="mx-auto">
                <h5>
                  HONG KONG <span className="badge badge-info">New</span>
                </h5>
                <p className="normal mb-4">
                  Hong Kong welcomes with an iconic skyline, a legendary
                  kitchen, and lush, protected nature where rare birds and
                  colourful traditions thrive.
                </p>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Flight</strong>
                </span>
                <span className="mx-3">
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>6 Days</strong>
                </span>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Activities</strong>
                </span>
                <div className="mt-5">
                  <Link to="/contact" className="text-white btn btn-warning">
                    <strong>SEE MORE</strong>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center m-3 ">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="200"
            >
              <DivImg img="img/italy.jpeg" position="center" />
              <div style={width} className="mx-auto">
                <h5>
                  VENEZIA <span className="badge badge-danger">30%</span>
                </h5>
                <p className="normal mb-4">
                  Home to many of the world's greatest works of art,
                  architecture and gastronomy, Italy elates, inspires and moves
                  like no other.
                </p>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Flight</strong>
                </span>
                <span className="mx-3">
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>7 Days</strong>
                </span>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Activities</strong>
                </span>
                <div className="mt-5">
                  <Link to="/contact" className="text-white btn btn-warning">
                    <strong>SEE MORE</strong>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="servicesLink-cities mt-4">
          <Col md={6} className="text-center m-3 ">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <DivImg img="img/turkey.jpeg" position="top" />
              <div style={width} className="mx-auto">
                <h5>
                  ISTANBUL <span className="badge badge-danger">10%</span>
                </h5>
                <p className="normal mb-4">
                  A richly historical land with some of the best cuisine you
                  will ever taste, scenery from beaches to mountains and the
                  great city of İstanbul.
                </p>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Flight</strong>
                </span>
                <span className="mx-3">
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>3 Days</strong>
                </span>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Activities</strong>
                </span>
                <div className="mt-5">
                  <Link to="/contact" className="text-white btn btn-warning">
                    <strong>SEE MORE</strong>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-center m-3 ">
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-easing="ease-out"
              data-aos-delay="200"
            >
              <DivImg img="img/india.jpeg" position="center" />
              <div style={width} className="mx-auto">
                <h5>AGRA</h5>
                <p className="normal mb-4">
                  With its sumptuous mix of traditions, spiritual beliefs,
                  festivals, architecture and landscapes, your memories of India
                  will blaze bright long after you've left its shores.
                </p>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Flight</strong>
                </span>
                <span className="mx-3">
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>5 Days</strong>
                </span>
                <span>
                  <img
                    src="img/check.svg"
                    alt="check-icon"
                    style={{ width: "20px", marginRight: "5px" }}
                  />
                  <strong>Activities</strong>
                </span>
                <div className="mt-5">
                  <Link to="/contact" className="text-white btn btn-warning">
                    <strong>SEE MORE</strong>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default ServicesLink;
