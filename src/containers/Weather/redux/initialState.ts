import { WeatherInitState } from "../types";

export const initialState: WeatherInitState = {
  weather: {
    title: '',
    timezone: '',
    consolidatedWeather: null
  },
  loading: false,
};
