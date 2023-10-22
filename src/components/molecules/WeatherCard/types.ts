import { PollutionItem } from "../../../types/pollution";
import { VisibleData } from "../../../types/weather";

export interface WeatherCardProps {
  /**City Name */
  city: string;
  /**Pollution Data */
  pollution: PollutionItem;
  /**Forecast data to be shown*/
  forecast: Partial<VisibleData>;
}
