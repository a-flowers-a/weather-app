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
 * @returns
 */
export function getForecast(): Promise<ForecastResponse> {
  const url = `${process.env.REACT_APP_BASE_URL}/forecast?q=Mexico City,mx&units=metric&appid=${process.env.REACT_APP_WE_KEY}`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
  }) as Promise<ForecastResponse>;
}

/**
 * Performs GET request to get the air pollution
 * @returns
 */
export function getPollution(): Promise<PollutionResponse> {
  const url = `${process.env.REACT_APP_BASE_URL}/air_pollution/forecast?lat=19.375&lon=-99.125&appid=${process.env.REACT_APP_WE_KEY}`;
  const axiosAgent = HttppAgent.getAgent();
  return axiosAgent.doRequest({
    method: "GET",
    url,
  }) as Promise<PollutionResponse>;
}
