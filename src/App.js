import "./App.css";
import Autocomplete from "components/Autocomplete";
import mockedData from "data/mocked.json";

function App() {
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
          apiUrl="https://deel.juanigallo.com/api/search?q="
        />
      </section>
    </>
  );
}

export default App;
