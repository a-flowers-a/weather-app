import { useCallback, useEffect, useState } from "react";
//Components
import WeatherCard from "../../components/molecules/WeatherCard";
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
        forecast={weatherDays[0] || {}}
        pollution={pollutionDays[0]}
      />
      <button onClick={handleFetchData}>Refetch data</button>
    </div>
  );
}

export default Home;
