import React, { Component } from "react";

class DivImg extends Component {
  render() {
    const { img, position } = this.props;
    const styles = {
      background: `url(${img}) no-repeat center ${position}`,
      backgroundSize: "cover",
    };
    return <div style={styles} className="mx-auto serviceLink-images"></div>;
  }
}

export default DivImg;
