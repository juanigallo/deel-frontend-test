import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./components/Autocomplete";
import mockedData from "./data/mocked.json";

class App extends Component {
  render() {
    return (
      <>
        <section className="container">
          <h1>Autocomplete</h1>
          <Autocomplete
            placeholder="Start typing to search"
            icon="search"
            data={mockedData}
            keysToSearch={["name", "surname"]}
            keysToShow={["name", "surname"]}
            apiUrl="http://64.227.26.24:3010/api/search?q="
          />
        </section>
      </>
    );
  }
}

export default App;
