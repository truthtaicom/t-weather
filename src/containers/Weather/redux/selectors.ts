import { ApplicationState } from "../../../redux/rootReducer";
import { createSelector } from "reselect";
import { WeatherInitState } from "../types";

const WeatherStateSelector = (state: ApplicationState): WeatherInitState => state.weather;

export const selectWeatherList = () =>
  createSelector(WeatherStateSelector, (weather: WeatherInitState) => weather?.weather?.consolidatedWeather);

  export const selectWeatherLoading = () =>
  createSelector(WeatherStateSelector, (weather: WeatherInitState) => weather?.loading);