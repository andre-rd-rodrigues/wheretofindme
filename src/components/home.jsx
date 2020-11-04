import React from "react";
import Services from "./home_components/services";
import Title from "./home_components/title";
import About from "./home_components/about";
import Footer from "./home_components/footer";
import Quote from "./home_components/quote";
import You from "./home_components/you";
import Parallax from "./commons/parallax";

const Home = () => {
  return (
    <React.Fragment>
      <Title />
      <Quote />
      <Parallax img="img/homeParallax1.jpeg" height="450px" />
      <About />
      <Services />
      <Parallax img="img/homeParallax2.jpeg" height="450px" />
      <You />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
