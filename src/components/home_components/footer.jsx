import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Row, Col } from "react-bootstrap";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  color: "darkcyan",
};

const Footer = () => {
  return (
    <Container>
      <Row className="justify-content-center my-4">
        <Col md={1} xs={1} className="footer-col">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" style={styles} />
          </a>
        </Col>
        <Col md={1} xs={1} className="footer-col">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" style={styles} />
          </a>
        </Col>
        <Col md={1} xs={1} className="footer-col">
          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} size="2x" style={styles} />
          </a>
        </Col>
        <Col md={1} xs={1} className="footer-col">
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" style={styles} />
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <p className="text-muted copywrite">
          &copy; 2020 Where to Find Me by André Rodrigues. All rights reserved.
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
