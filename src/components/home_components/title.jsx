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
          <div data-aos="focus-in">
            <h1 className="title-txt p-3 text-white handwrite_title text-center">
              Where to find me
            </h1>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="1600"
            data-aos-duration="800"
            data-aos-easing="ease-out"
          >
            <p className="text-white handwrite title_sub">
              A Rewarding Way To Travel
            </p>
          </div>

          <div
            data-aos="fade"
            data-aos-delay="1900"
            data-aos-duration="800"
            data-aos-easing="ease-out"
          >
            <img src="img/location.png" alt="location" id="location-icon" />
          </div>
        </Container>
      }
    />
  );
};

export default Title;
