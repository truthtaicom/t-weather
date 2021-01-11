
// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import axios from "axios";
import axiosInstance from "./axios";
import { API_URL } from "../config";
import { forEach } from "lodash";
import { notification } from "antd";
import { getToken } from "./tokenHelpers";
import { AsyncFlow, ThunkActionModel } from "types";
import { Dispatch } from "redux";
import { camelize, decamelize } from "./parsers";

export const action = (type: string, payload = {}) => ({ type, ...payload });

const getFullUrl = (endpoint: string) => {
  if (endpoint.includes("http://") || endpoint.includes("https://")) {
    return endpoint;
  }
  return `${API_URL}${endpoint}`;
};

interface RequestOption {
  method: string;
  params?: object;
  headers: object;
  isSafe: boolean;
}
function prepareOption({ method, params, headers, isSafe }: RequestOption) {
  const ACCESS_TOKEN = getToken();
  const apiKey = process.env.REACT_APP_API_KEY;
  const option = {
    method,
    headers: {
      "X-API-KEY": apiKey,
      ...headers,
    },
    body: {},
  };

  if (ACCESS_TOKEN && isSafe) {
    // @ts-ignore
    option.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
  }
  if (params) {
    if (method === "GET") {
      // @ts-ignore
      option.params = { ...params };
    } else {
      // @ts-ignore
      option.data = params instanceof FormData ? params : { ...params };
    }
  }
  return option;
}

function doDispatch(flow, params, data) {
  const { success, dispatch } = flow;
  let finalData;
  if (Array.isArray(data)) {
    finalData = data;
  } else {
    finalData = data ? data : {};
  }
  const meta = data ? data.meta : undefined;
  if (typeof success === "function") {
    dispatch(success(camelize(finalData), camelize(params), camelize(meta)));
  }
}

/*----------
flow = {
  request: () => {},
  success: () => {},
  failure: () => {}
};
-----------*/

const allApis = {};

function createThunkAction(
  method: string,
  flow: AsyncFlow,
  endpoint: string,
  _params: object,
  isSafe = true,
  headers: object,
  successNotification = null
) {
  const { CancelToken } = axios;
  const params = decamelize(_params);
  const apiKey = `${method}${endpoint}${JSON.stringify(params)}`;

  if (allApis[apiKey]) {
    allApis[apiKey].inprogress = true;
  } else {
    allApis[apiKey] = {
      inprogress: true,
    };
  }

  const fullUrl = getFullUrl(endpoint);
  const option = prepareOption({ method, params, isSafe, headers });

  return function thunk(dispatch: Dispatch, getState: any) {
    const { request, failure } = flow;
    if (typeof request === "function") {
      dispatch(request(params));
    }
    if (
      typeof allApis[apiKey].cancel === "function" &&
      allApis[apiKey].inprogress
    ) {
      allApis[apiKey].cancel("DUPLICATED_CANCELLED");
      allApis[apiKey].inprogress = false;
    }
    option.cancelToken = new CancelToken((c) => {
      allApis[apiKey].cancel = c;
    });
    return axiosInstance(fullUrl, option)
      .then((response) => {
        allApis[apiKey].inprogress = false;
        doDispatch({ ...flow, dispatch, getState }, params, response.data);
        if (successNotification)
          notification.success({
            message: "Operation completed",
            description: successNotification,
          });
        return response.data;
      })
      .catch((error) => {
        allApis[apiKey].inprogress = false;
        const { response } = error;
        if (error.message === "UNAUTHORIZED_CANCELLED") {
          allApis[apiKey].recall = () => {
            option.headers.Authorization = token;
            option.cancelToken = new CancelToken((c) => {
              allApis[apiKey].cancel = c;
            });
            return axiosInstance(fullUrl, option).then((newResponse) => {
              doDispatch(
                { ...flow, dispatch, getState },
                param,
                newResponse.data
              );
            });
          };
        }
        if (successNotification)
          notification.error({
            message: "Operation failed",
            description: error.toString(),
          });
        if (!response) return null;
        const { data } = response;
        if (isSafe && data.code === 401) {
          forEach(allApis, (item) => {
            if (typeof item.cancel === "function" && item.inprogress) {
              item.cancel("UNAUTHORIZED_CANCELLED");
            }
            return item;
          });
          return data;
        }

        if (typeof failure === "function") {
          dispatch(failure({ ...data }, { ...option.params, ...option.data }));
        }
        return error;
      });
  };
}

export function createThunkActions({ actions, flow }) {
  const { success, failure } = flow;
  return function thunk(dispatch, getState) {
    return Promise.all(
      actions.map((item) => {
        const {
          method,
          endpoint,
          params,
          isSafe,
          headers,
          successNotification,
        } = item;
        return createThunkAction(
          method,
          {},
          endpoint,
          params,
          isSafe,
          headers,
          successNotification
        )();
      })
    ).then(
      (results) => {
        if (typeof success === "function") {
          doDispatch({ ...flow, dispatch, getState }, {}, results);
        }
      },
      (errors) => {
        if (typeof failure === "function") {
          doDispatch({ ...flow, dispatch, getState }, {}, errors);
        }
      }
    );
  };
}

export const thunkAction = {
  GET: ({
    flow,
    endpoint,
    params,
    isSafe = true,
    headers,
    successNotification,
  }: ThunkActionModel) =>
    createThunkAction(
      "GET",
      flow,
      endpoint,
      params,
      isSafe,
      headers,
      successNotification
    ),
  PUT: ({
    flow,
    endpoint,
    params,
    isSafe = true,
    headers,
    successNotification,
  }: ThunkActionModel) =>
    createThunkAction(
      "PUT",
      flow,
      endpoint,
      params,
      isSafe,
      headers,
      successNotification
    ),
  PATCH: ({
    flow,
    endpoint,
    params,
    isSafe = true,
    headers,
    successNotification,
  }: ThunkActionModel) =>
    createThunkAction(
      "PATCH",
      flow,
      endpoint,
      params,
      isSafe,
      headers,
      successNotification
    ),
  POST: ({
    flow,
    endpoint,
    params,
    isSafe = true,
    headers,
    successNotification,
  }: ThunkActionModel) =>
    createThunkAction(
      "POST",
      flow,
      endpoint,
      params,
      isSafe,
      headers,
      successNotification
    ),
  DELETE: ({
    flow,
    endpoint,
    params,
    isSafe = true,
    headers,
    successNotification,
  }: ThunkActionModel) =>
    createThunkAction(
      "DELETE",
      flow,
      endpoint,
      params,
      isSafe,
      headers,
      successNotification
    ),
};