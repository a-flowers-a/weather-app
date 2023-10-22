import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeSimple,
  faTemperatureHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
//Components
import DataIcon from "../DataIcon";
//Types & consts
import { WeatherCardProps } from "./types";
import { IconMap } from "../../../constants/weather";
import { MainWeatherCondition } from "../../../types/weather";
//Styles
import "./styles.scss";

function WeatherCard({ city, pollution, forecast }: WeatherCardProps) {
  const temperature = forecast?.temperature
    ? `${Math.round(forecast.temperature)}°`
    : "- - -";
  const windSpeed = forecast?.wind ? `${Math.round(forecast?.wind)}` : "- - -";
  const airQuality = pollution?.main?.aqi || "- - -";
  const mainWeatherDesc = forecast?.main || ("" as MainWeatherCondition);
  const iconName = IconMap.get(mainWeatherDesc) || faTemperatureHalf;

  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <span>{city}</span>
      </div>
      <div className="weather-card__main-container">
        <div className="weather-card__temp-container">
          <span className="weather-card__temp">{temperature}</span>
          <span className="weather-card__description">
            {forecast.description || "- - -"}
          </span>
        </div>
        <FontAwesomeIcon className="weather-card__icon" icon={iconName} />
      </div>
      <div className="weather-card__footer">
        <DataIcon
          containerStyles="weather-card__first-data-icon"
          description="Wind"
          iconName={faWind}
          data={windSpeed}
        />
        <DataIcon
          description="Air quality"
          iconName={faGaugeSimple}
          data={`${airQuality}`}
        />
      </div>
    </div>
  );
}

export default WeatherCard;
