import { useCallback, useEffect, useState } from "react";
//Components
import WeatherCard from "../../components/molecules/WeatherCard";
import DayWidget from "../../components/atoms/DayWidget";
//Services & helpers
import {
  createVisDataStruct,
  getFourDaysPollution,
  getPlusFiveDaysItems,
} from "../../helpers/utils";
import { getForecast, getPollution } from "../../services/weather";
//Context
import { LoaderContext } from "../../context/LoaderProvider/context";
//Types
import { VisibleData } from "../../types/weather";
import { PollutionItem } from "../../types/pollution";
//Styles
import "../../globalStyles/shared.scss";
import "./styles.scss";

function Home() {
  //Context
  const {
    actions: { setLoader },
  } = LoaderContext();
  //States
  const [weatherDays, setWeatherDays] = useState<VisibleData[]>([]);
  const [pollutionDays, setPollutionDays] = useState<PollutionItem[]>([]);
  const [dayIndex, setDayIndex] = useState(0);

  const handleFetchData = useCallback(async () => {
    try {
      setLoader(true);
      const [weathers, pollutions] = await Promise.all([
        getForecast(),
        getPollution(),
      ]);
      const fiveWeatherItems = getPlusFiveDaysItems(weathers.list);
      const fiveDaysWeather = createVisDataStruct(fiveWeatherItems);
      const fiveDaysPollution = getFourDaysPollution(pollutions.list);
      setWeatherDays(fiveDaysWeather);
      setPollutionDays(fiveDaysPollution);
    } catch (error) {
      console.log("error at handleFetchData>>>", error);
    } finally {
      setLoader(false);
    }
  }, [setLoader]);

  useEffect(() => {
    handleFetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-page">
      <WeatherCard
        city="Wow"
        forecast={weatherDays[dayIndex] || {}}
        pollution={pollutionDays[dayIndex]}
      />
      <div className="home-container__day-widgets">
        {weatherDays.map((weatherDay, index) => (
          <div
            className={
              index !== weatherDays.length - 1
                ? "home-container__day-widget-container"
                : ""
            }
          >
            <DayWidget
              key={index}
              current={dayIndex === index}
              forecast={weatherDay}
              handleOnClick={() => setDayIndex(index)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleFetchData}>Refetch data</button>
    </div>
  );
}

export default Home;
