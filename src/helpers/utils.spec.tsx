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

describe("All utils tests", () => {
  describe("All createVisDataStruct tests", () => {
    test("All createVisDataStruct", () => {
      expect(createVisDataStruct(ShortForeCastList)).toEqual(VisibleDataList);
    });
  });

  describe("getPlusFiveDaysItems tests", () => {
    test("the five days forecast", () => {
      expect(getPlusFiveDaysItems(ForecastResponseList).length).toEqual(6);
    });
  });

  describe("getFourDaysPollution tests", () => {
    test("the five days forecast", () => {
      expect(getFourDaysPollution(FourDaysPollutionItems).length).toEqual(5);
    });
  });
});
