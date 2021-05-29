import "./style.css";

function Item({ value, inputValue }) {
  const highlightText = (text, highlight) => {
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

  return <li className="item">{highlightText(value, inputValue)}</li>;
}

export default Item;
