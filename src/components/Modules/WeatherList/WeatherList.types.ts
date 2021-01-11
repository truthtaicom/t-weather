import { ConsolidatedWeather } from "../../../containers/Weather/types";

export interface WeatherListProps {
  data?: ConsolidatedWeather[] | null;
  loading: boolean
}