import { useCallback, useEffect, useState } from "react";
//Components
import WeatherCard from "../../components/molecules/WeatherCard";
import DayWidget from "../../components/atoms/DayWidget";
import CustomSelect from "../../components/atoms/CustomSelect";
import MessageModal from "../../components/molecules/MessageModal";
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
import { CityOptions, InputName } from "../../constants/inputs";
import { ErrorMessage } from "../../constants/weather";
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
  const [currentCity, setCurrentCity] = useState(CityOptions[0].label);
  const [showError, setShowError] = useState(false);

  /**
   * Calls the endpoints to get the weather and pollution forecast
   * for the given city, uses function to map and create structure for the
   * info as the components need so the info can be displayed.
   * @param latLong latitude and longitude string in format "lat,lon"
   */
  const handleFetchData = useCallback(
    async (latLon: string) => {
      try {
        setLoader(true);
        const [weathers, pollutions] = await Promise.all([
          getForecast(latLon),
          getPollution(latLon),
        ]);
        const fiveWeatherItems = getPlusFiveDaysItems(weathers.list);
        const recCity = weathers?.city?.name || "";
        const fiveDaysWeather = createVisDataStruct(fiveWeatherItems);
        const fiveDaysPollution = getFourDaysPollution(pollutions.list);
        setCurrentCity(recCity);
        setWeatherDays(fiveDaysWeather);
        setPollutionDays(fiveDaysPollution);
      } catch (error) {
        console.log("error at handleFetchData>>>", error);
        setShowError(true);
      } finally {
        setLoader(false);
      }
    },
    [setLoader]
  );

  //First render get forecast for the first position city
  useEffect(() => {
    handleFetchData(CityOptions[0].value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="base-page">
      {showError && (
        <MessageModal
          message={ErrorMessage.FetchingData}
          handleClick={() => setShowError(false)}
        />
      )}
      <WeatherCard
        city={currentCity}
        forecast={weatherDays[dayIndex] || {}}
        pollution={pollutionDays[dayIndex]}
      />
      <div className="home-container__day-widgets">
        {weatherDays.map((weatherDay, index) => (
          <div
            key={weatherDay?.dt || index}
            className={
              index !== weatherDays.length - 1
                ? "home-container__day-widget-container"
                : ""
            }
          >
            <DayWidget
              current={dayIndex === index}
              forecast={weatherDay}
              handleOnClick={() => setDayIndex(index)}
            />
          </div>
        ))}
      </div>
      <div className="home-container__select-container">
        <CustomSelect
          id={InputName.CitySelect}
          label="US capital City"
          options={CityOptions}
          handleOnChange={(event) => handleFetchData(event.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;
