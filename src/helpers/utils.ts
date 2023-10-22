import { PollutionItem } from "../types/pollution";
import { ForecastListItem, VisibleData } from "../types/weather";

/**
 * Generates the structure needed to show info in the weather card
 * for each item in the forecast response
 * @param list the list received in the forecast response
 * @returns the structure to show the details in card
 */
export function createVisDataStruct(list: ForecastListItem[]): VisibleData[] {
  const visibleDataList: VisibleData[] = [];
  list.forEach((forecast) => {
    visibleDataList.push({
      temperature: forecast.main.temp,
      description: forecast.weather[0].description,
      wind: forecast.wind.speed,
      chanceOfRain: forecast.pop,
    });
  });
  return visibleDataList;
}

/**
 * Gets only one forecast per day from the passed list of forecast.
 * Assuming it has an item for every 3 hours for next 5 days.
 * @param list list of forecast for 5 days every 3 hours in forecast
 * response
 * @returns array of just one forecast per day + today (6 length)
 */
export function getPlusFiveDaysItems(
  list: ForecastListItem[]
): ForecastListItem[] {
  return list.filter((_item, index) => index === 0 || (index + 1) % 8 === 0);
}

/**
 * Gets only one pollution forecast per day from the passed list of forecast.
 * Assuming it has an item for every hour for next 4 days.
 * @param list list of forecast for 4 days every hour in pollution forecast
 * response
 * @returns array of just one pollution forecast per day + today (5 length)
 */
export function getFourDaysPollution(list: PollutionItem[]): PollutionItem[] {
  return list.filter((_item, index) => index === 0 || (index + 1) % 24 === 0);
}
