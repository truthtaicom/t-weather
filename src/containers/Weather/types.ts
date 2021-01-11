export interface ConsolidatedWeather {
  id: number,
  weatherStateName: string,
  weatherStateAbbr: string,
  applicableDate: string,
  minTemp: number,
  maxTemp: number,
}

export interface WeatherState {
  title: string;
  timezone: string;
  consolidatedWeather?: ConsolidatedWeather[] | null
}

export interface WeatherCityState {
  id: number;
  name: string;
}

export interface WeatherCity {
  list: WeatherCityState[];
}

export interface WeatherInitState {
  weather: WeatherState;
  loading: boolean;
}