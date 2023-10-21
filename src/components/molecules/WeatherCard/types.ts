import { VisibleData } from "../../../types/weather";

export interface WeatherCardProps {
  /**City Name */
  city: string;
  /**Pollution Data */
  pollution: number;
  /**Forecast data to be shown*/
  forecast: Partial<VisibleData>;
}
