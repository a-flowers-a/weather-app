import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Types
import { DataIconProps } from "./types";
//Styles
import "./styles.scss";

function DataIcon({
  containerStyles,
  iconName,
  data,
  description,
  iconStyles,
}: DataIconProps) {
  return (
    <div className={`data-icon ${containerStyles}`}>
      <FontAwesomeIcon
        className={`data-icon__icon ${iconStyles}`}
        icon={iconName}
      />
      <span className="data-icon__data">{data}</span>
      <span className="data-icon__description">{description}</span>
    </div>
  );
}

export default DataIcon;
