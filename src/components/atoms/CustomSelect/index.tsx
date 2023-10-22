//Types
import { CustomSelectProps } from "./types";
//Styles
import "./styles.scss";

function CustomSelect({
  id,
  label,
  options,
  handleOnChange,
}: CustomSelectProps) {
  if (options?.length === 0) {
    return null;
  }
  return (
    <div className="custom-select-container">
      <label className="custom-select-container__label" htmlFor={id}>
        {label}
      </label>
      <select
        className="custom-select-container__select"
        aria-label="select-input"
        id={id}
        defaultValue={options[0].value}
        name={id}
        onChange={handleOnChange}
      >
        {options.map((option) => {
          return (
            <option
              className="custom-select-container__option"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default CustomSelect;
