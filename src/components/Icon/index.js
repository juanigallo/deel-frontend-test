import "./style.css";

function Icon({ value, className }) {
  return <img className={`icon ${className}`} src={`/icons/${value}.svg`} />;
}

export default Icon;
