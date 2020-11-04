import React, { Component } from "react";
import Footer from "./home_components/footer";
import Parallax from "./commons/parallax";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

class AboutLink extends Component {
  render() {
    const partners = {
      width: "150px",
      margin: "20px 30px",
    };
    const ecoLogos = {
      width: "400px",
    };
    const margin = {
      marginTop: "200px",
    };
    return (
      <React.Fragment>
        <Parallax
          img="img/aboutTitle.jpeg"
          height="400px"
          title={
            <h1 className="handwrite_title p-4 display-2 text-center focus-in footer-col">
              Welcome traveler!
            </h1>
          }
        />
        <Container>
          <Row id="aboutLink-row">
            <Col md={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <h1 className="handwrite display-4 text-center">About us</h1>
                <p className="my-5 text-justify normal">
                  <b>‘Where to find me’</b> is England's biggest online
                  transport ticketing stage that has changed transport travel in
                  the nation by conveying straightforwardness, comfort and
                  empathy. Our mission is to inspire you to travel more.
                  Established in 2006, ‘Where to find me’ is a piece of
                  England's driving on the web
                  <b> travel organization</b> most recognizable company, giving
                  most stretched out decision, predominant client benefit, least
                  costs and unmatched advantages. Focusing in empathy and
                  personalization, we've has served more than 8 million fellow
                  travellers, giving them experiences they'll never forget.
                  ‘Where to find me’ has a <b>worldwide </b>nearness with
                  activities crosswise over Europe, Indonesia, Singapore,
                  Malaysia, Colombia and Peru apart from England. Just get up
                  and go, because it’s when you’re traveling that you find
                  yourself.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <img
                  src="img/company.jpeg"
                  alt="office-img"
                  className="img-fluid rounded"
                  style={{ height: "550px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={margin}>
          <Row id="aboutLink-row">
            <Col md={6} className="responsive-order1 responsive-top">
              <div
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <img
                  src="img/ourMission.jpeg"
                  alt="office-img"
                  className="img-fluid rounded"
                  style={{ height: "550px" }}
                />
              </div>
            </Col>
            <Col md={6} className="responsive-order2">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <h1 className="handwrite display-4 text-center">Our mission</h1>
                <p className="my-5 text-justify normal">
                  Our mission is to <b>inspire you</b> to travel more in a
                  sustainable way. Just get up and go, because it’s when you’re
                  traveling that you find yourself. We believe in{" "}
                  <b>honesty, love, sharing,</b> and that when you’re traveling,
                  the more the merrier. Our <b>partners</b> can also speak for
                  us:
                </p>
                <div className="text-center">
                  <span>
                    <img src="img/tui.png" style={partners} alt="tui-logo" />
                  </span>
                  <span>
                    <img
                      src="img/latam.png"
                      style={partners}
                      alt="Latam logo"
                    />
                  </span>
                  <span>
                    <img
                      src="img/sunExpress.png"
                      style={partners}
                      alt="Sun express logo"
                    />
                  </span>
                  <span>
                    <img
                      src="img/airEuropa.png"
                      style={partners}
                      alt="Air Europa logo"
                    />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={margin}>
          <Row id="aboutLink-row">
            <Col md={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <h1 className="handwrite display-4 text-center">
                  eco-friendly
                </h1>
                <p className="my-5 text-justify normal">
                  As part of our commitment to looking after our <b>planet</b>,
                  we operate one of the most modern and efficient aircraft
                  fleets in the sky. We are actively working on ways to{" "}
                  <b>reduce resource consumption</b>, while investing in
                  conservation and wildlife protection.
                </p>
                <div className="text-center">
                  <img
                    src="img/eco.png"
                    className="img-fluid"
                    alt="eco certifications"
                    style={ecoLogos}
                  />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div
                className="text-center"
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-easing="ease-out"
              >
                <img
                  src="img/ecoFriendly.jpeg"
                  alt="office-img"
                  className="img-fluid rounded"
                  style={{ height: "550px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Parallax
          img="img/aboutFooter.jpeg"
          height="400px"
          gradient={true}
          title={
            <div className="text-center" data-aos="fade">
              <h1 className="handwrite_title p-4 display-2 aboutLink-title-txt">
                Ready for departure?
              </h1>
              <div className="text-center mt-3">
                <Link to="/services" className="about-link text-right mt-4">
                  EXPLORE SERVICES
                </Link>
              </div>
            </div>
          }
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutLink;
