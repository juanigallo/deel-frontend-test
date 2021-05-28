import React, { Component } from "react";
import Input from "../Input";
import Result from "../Result";
import "./style.css";

class Autocomplete extends Component {
  state = {
    inputValue: ""
  };

  handleInputChange(event) {
    const { value } = event.target.value;
    this.setState({
      inputValue: value
    });
  }

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

// import React, { useEffect, useState } from "react";

// export const useDebounce = (value, delay) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// };
