import { Component } from "react";
import "./style.css";

class Item extends Component {
  render() {
    const { value } = this.props;
    return <li className="item">{value}</li>;
  }
}

export default Item;
