import {
  ForecastListItem,
  MainWeatherCondition,
  VisibleData,
} from "../types/weather";

export const ShortForeCastList: ForecastListItem[] = [
  {
    dt: 1697922000,
    main: {
      temp: 26.59,
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
  },
  {
    dt: 1697932800,
    main: {
      temp: 25.22,
      feels_like: 24.53,
      temp_min: 22.47,
      temp_max: 25.22,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 785,
      humidity: 28,
      temp_kf: 2.75,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 82 },
    wind: { speed: 2.36, deg: 155, gust: 2.91 },
    visibility: 10000,
    pop: 0.31,
    rain: { "3h": 0.19 },
    sys: { pod: "d" },
    dt_txt: "2023-10-22 00:00:00",
  },
  {
    dt: 1697943600,
    main: {
      temp: 21.46,
      feels_like: 20.89,
      temp_min: 18.89,
      temp_max: 21.46,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 786,
      humidity: 47,
      temp_kf: 2.57,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 85 },
    wind: { speed: 0.88, deg: 149, gust: 2.61 },
    visibility: 10000,
    pop: 0.13,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 03:00:00",
  },
  {
    dt: 1697954400,
    main: {
      temp: 17.57,
      feels_like: 17.05,
      temp_min: 17.57,
      temp_max: 17.57,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 785,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 86 },
    wind: { speed: 0.67, deg: 158, gust: 1.47 },
    visibility: 10000,
    pop: 0.14,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 06:00:00",
  },
];

export const VisibleDataList: VisibleData[] = [
  {
    temperature: 26.59,
    main: MainWeatherCondition.Clouds,
    description: "broken clouds",
    wind: 1.69,
    chanceOfRain: 0.17,
  },
  {
    temperature: 25.22,
    main: MainWeatherCondition.Rain,
    description: "light rain",
    wind: 2.36,
    chanceOfRain: 0.31,
  },
  {
    temperature: 21.46,
    main: MainWeatherCondition.Clouds,
    description: "overcast clouds",
    wind: 0.88,
    chanceOfRain: 0.13,
  },
  {
    temperature: 17.57,
    main: MainWeatherCondition.Clouds,
    description: "overcast clouds",
    wind: 0.67,
    chanceOfRain: 0.14,
  },
];

export const ForecastResponseList: ForecastListItem[] = [
  {
    dt: 1697922000,
    main: {
      temp: 26.59,
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
  },
  {
    dt: 1697932800,
    main: {
      temp: 25.22,
      feels_like: 24.53,
      temp_min: 22.47,
      temp_max: 25.22,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 785,
      humidity: 28,
      temp_kf: 2.75,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 82 },
    wind: { speed: 2.36, deg: 155, gust: 2.91 },
    visibility: 10000,
    pop: 0.31,
    rain: { "3h": 0.19 },
    sys: { pod: "d" },
    dt_txt: "2023-10-22 00:00:00",
  },
  {
    dt: 1697943600,
    main: {
      temp: 21.46,
      feels_like: 20.89,
      temp_min: 18.89,
      temp_max: 21.46,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 786,
      humidity: 47,
      temp_kf: 2.57,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 85 },
    wind: { speed: 0.88, deg: 149, gust: 2.61 },
    visibility: 10000,
    pop: 0.13,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 03:00:00",
  },
  {
    dt: 1697954400,
    main: {
      temp: 17.57,
      feels_like: 17.05,
      temp_min: 17.57,
      temp_max: 17.57,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 785,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 86 },
    wind: { speed: 0.67, deg: 158, gust: 1.47 },
    visibility: 10000,
    pop: 0.14,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 06:00:00",
  },
  {
    dt: 1697965200,
    main: {
      temp: 16.41,
      feels_like: 15.91,
      temp_min: 16.41,
      temp_max: 16.41,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 784,
      humidity: 69,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 68 },
    wind: { speed: 0.5, deg: 162, gust: 1.08 },
    visibility: 10000,
    pop: 0.03,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 09:00:00",
  },
  {
    dt: 1697976000,
    main: {
      temp: 15.51,
      feels_like: 15,
      temp_min: 15.51,
      temp_max: 15.51,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 784,
      humidity: 72,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 69 },
    wind: { speed: 0.78, deg: 162, gust: 1.21 },
    visibility: 10000,
    pop: 0.03,
    sys: { pod: "n" },
    dt_txt: "2023-10-22 12:00:00",
  },
  {
    dt: 1697986800,
    main: {
      temp: 18.91,
      feels_like: 18.42,
      temp_min: 18.91,
      temp_max: 18.91,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 787,
      humidity: 60,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 89 },
    wind: { speed: 0.9, deg: 150, gust: 1.12 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-22 15:00:00",
  },
  {
    dt: 1697997600,
    main: {
      temp: 24.42,
      feels_like: 23.78,
      temp_min: 24.42,
      temp_max: 24.42,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 787,
      humidity: 33,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 88 },
    wind: { speed: 0.84, deg: 107, gust: 1.54 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-22 18:00:00",
  },
  {
    dt: 1698008400,
    main: {
      temp: 25.99,
      feels_like: 25.99,
      temp_min: 25.99,
      temp_max: 25.99,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 785,
      humidity: 27,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 0.59, deg: 70, gust: 1.84 },
    visibility: 10000,
    pop: 0.31,
    sys: { pod: "d" },
    dt_txt: "2023-10-22 21:00:00",
  },
  {
    dt: 1698019200,
    main: {
      temp: 21.98,
      feels_like: 21.51,
      temp_min: 21.98,
      temp_max: 21.98,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 784,
      humidity: 49,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 95 },
    wind: { speed: 3.2, deg: 182, gust: 4.31 },
    visibility: 10000,
    pop: 0.38,
    rain: { "3h": 0.27 },
    sys: { pod: "d" },
    dt_txt: "2023-10-23 00:00:00",
  },
  {
    dt: 1698030000,
    main: {
      temp: 19.46,
      feels_like: 19.08,
      temp_min: 19.46,
      temp_max: 19.46,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 785,
      humidity: 62,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 1.56, deg: 154, gust: 4.99 },
    visibility: 10000,
    pop: 0.3,
    sys: { pod: "n" },
    dt_txt: "2023-10-23 03:00:00",
  },
  {
    dt: 1698040800,
    main: {
      temp: 18.08,
      feels_like: 17.72,
      temp_min: 18.08,
      temp_max: 18.08,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 784,
      humidity: 68,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 1.12, deg: 145, gust: 2.3 },
    visibility: 10000,
    pop: 0.35,
    rain: { "3h": 0.23 },
    sys: { pod: "n" },
    dt_txt: "2023-10-23 06:00:00",
  },
  {
    dt: 1698051600,
    main: {
      temp: 17.25,
      feels_like: 16.91,
      temp_min: 17.25,
      temp_max: 17.25,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 783,
      humidity: 72,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 0.58, deg: 127, gust: 1.7 },
    visibility: 10000,
    pop: 0.37,
    rain: { "3h": 0.48 },
    sys: { pod: "n" },
    dt_txt: "2023-10-23 09:00:00",
  },
  {
    dt: 1698062400,
    main: {
      temp: 16.73,
      feels_like: 16.31,
      temp_min: 16.73,
      temp_max: 16.73,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 784,
      humidity: 71,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 99 },
    wind: { speed: 0.54, deg: 95, gust: 1.23 },
    visibility: 10000,
    pop: 0.33,
    rain: { "3h": 0.42 },
    sys: { pod: "n" },
    dt_txt: "2023-10-23 12:00:00",
  },
  {
    dt: 1698073200,
    main: {
      temp: 18.85,
      feels_like: 18.44,
      temp_min: 18.85,
      temp_max: 18.85,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 786,
      humidity: 63,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 88 },
    wind: { speed: 0.7, deg: 83, gust: 0.77 },
    visibility: 10000,
    pop: 0.28,
    rain: { "3h": 0.18 },
    sys: { pod: "d" },
    dt_txt: "2023-10-23 15:00:00",
  },
  {
    dt: 1698084000,
    main: {
      temp: 23.39,
      feels_like: 23.01,
      temp_min: 23.39,
      temp_max: 23.39,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 786,
      humidity: 47,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 81 },
    wind: { speed: 0.54, deg: 88, gust: 1.35 },
    visibility: 10000,
    pop: 0.29,
    rain: { "3h": 0.39 },
    sys: { pod: "d" },
    dt_txt: "2023-10-23 18:00:00",
  },
  {
    dt: 1698094800,
    main: {
      temp: 24.63,
      feels_like: 24.19,
      temp_min: 24.63,
      temp_max: 24.63,
      pressure: 1007,
      sea_level: 1007,
      grnd_level: 784,
      humidity: 40,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 70 },
    wind: { speed: 1.67, deg: 158, gust: 2.11 },
    visibility: 10000,
    pop: 0.66,
    rain: { "3h": 0.71 },
    sys: { pod: "d" },
    dt_txt: "2023-10-23 21:00:00",
  },
  {
    dt: 1698105600,
    main: {
      temp: 19,
      feels_like: 18.78,
      temp_min: 19,
      temp_max: 19,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 783,
      humidity: 70,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 83 },
    wind: { speed: 1.66, deg: 194, gust: 3.58 },
    visibility: 10000,
    pop: 0.85,
    rain: { "3h": 2.31 },
    sys: { pod: "d" },
    dt_txt: "2023-10-24 00:00:00",
  },
  {
    dt: 1698116400,
    main: {
      temp: 17.83,
      feels_like: 17.63,
      temp_min: 17.83,
      temp_max: 17.83,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 784,
      humidity: 75,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: "Rain" as MainWeatherCondition,
        description: "moderate rain",
        icon: "10n",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 1.8, deg: 215, gust: 2.88 },
    visibility: 10000,
    pop: 1,
    rain: { "3h": 5.19 },
    sys: { pod: "n" },
    dt_txt: "2023-10-24 03:00:00",
  },
  {
    dt: 1698127200,
    main: {
      temp: 16.79,
      feels_like: 16.48,
      temp_min: 16.79,
      temp_max: 16.79,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 784,
      humidity: 75,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 90 },
    wind: { speed: 2.09, deg: 204, gust: 3.49 },
    visibility: 10000,
    pop: 0.99,
    rain: { "3h": 2.13 },
    sys: { pod: "n" },
    dt_txt: "2023-10-24 06:00:00",
  },
  {
    dt: 1698138000,
    main: {
      temp: 16.39,
      feels_like: 16.07,
      temp_min: 16.39,
      temp_max: 16.39,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 783,
      humidity: 76,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 93 },
    wind: { speed: 1.31, deg: 209, gust: 2.02 },
    visibility: 10000,
    pop: 0.62,
    rain: { "3h": 0.37 },
    sys: { pod: "n" },
    dt_txt: "2023-10-24 09:00:00",
  },
  {
    dt: 1698148800,
    main: {
      temp: 15.97,
      feels_like: 15.66,
      temp_min: 15.97,
      temp_max: 15.97,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 783,
      humidity: 78,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 87 },
    wind: { speed: 0.77, deg: 142, gust: 1.24 },
    visibility: 10000,
    pop: 0.54,
    sys: { pod: "n" },
    dt_txt: "2023-10-24 12:00:00",
  },
  {
    dt: 1698159600,
    main: {
      temp: 18.66,
      feels_like: 18.28,
      temp_min: 18.66,
      temp_max: 18.66,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 786,
      humidity: 65,
      temp_kf: 0,
    },
    weather: [
      {
        id: 802,
        main: "Clouds" as MainWeatherCondition,
        description: "scattered clouds",
        icon: "03d",
      },
    ],
    clouds: { all: 47 },
    wind: { speed: 0.54, deg: 136, gust: 0.8 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-24 15:00:00",
  },
  {
    dt: 1698170400,
    main: {
      temp: 23.21,
      feels_like: 22.81,
      temp_min: 23.21,
      temp_max: 23.21,
      pressure: 1012,
      sea_level: 1012,
      grnd_level: 787,
      humidity: 47,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 69 },
    wind: { speed: 1.17, deg: 99, gust: 1.28 },
    visibility: 10000,
    pop: 0.31,
    rain: { "3h": 0.23 },
    sys: { pod: "d" },
    dt_txt: "2023-10-24 18:00:00",
  },
  {
    dt: 1698181200,
    main: {
      temp: 22.75,
      feels_like: 22.36,
      temp_min: 22.75,
      temp_max: 22.75,
      pressure: 1009,
      sea_level: 1009,
      grnd_level: 784,
      humidity: 49,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 1.93, deg: 174, gust: 1.96 },
    visibility: 10000,
    pop: 0.69,
    rain: { "3h": 0.93 },
    sys: { pod: "d" },
    dt_txt: "2023-10-24 21:00:00",
  },
  {
    dt: 1698192000,
    main: {
      temp: 19.72,
      feels_like: 19.42,
      temp_min: 19.72,
      temp_max: 19.72,
      pressure: 1011,
      sea_level: 1011,
      grnd_level: 784,
      humidity: 64,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 2.18, deg: 225, gust: 3.12 },
    visibility: 10000,
    pop: 0.88,
    rain: { "3h": 1.2 },
    sys: { pod: "d" },
    dt_txt: "2023-10-25 00:00:00",
  },
  {
    dt: 1698202800,
    main: {
      temp: 16.64,
      feels_like: 16.42,
      temp_min: 16.64,
      temp_max: 16.64,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 785,
      humidity: 79,
      temp_kf: 0,
    },
    weather: [
      {
        id: 501,
        main: "Rain" as MainWeatherCondition,
        description: "moderate rain",
        icon: "10n",
      },
    ],
    clouds: { all: 93 },
    wind: { speed: 3.13, deg: 355, gust: 4.61 },
    visibility: 10000,
    pop: 0.92,
    rain: { "3h": 3.5 },
    sys: { pod: "n" },
    dt_txt: "2023-10-25 03:00:00",
  },
  {
    dt: 1698213600,
    main: {
      temp: 16.04,
      feels_like: 15.74,
      temp_min: 16.04,
      temp_max: 16.04,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 785,
      humidity: 78,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 95 },
    wind: { speed: 1.11, deg: 6, gust: 1.54 },
    visibility: 10000,
    pop: 0.97,
    rain: { "3h": 1.25 },
    sys: { pod: "n" },
    dt_txt: "2023-10-25 06:00:00",
  },
  {
    dt: 1698224400,
    main: {
      temp: 15.76,
      feels_like: 15.45,
      temp_min: 15.76,
      temp_max: 15.76,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 784,
      humidity: 79,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 91 },
    wind: { speed: 0.65, deg: 125, gust: 0.83 },
    visibility: 10000,
    pop: 0.41,
    rain: { "3h": 0.58 },
    sys: { pod: "n" },
    dt_txt: "2023-10-25 09:00:00",
  },
  {
    dt: 1698235200,
    main: {
      temp: 15.29,
      feels_like: 14.99,
      temp_min: 15.29,
      temp_max: 15.29,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 784,
      humidity: 81,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 84 },
    wind: { speed: 0.36, deg: 95, gust: 0.61 },
    visibility: 10000,
    pop: 0.31,
    rain: { "3h": 0.15 },
    sys: { pod: "n" },
    dt_txt: "2023-10-25 12:00:00",
  },
  {
    dt: 1698246000,
    main: {
      temp: 18.33,
      feels_like: 17.97,
      temp_min: 18.33,
      temp_max: 18.33,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 787,
      humidity: 67,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 68 },
    wind: { speed: 1.05, deg: 11, gust: 0.88 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-25 15:00:00",
  },
  {
    dt: 1698256800,
    main: {
      temp: 23.22,
      feels_like: 22.75,
      temp_min: 23.22,
      temp_max: 23.22,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 787,
      humidity: 44,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 59 },
    wind: { speed: 1.77, deg: 35, gust: 1.86 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-25 18:00:00",
  },
  {
    dt: 1698267600,
    main: {
      temp: 24.74,
      feels_like: 24.26,
      temp_min: 24.74,
      temp_max: 24.74,
      pressure: 1008,
      sea_level: 1008,
      grnd_level: 785,
      humidity: 38,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 53 },
    wind: { speed: 1.71, deg: 14, gust: 2.79 },
    visibility: 10000,
    pop: 0.45,
    rain: { "3h": 0.29 },
    sys: { pod: "d" },
    dt_txt: "2023-10-25 21:00:00",
  },
  {
    dt: 1698278400,
    main: {
      temp: 21.88,
      feels_like: 21.38,
      temp_min: 21.88,
      temp_max: 21.88,
      pressure: 1010,
      sea_level: 1010,
      grnd_level: 785,
      humidity: 48,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: { all: 77 },
    wind: { speed: 3.03, deg: 37, gust: 4.64 },
    visibility: 10000,
    pop: 0.6,
    rain: { "3h": 0.5 },
    sys: { pod: "d" },
    dt_txt: "2023-10-26 00:00:00",
  },
  {
    dt: 1698289200,
    main: {
      temp: 19.9,
      feels_like: 19.54,
      temp_min: 19.9,
      temp_max: 19.9,
      pressure: 1013,
      sea_level: 1013,
      grnd_level: 786,
      humidity: 61,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 100 },
    wind: { speed: 2.02, deg: 24, gust: 3.81 },
    visibility: 10000,
    pop: 0.69,
    rain: { "3h": 0.63 },
    sys: { pod: "n" },
    dt_txt: "2023-10-26 03:00:00",
  },
  {
    dt: 1698300000,
    main: {
      temp: 17.76,
      feels_like: 17.47,
      temp_min: 17.76,
      temp_max: 17.76,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 785,
      humidity: 72,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 97 },
    wind: { speed: 1.87, deg: 356, gust: 2.74 },
    visibility: 10000,
    pop: 0.81,
    rain: { "3h": 1.57 },
    sys: { pod: "n" },
    dt_txt: "2023-10-26 06:00:00",
  },
  {
    dt: 1698310800,
    main: {
      temp: 16.67,
      feels_like: 16.38,
      temp_min: 16.67,
      temp_max: 16.67,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 784,
      humidity: 76,
      temp_kf: 0,
    },
    weather: [
      {
        id: 500,
        main: "Rain" as MainWeatherCondition,
        description: "light rain",
        icon: "10n",
      },
    ],
    clouds: { all: 96 },
    wind: { speed: 1.52, deg: 18, gust: 1.87 },
    visibility: 10000,
    pop: 0.25,
    rain: { "3h": 0.56 },
    sys: { pod: "n" },
    dt_txt: "2023-10-26 09:00:00",
  },
  {
    dt: 1698321600,
    main: {
      temp: 15.73,
      feels_like: 15.45,
      temp_min: 15.73,
      temp_max: 15.73,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 784,
      humidity: 80,
      temp_kf: 0,
    },
    weather: [
      {
        id: 804,
        main: "Clouds" as MainWeatherCondition,
        description: "overcast clouds",
        icon: "04n",
      },
    ],
    clouds: { all: 94 },
    wind: { speed: 1.95, deg: 16, gust: 2.55 },
    visibility: 10000,
    pop: 0.11,
    sys: { pod: "n" },
    dt_txt: "2023-10-26 12:00:00",
  },
  {
    dt: 1698332400,
    main: {
      temp: 17.25,
      feels_like: 16.88,
      temp_min: 17.25,
      temp_max: 17.25,
      pressure: 1017,
      sea_level: 1017,
      grnd_level: 786,
      humidity: 71,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 66 },
    wind: { speed: 2.44, deg: 11, gust: 3.07 },
    visibility: 10000,
    pop: 0,
    sys: { pod: "d" },
    dt_txt: "2023-10-26 15:00:00",
  },
  {
    dt: 1698343200,
    main: {
      temp: 20.55,
      feels_like: 20.1,
      temp_min: 20.55,
      temp_max: 20.55,
      pressure: 1014,
      sea_level: 1014,
      grnd_level: 786,
      humidity: 55,
      temp_kf: 0,
    },
    weather: [
      {
        id: 803,
        main: "Clouds" as MainWeatherCondition,
        description: "broken clouds",
        icon: "04d",
      },
    ],
    clouds: { all: 80 },
    wind: { speed: 1.95, deg: 332, gust: 3.4 },
    visibility: 10000,
    pop: 0.04,
    sys: { pod: "d" },
    dt_txt: "2023-10-26 18:00:00",
  },
];