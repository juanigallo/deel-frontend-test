import React, { Component } from "react";
import { debounce } from "../../utils/debounce";
import { fetcher } from "../../utils/fetcher";
import Input from "../Input";
import Result from "../Result";
import "./style.css";

class Autocomplete extends Component {
  state = {
    inputValue: "",
    result: [],
    isLoading: false
  };

  // Fetch data from external source. Not applying any filtering in here
  handleSearch = debounce(async (val) => {
    const { apiUrl } = this.props;
    try {
      const data = await fetcher(`${apiUrl}${val}`);

      this.setState({
        result: [...this.state.result, ...data],
        isLoading: false
      });
    } catch (err) {
      console.log(err);
    }
  }, this.props.debounceTime ?? 300);

  // Data from internal source. This function filters the data.
  filterLocalData = debounce((data, searchValue) => {
    const { keysToSearch } = this.props;
    if (!keysToSearch || keysToSearch.length == 0) return [];

    const normalizedSearchValue = this.normalizeValue(searchValue);

    const result = data.filter((unique) => {
      const joinedSearch = keysToSearch
        .map((key) => {
          return this.normalizeValue(unique[key]);
        })
        .join(" ");

      return joinedSearch.includes(normalizedSearchValue);
    });

    this.setState({
      result: [...this.state.result, ...result],
      isLoading: false
    });
  });

  normalizeValue = (val) => {
    return val.toLowerCase();
  };

  handleInputChange = (event) => {
    const { value } = event.target;

    this.setState(
      {
        inputValue: value,
        isLoading: true,
        result: []
      },
      () => {
        const { data, apiUrl } = this.props;
        if (value != "") {
          if (data) {
            this.filterLocalData(data, value);
          }
          if (apiUrl) {
            this.handleSearch(value);
          }
        }
      }
    );
  };

  render() {
    const { inputValue, result, isLoading } = this.state;
    const { placeholder, icon, keysToShow } = this.props;
    return (
      <div className="autocomplete-container">
        <Input
          value={inputValue}
          onChange={(e) => this.handleInputChange(e)}
          placeholder={placeholder}
          icon={icon}
        />
        {inputValue != "" && (
          <Result
            value={result}
            isLoading={isLoading}
            keysToShow={keysToShow}
            inputValue={inputValue}
          />
        )}
      </div>
    );
  }
}

export default Autocomplete;
