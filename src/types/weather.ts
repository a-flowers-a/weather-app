export interface VisibleData {
  /**Temperature */
  temperature: number;
  /**String description for the weather */
  description: string;
  /**Wind's speed */
  wind: number;
  /**CHance of rain's percentage 0 to 1 */
  chanceOfRain: number;
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
  weather: [{ id: number; main: string; description: string; icon: string }];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  rain?: { "3h": number };
  sys: { pod: string };
  dt_txt: string;
}
