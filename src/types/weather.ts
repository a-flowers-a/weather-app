export enum MainWeatherCondition {
  Thunderstorm = "Thunderstorm",
  Rain = "Rain",
  Snow = "Snow",
  Clouds = "Clouds",
  Clear = "Clear",
}
export interface ForecastListItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: MainWeatherCondition;
      description: string;
      icon: string;
    }
  ];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  rain?: { "3h": number };
  sys: { pod: string };
  dt_txt: string;
}

export interface ForecastResponse {
  cod: number;
  message: number;
  cnt: number;
  list: ForecastListItem[];
  city: {
    id: number;
    name: string;
    coord: { lat: number; lon: number };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export interface VisibleData {
  /**Temperature */
  temperature: number;
  /**String description for the weather */
  description: string;
  /**Main weather description */
  main: MainWeatherCondition;
  /**Wind's speed */
  wind: number;
  /**CHance of rain's percentage 0 to 1 */
  chanceOfRain: number;
}
