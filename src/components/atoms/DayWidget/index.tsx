import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
//Types & COnsts
import { DayWidgetProps } from "./types";
import { MainWeatherCondition } from "../../../types/weather";
import { IconMap } from "../../../constants/weather";
//Styles
import "./styles.scss";

function DayWidget({ current, forecast, handleOnClick }: DayWidgetProps) {
  const temperature = forecast?.temperature
    ? `${Math.round(forecast.temperature)}°`
    : "- - -";
  const mainWeatherDesc = forecast?.main || ("" as MainWeatherCondition);
  const iconName = IconMap.get(mainWeatherDesc) || faTemperatureHalf;
  const colorStyle = current ? "current" : "normal";
  return (
    <button
      onClick={handleOnClick}
      className={`day-widget day-widget__${colorStyle}`}
    >
      <span className="day-widget__temp">{temperature}</span>
      <FontAwesomeIcon className="day-widget__icon" icon={iconName} />
      <span className="day-widget__day">Wed</span>
    </button>
  );
}

export default DayWidget;
