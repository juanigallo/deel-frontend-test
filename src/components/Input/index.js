import React, { Component } from "react";
import Icon from "../Icon";
import "./style.css";

class Input extends Component {
  render() {
    const { value, onChange, icon, placeholder } = this.props;
    return (
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder}
        />
        {icon && <Icon value={icon} className="pointer" />}
      </div>
    );
  }
}

export default Input;
