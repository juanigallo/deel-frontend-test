import { Component } from "react";
import Item from "components/Item";
import Loader from "components/Loader";
import "./style.css";

class Result extends Component {
  formatItem = (itemData) => {
    const { keysToShow } = this.props;

    return keysToShow
      .reduce((result, elem) => {
        if (itemData[elem]) {
          result.push(itemData[elem]);
        }

        return result;
      }, [])
      .join(" ");
  };

  render() {
    const { value, isLoading, inputValue } = this.props;
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
                  return (
                    <Item
                      key={key}
                      value={this.formatItem(result)}
                      inputValue={inputValue}
                    />
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
}

export default Result;
