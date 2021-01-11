import MockAdapter from "axios-mock-adapter";
import axiosIntance from "./utils/axios";

function mock() {
  // This sets the mock adapter on the default instance
  var mock = new MockAdapter(axiosIntance);

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet("/api/search").reply(200, {
    message: "accurate",
    cod: "200",
    count: 2,
    list: [
      {
        id: 1566083,
        name: "Ho Chi Minh",
        coord: { lat: 10.75, lon: 106.6667 },
        main: {
          temp: 305.15,
          feels_like: 304.05,
          temp_min: 305.15,
          temp_max: 305.15,
          pressure: 1009,
          humidity: 37,
        },
        dt: 1610356168,
        wind: { speed: 4.12, deg: 310 },
        sys: { country: "VN" },
        rain: null,
        snow: null,
        clouds: { all: 75 },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
      {
        id: 1580578,
        name: "Thành phố Hồ Chí Minh",
        coord: { lat: 10.8333, lon: 106.6667 },
        main: {
          temp: 305.15,
          feels_like: 304.05,
          temp_min: 305.15,
          temp_max: 305.15,
          pressure: 1009,
          humidity: 37,
        },
        dt: 1610355954,
        wind: { speed: 4.12, deg: 310 },
        sys: { country: "VN" },
        rain: null,
        snow: null,
        clouds: { all: 75 },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
      },
    ],
  });

  mock.onGet("/api/weather").reply(200, {
    consolidated_weather: [
      {
        id: 6712732582674432,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "WSW",
        created: "2021-01-11T03:20:01.965219Z",
        applicable_date: "2021-01-11",
        min_temp: 0.16499999999999998,
        max_temp: 8.765,
        the_temp: 6.58,
        wind_speed: 7.941396763217476,
        wind_direction: 248.49996191774733,
        air_pressure: 1019.0,
        humidity: 82,
        visibility: 9.195361588324186,
        predictability: 75,
      },
      {
        id: 4639088817733632,
        weather_state_name: "Light Rain",
        weather_state_abbr: "lr",
        wind_direction_compass: "NW",
        created: "2021-01-11T03:20:01.950737Z",
        applicable_date: "2021-01-12",
        min_temp: 5.395,
        max_temp: 9.1,
        the_temp: 8.265,
        wind_speed: 5.0507548049603646,
        wind_direction: 308.18857575342304,
        air_pressure: 1014.0,
        humidity: 84,
        visibility: 10.658690746043108,
        predictability: 75,
      },
      {
        id: 5430406024265728,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "SW",
        created: "2021-01-11T03:20:02.053352Z",
        applicable_date: "2021-01-13",
        min_temp: 3.625,
        max_temp: 9.14,
        the_temp: 6.915,
        wind_speed: 4.786426656870543,
        wind_direction: 228.07810048762113,
        air_pressure: 1017.5,
        humidity: 92,
        visibility: 6.246955281158037,
        predictability: 77,
      },
      {
        id: 5908087857741824,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "NNE",
        created: "2021-01-11T03:20:02.076074Z",
        applicable_date: "2021-01-14",
        min_temp: 5.484999999999999,
        max_temp: 9.57,
        the_temp: 8.305,
        wind_speed: 5.937706887616321,
        wind_direction: 24.997296608696367,
        air_pressure: 1015.0,
        humidity: 91,
        visibility: 6.906230116121849,
        predictability: 77,
      },
      {
        id: 4609495637426176,
        weather_state_name: "Heavy Rain",
        weather_state_abbr: "hr",
        wind_direction_compass: "NE",
        created: "2021-01-11T03:20:02.069871Z",
        applicable_date: "2021-01-15",
        min_temp: 1.255,
        max_temp: 5.06,
        the_temp: 4.57,
        wind_speed: 5.320426945780641,
        wind_direction: 33.994367764144535,
        air_pressure: 1028.5,
        humidity: 79,
        visibility: 14.678962359818659,
        predictability: 77,
      },
      {
        id: 5579323277836288,
        weather_state_name: "Light Cloud",
        weather_state_abbr: "lc",
        wind_direction_compass: "ESE",
        created: "2021-01-11T03:20:04.953187Z",
        applicable_date: "2021-01-16",
        min_temp: -0.25999999999999995,
        max_temp: 5.37,
        the_temp: 3.46,
        wind_speed: 3.289379225324107,
        wind_direction: 107.5,
        air_pressure: 1033.0,
        humidity: 79,
        visibility: 9.999726596675416,
        predictability: 70,
      },
    ],
    time: "2021-01-11T05:39:11.361533Z",
    sun_rise: "2021-01-11T08:02:16.573541Z",
    sun_set: "2021-01-11T16:15:07.896150Z",
    timezone_name: "LMT",
    parent: {
      title: "England",
      location_type: "Region / State / Province",
      woeid: 24554868,
      latt_long: "52.883560,-1.974060",
    },
    sources: [
      {
        title: "BBC",
        slug: "bbc",
        url: "http://www.bbc.co.uk/weather/",
        crawl_rate: 360,
      },
      {
        title: "Forecast.io",
        slug: "forecast-io",
        url: "http://forecast.io/",
        crawl_rate: 480,
      },
      {
        title: "HAMweather",
        slug: "hamweather",
        url: "http://www.hamweather.com/",
        crawl_rate: 360,
      },
      {
        title: "Met Office",
        slug: "met-office",
        url: "http://www.metoffice.gov.uk/",
        crawl_rate: 180,
      },
      {
        title: "OpenWeatherMap",
        slug: "openweathermap",
        url: "http://openweathermap.org/",
        crawl_rate: 360,
      },
      {
        title: "Weather Underground",
        slug: "wunderground",
        url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
        crawl_rate: 720,
      },
      {
        title: "World Weather Online",
        slug: "world-weather-online",
        url: "http://www.worldweatheronline.com/",
        crawl_rate: 360,
      },
    ],
    title: "London",
    location_type: "City",
    woeid: 44418,
    latt_long: "51.506321,-0.12714",
    timezone: "Europe/London",
  });
};


export default mock