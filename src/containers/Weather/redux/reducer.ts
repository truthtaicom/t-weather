import { AnyAction } from "redux";
import { initialState } from "./initialState";
import * as types from "./actionTypes";

const weatherReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case types.GET_TEMP_BY_CITY_REQUEST: {
      return {
        ...state,
        weather: null,
        loading: true
      }
    }

    case types.GET_TEMP_BY_CITY_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        weather: payload,
        loading: false
      };
    }
    case types.GET_TEMP_BY_CITY_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    default:
      return {
        ...state,
      };
  }
};
export default weatherReducer;
