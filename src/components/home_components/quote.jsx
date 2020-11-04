import React from "react";
import { Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Quote = () => {
  return (
    <Container className="text-center" id="quote-container">
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <p id="quote">
          "From the moment we set out to create Where to Find Me, we knew we
          wanted to deliver a <b>refined experience</b> accessible to all. With
          the same unparalleled dedication, iconic places and meticulous
          approach to selecting your perfect diamond, all you have to do is say
          where we can find you."
        </p>

        <video autoPlay loop width="500px" id="signature-video">
          <source src={"video/sign.mp4"} type="video/mp4" />
        </video>
      </div>
    </Container>
  );
};

export default Quote;
