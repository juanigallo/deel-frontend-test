import React, { Component } from "react";
import "./style.css";

class Loader extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className="loader-container">
        <div className="loader"></div>
        {label && <span className="label">{label}</span>}
      </div>
    );
  }
}

export default Loader;
