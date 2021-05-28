import { Component } from "react";
import Icon from "components/Icon";
import "./style.css";

class Input extends Component {
  render() {
    const { value, onChange, icon } = this.props;
    return (
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => onChange(e)}
        />
        {icon && <Icon value={icon} className="pointer" />}
      </div>
    );
  }
}

export default Input;
