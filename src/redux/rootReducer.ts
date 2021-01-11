import { combineReducers } from "redux";

// STATE TYPES
import { WeatherInitState } from "../containers/Weather/types";

// REDUCERS
import weatherReducer from "../containers/Weather/redux/reducer";

// INITIAL STATES
import { initialState as weatherInitialState } from "../containers/Weather/redux/initialState";

export interface ApplicationState {
  weather: WeatherInitState;
}

export const ApplicationInitialState: ApplicationState = {
  weather: weatherInitialState
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
