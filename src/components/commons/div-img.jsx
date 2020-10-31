import React, { Component } from "react";

class DivImg extends Component {
  render() {
    const { img, position } = this.props;
    const styles = {
      background: `url(${img}) no-repeat center ${position}`,
      backgroundSize: "cover",
      height: "400px",
      width: "400px",
    };
    return <div style={styles} className="mx-auto"></div>;
  }
}

export default DivImg;
