import React from "react";
import { Card, CardDeck, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Parallax from "./commons/parallax";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Reviews = () => {
  const parallaxText = {
    maxWidth: "700px",
    padding: "0px 20px",
    fontWeight: "600",
  };
  const starIcon = {
    width: "100px",
  };
  return (
    <React.Fragment>
      <Parallax
        img="img/reviewsTitle.jpeg"
        gradient={true}
        height="400px"
        title={
          <React.Fragment className="text-center">
            <div
              data-aos="focus-in"
              data-aos-duration="800"
              data-aos-easing="ease-out"
              data-aos-delay="6000"
            >
              <h1 className="handwrite_title p-4 display-2">Reviews</h1>
            </div>
            <div
              data-aos="fade-in"
              data-aos-delay="1500"
              data-aos-duration="800"
              data-aos-easing="ease-out"
            >
              <p style={parallaxText} className="normal text-center">
                Our dedication to creating outstanding travel experiences has
                allowed us to build a solid costumer base, and much of our
                business comes from repeated travellers. Here are just a few of
                the positive reviews we’ve had from our loving clients.
              </p>
            </div>
          </React.Fragment>
        }
      />
      <Container>
        <div
          data-aos="fade-in"
          data-aos-delay="200"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          <Row className="reviews-row">
            <Col md={4}>
              <Card className="scale">
                <Card.Img variant="top" src="img/card1.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center my-2">
                    <b>Anna Sushok</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    “Where to Find Me really listened to what I wanted, and
                    helped me take my family on the trip of a lifetime. I will
                    definitely be travelling with them again in the coming
                    years.”
                    <div className="text-center mt-3">
                      <img
                        src="/img/stars.png"
                        alt="stars-icon"
                        style={starIcon}
                      />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">
                    Last updated 12 hours ago
                  </small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scale responsive-card">
                <Card.Img variant="top" src="img/card2.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center my-4">
                    <b>John Tyson</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    “Where to Find Me is the best travel agency I have ever
                    experienced. After trying 90% of online travel agencies,
                    this site came up and is by far the best - even if it is
                    hard to find on the web. Awesome empathy and assistance by
                    the team.
                    <div className="text-center mt-3">
                      <img
                        src="/img/stars.png"
                        alt="stars-icon"
                        style={starIcon}
                      />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">24 hours ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scale">
                <Card.Img variant="top" src="img/card3.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center my-2">
                    <b>Alex Brown</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    “I’ve traveled many times over the years, and have never
                    experienced such thorough planning, attention to detail, and
                    excellent communication before, during, and after my trip.”
                    <div className="text-center mt-3">
                      <img
                        src="/img/stars.png"
                        alt="stars-icon"
                        style={starIcon}
                      />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">
                    Last updated 19 hours ago
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          data-aos-duration="800"
          data-aos-easing="ease-out"
        >
          <Row className="reviews-row">
            <Col md={4}>
              <Card className="scale">
                <Card.Img variant="top" src="img/card4.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center my-2">
                    <b>Ali Pazani</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    I've been booking with Where to Find Me now for a couple
                    years. Where to Find Me usually offers the best rates along
                    with flexible cancellation options, very important during
                    these uncertain times. We highly recommenimport {Link} from
                    'react-router-dom'; d Where to Find Me for all your travel
                    needs.
                    <div className="text-center mt-3">
                      <img src="/img/stars.png" alt="" style={starIcon} />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scale responsive-card">
                <Card.Img variant="top" src="img/card5.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center  my-2">
                    <b>Helena Lopez</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    This is the first time i use this travel agency and I love
                    it how they detail every possible information and also
                    they've the best you can possibly find in the area. Awesome
                    prices regarding the experiences and activities they offer.
                    <div className="text-center mt-3">
                      <img src="/img/stars.png" alt="" style={starIcon} />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">+24 hours ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="scale">
                <Card.Img variant="top" src="img/card6.jpeg" />
                <Card.Body>
                  <Card.Title className="text-center my-2">
                    <b>Ivana Cajina</b>
                  </Card.Title>
                  <Card.Text className="py-2">
                    Our first booking was cancelled due to covid and we received
                    credit note. We wanted the exact same holiday moving to next
                    year so we called today and this was completed quickly. The
                    service we received was professional, helpful, friendly and
                    efficient.
                    <div className="text-center mt-3">
                      <img src="/img/stars.png" alt="" style={starIcon} />
                    </div>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <small className="text-muted">Last updated 30 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
      <Parallax
        img="img/reviewsFooter.jpeg"
        height="300px"
        gradient={true}
        title={
          <div className="text-center">
            <p style={parallaxText} className="text-center normal">
              We’ve had the pleasure to work with many businesses, groups, and
              individuals over the years. Our destinations are available through
              our travel experiences. Are you ready to join us?
            </p>
            <div className="text-center mt-3">
              <Link to="/services" className="about-link text-right mt-4">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        }
      />
    </React.Fragment>
  );
};

export default Reviews;
