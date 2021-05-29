import React, { Component } from "react";
import "./style.css";

class Icon extends Component {
  render() {
    const { value, className } = this.props;

    return (
      <img
        className={`icon ${className}`}
        src={`../../public/icons/${value}.svg`}
      />
    );
  }
}

export default Icon;
