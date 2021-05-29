import { useState, useEffect } from "react";
import { useDebounce } from "hooks/useDebounce";
import { fetcher } from "utils/fetcher";
import Input from "components/Input";
import Result from "components/Result";
import "./style.css";

function Autocomplete({
  placeholder,
  icon,
  keysToShow,
  apiUrl,
  debounceTime,
  keysToSearch,
  data
}) {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedInputValue = useDebounce(inputValue, debounceTime ?? 300);

  useEffect(() => {
    if (inputValue != "") {
      if (data) {
        filterLocalData(data, inputValue);
      }
      if (apiUrl) {
        handleSearch(inputValue);
      }
    }
  }, [debouncedInputValue]);

  useEffect(() => {
    if (result.length != 0) {
      setIsLoading(false);
    }
  }, [result]);

  // Fetch data from external source. Not applying any filtering in here
  const handleSearch = async (val) => {
    try {
      const data = await fetcher(`${apiUrl}${val}`);

      setResult((prevState) => [...prevState, ...data]);

      if (data?.length == 0 && result?.length == 0) {
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Data from internal source. This function filters the data.
  const filterLocalData = (data, searchValue) => {
    if (!keysToSearch || keysToSearch.length == 0) return [];

    const normalizedSearchValue = normalizeValue(searchValue);

    const filteredResult = data.filter((unique) => {
      const joinedSearch = keysToSearch
        .map((key) => {
          return normalizeValue(unique[key]);
        })
        .join(" ");

      return joinedSearch.includes(normalizedSearchValue);
    });

    setResult((prevState) => [...prevState, ...filteredResult]);
    if (filteredResult?.length == 0 && result?.length) {
      setIsLoading(false);
    }
  };

  const normalizeValue = (val) => {
    return val.toLowerCase();
  };

  const handleInputChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
    setIsLoading(true);
    setResult([]);
  };

  return (
    <div className="autocomplete-container">
      <Input
        value={inputValue}
        onChange={handleInputChange}
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

export default Autocomplete;
