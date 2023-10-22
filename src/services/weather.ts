import HttppAgent from "./HtppAgent";
//Types
import { ForecastResponse } from "../types/weather";
import { PollutionResponse } from "../types/pollution";

/**
 * Services using http://api.openweathermap.org/data/2.5 API
 * @see https://home.openweathermap.org/
 */

/**
 * Performs GET request to get the forecast for the given city
 * @param latLong latitude and longitude string in format "lat,lon"
 * @returns
 */
export function getForecast(latLong: string): Promise<ForecastResponse> {
  const [lat, lon] = latLong.split(",");
  const url = `${process.env.REACT_APP_BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_WE_KEY}`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
  }) as Promise<ForecastResponse>;
}

/**
 * Performs GET request to get the air pollution
 * @param latLong latitude and longitude string in format "lat,lon"
 * @returns
 */
export function getPollution(latLong: string): Promise<PollutionResponse> {
  const [lat, lon] = latLong.split(",");
  const url = `${process.env.REACT_APP_BASE_URL}/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WE_KEY}`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
  }) as Promise<PollutionResponse>;
}
