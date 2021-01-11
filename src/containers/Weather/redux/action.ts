import { thunkAction } from "../../../utils/actionHelpers";
import { WeatherState } from "../types";
import * as types from "./actionTypes";

export const searchWeatherByCity = (keyword: string) =>
  thunkAction.GET({
    flow: {
      request: () => ({
        type: types.GET_TEMP_BY_CITY_REQUEST,
      }),
      success: (data: WeatherState, params: any) => {
        return ({
          type: types.GET_TEMP_BY_CITY_SUCCESS,
          payload: {
            ...data,
          },
          params,
        })
      },
      failure: () => ({
        type: types.GET_TEMP_BY_CITY_FAILURE,
      }),
    },
    endpoint: `/api/weather`,
    params: {
      q: keyword
    }
  });