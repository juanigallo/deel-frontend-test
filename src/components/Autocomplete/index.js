import React, { Component } from "react";
import { debounce } from "../../utils/debounce";
import Input from "../Input";
import Result from "../Result";
import "./style.css";

class Autocomplete extends Component {
  state = {
    inputValue: ""
  };

  handleSearch = debounce((val) => {
    console.log("test", val);
  });

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState(
      {
        inputValue: value
      },
      () => {
        this.handleSearch(value);
      }
    );
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className="autocomplete-container">
        <Input
          value={inputValue}
          onChange={(e) => this.handleInputChange(e)}
          icon="search"
        />
        <Result value={[]} isLoading={false} />
      </div>
    );
  }
}

export default Autocomplete;
