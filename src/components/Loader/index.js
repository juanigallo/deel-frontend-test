import "./style.css";

function Loader({ label }) {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      {label && <span className="label">{label}</span>}
    </div>
  );
}

export default Loader;
