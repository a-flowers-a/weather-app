import {
  createVisDataStruct,
  getFourDaysPollution,
  getPlusFiveDaysItems,
} from "./utils";
//Example data
import {
  ForecastResponseList,
  ShortForeCastList,
  VisibleDataList,
} from "../exampleData/weather";
import { FourDaysPollutionItems } from "../exampleData/pollution";
import { ForecastListItem, MainWeatherCondition } from "../types/weather";

describe("All utils tests", () => {
  describe("All createVisDataStruct tests", () => {
    test("Empty", () => {
      expect(createVisDataStruct([])).toEqual([]);
    });
    test("All createVisDataStruct", () => {
      expect(createVisDataStruct(ShortForeCastList)).toEqual(VisibleDataList);
    });
    test("One object without dt and main.temp prop (unexpected response)", () => {
      expect(
        createVisDataStruct([
          {
            main: {
              feels_like: 26.59,
              temp_min: 26.06,
              temp_max: 26.59,
              pressure: 1017,
              sea_level: 1017,
              grnd_level: 787,
              humidity: 22,
              temp_kf: 0.53,
            },
            weather: [
              {
                id: 803,
                main: "Clouds" as MainWeatherCondition,
                description: "broken clouds",
                icon: "04d",
              },
            ],
            clouds: { all: 75 },
            wind: { speed: 1.69, deg: 58, gust: 2.68 },
            visibility: 10000,
            pop: 0.17,
            sys: { pod: "d" },
            dt_txt: "2023-10-21 21:00:00",
          } as ForecastListItem,
        ])
      ).toEqual([
        {
          chanceOfRain: 0.17,
          description: "broken clouds",
          dt: undefined,
          main: "Clouds",
          temperature: undefined,
          wind: 1.69,
        },
      ]);
    });
  });

  describe("getPlusFiveDaysItems tests", () => {
    test("Empty array", () => {
      expect(getPlusFiveDaysItems([])).toEqual([]);
    });
    test("the five days forecast", () => {
      expect(getPlusFiveDaysItems(ForecastResponseList).length).toEqual(6);
    });
    test("Expected indexes", () => {
      expect(getPlusFiveDaysItems(ForecastResponseList)).toEqual([
        ForecastResponseList[0],
        ForecastResponseList[8 * 1 - 1],
        ForecastResponseList[8 * 2 - 1],
        ForecastResponseList[8 * 3 - 1],
        ForecastResponseList[8 * 4 - 1],
        ForecastResponseList[8 * 5 - 1],
      ]);
    });
  });

  describe("getFourDaysPollution tests", () => {
    test("Empty array", () => {
      expect(getFourDaysPollution([])).toEqual([]);
    });
    test("the five days forecast", () => {
      expect(getFourDaysPollution(FourDaysPollutionItems).length).toEqual(5);
    });
    test("Expected indexes", () => {
      expect(getFourDaysPollution(FourDaysPollutionItems)).toEqual([
        FourDaysPollutionItems[0],
        FourDaysPollutionItems[24 * 1 - 1],
        FourDaysPollutionItems[24 * 2 - 1],
        FourDaysPollutionItems[24 * 3 - 1],
        FourDaysPollutionItems[24 * 4 - 1],
      ]);
    });
  });
});
