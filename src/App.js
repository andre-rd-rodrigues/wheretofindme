import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import ServicesLink from "./components/servicesLink";
import ContactLink from "./components/contactLink";
import AboutLink from "./components/aboutLink";
import Reviews from "./components/reviews";
import Error from "./components/home_components/error";
import ScrollRestoration from "react-scroll-restoration";
import "./scss/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ScrollRestoration />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutLink} />
          <Route path="/services" component={ServicesLink} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={ContactLink} />
          <Route component={Error} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
