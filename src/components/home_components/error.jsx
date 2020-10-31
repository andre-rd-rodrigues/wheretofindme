import React from "react";

import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Container
      fluid
      id="notFound-container"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <Image src="img/space.png" height="250px" className="space-effect" />

      <h1 style={{ fontWeight: "700" }}> PAGE NOT FOUND</h1>
      <p className="text-muted " style={{ fontWeight: "600" }}>
        Error 404
      </p>
      <p className="my-4">
        Oops! Looks like the page you're looking doesn't exist.
      </p>

      <Link to="/" className="btn btn-info">
        Take me back
      </Link>
    </Container>
  );
};

export default Error;
