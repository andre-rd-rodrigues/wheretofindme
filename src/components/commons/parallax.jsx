import React, { Component } from "react";

class Parallax extends Component {
  render() {
    const { img, title, height, gradient } = this.props;
    const handleGradient = (gradient) => {
      return gradient === true
        ? "linear-gradient(to bottom,  rgba(12, 12, 12, 0.52), rgba(31, 31, 31, 0.845)),"
        : "";
    };
    const styles = {
      background: `${handleGradient(
        gradient
      )}url(${img}) fixed no-repeat center center`,
      backgroundSize: "cover",
      height: height,
    };
    return (
      <div
        fluid
        style={styles}
        className="d-flex flex-column align-items-center justify-content-center text-white fade"
      >
        {title}
      </div>
    );
  }
}

export default Parallax;
