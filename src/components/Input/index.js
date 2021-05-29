import Icon from "components/Icon";
import "./style.css";

function Input({ value, onChange, icon, placeholder }) {
  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {icon && <Icon value={icon} className="pointer" />}
    </div>
  );
}

export default Input;
