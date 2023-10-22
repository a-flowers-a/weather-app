//Types
import { WeatherCardProps } from "./types";
//Styles
import "./styles.scss";

function WeatherCard({ city, pollution, forecast }: WeatherCardProps) {
  const temperature = forecast?.temperature
    ? `${Math.round(forecast.temperature)}°`
    : "- - -";
  const windSpeed = forecast?.wind ? `${Math.round(forecast?.wind)}` : "- - -";
  const airQuality = pollution?.main?.aqi ? pollution?.main?.aqi : "- - -";
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
        <div className="weather-card__icon-container">
          <img
            className="weather-card__img"
            src={"dogData.img"}
            alt="Weather icon"
          />
        </div>
      </div>
      <div className="weather-card__footer">
        <span>{windSpeed}</span>
        <span>{airQuality}</span>
      </div>
    </div>
  );
}

export default WeatherCard;
