import {
  IconDefinition,
  faCircle,
  faCloud,
  faCloudBolt,
  faCloudRain,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import { MainWeatherCondition } from "../types/weather";

export const IconMap = new Map<MainWeatherCondition, IconDefinition>([
  [MainWeatherCondition.Clear, faCircle],
  [MainWeatherCondition.Clouds, faCloud],
  [MainWeatherCondition.Rain, faCloudRain],
  [MainWeatherCondition.Snow, faSnowflake],
  [MainWeatherCondition.Thunderstorm, faCloudBolt],
]);
