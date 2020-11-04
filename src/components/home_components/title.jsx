import React from "react";
import { Container } from "react-bootstrap";
import Parallax from "../commons/parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Title = () => {
  return (
    <Parallax
      gradient={true}
      img="img/title.jpeg"
      height="100vh"
      title={
        <Container fluid className="title_div text-center mx-auto">
          <h1 className="title-txt p-3 text-white handwrite_title text-center focus-in">
            Where to find me
          </h1>

          <p
            className="text-white handwrite title_sub fade"
            style={{ animationDelay: "2s" }}
          >
            A Rewarding Way To Travel
          </p>
          <img
            src="img/location.png"
            style={{ animationDelay: "3s" }}
            alt="location icon"
            id="location-icon"
            className="fade"
          />
        </Container>
      }
    />
  );
};

export default Title;
