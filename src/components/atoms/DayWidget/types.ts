import { VisibleData } from "../../../types/weather";

export interface DayWidgetProps {
  /**Forecast data to be shown*/
  forecast: Partial<VisibleData>;
  /**Styles to show it's the current weather */
  current?: boolean;
}
