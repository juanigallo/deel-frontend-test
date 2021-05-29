import Item from "components/Item";
import Loader from "components/Loader";
import "./style.css";

function Result({ keysToShow, value, isLoading, inputValue }) {
  const formatItem = (itemData) => {
    return keysToShow
      .reduce((result, elem) => {
        if (itemData[elem]) {
          result.push(itemData[elem]);
        }

        return result;
      }, [])
      .join(" ");
  };

  return (
    <>
      {isLoading ? (
        <div className="loading-container">
          <Loader label="Loading" />
        </div>
      ) : (
        <>
          {value?.length > 0 ? (
            <ul className="result-container">
              {value?.map((result, key) => {
                const resultToStr = formatItem(result);
                return (
                  <Item key={key} value={resultToStr} inputValue={inputValue} />
                );
              })}
            </ul>
          ) : (
            <div className="loading-container">
              <p>There were no results for this search</p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Result;
