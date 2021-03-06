import { Component } from "react";
import "./style.css";

class Icon extends Component {
  render() {
    const { value, className } = this.props;

    return <img className={`icon ${className}`} src={`/icons/${value}.svg`} />;
  }
}

export default Icon;
