import { Component } from "react";
import "./style.css";

class Item extends Component {
  highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === highlight.toLowerCase() ? "highlight" : ""
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  };

  render() {
    const { value, inputValue } = this.props;
    return <li className="item">{this.highlightText(value, inputValue)}</li>;
  }
}

export default Item;
