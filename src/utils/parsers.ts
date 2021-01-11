import _ from "lodash";

export const camelize = (params: any): any => {
  if (!params) return null;
  if (typeof params !== "object") return params;
  if (Array.isArray(params)) return params.map((item) => camelize(item));
  return Object.keys(params).reduce((results, key) => {
    const item = params[key];
    return {
      ...results,
      [_.camelCase(key)]: typeof item === "object" ? camelize(item) : item,
    };
  }, {});
};

export const decamelize = (params: any): any => {
  if (!params) return null;
  if (typeof params !== "object") return params;
  if (Array.isArray(params)) return params.map((item) => decamelize(item));
  return Object.keys(params).reduce((results, key) => {
    const item = params[key];
    return {
      ...results,
      [_.snakeCase(key)]: typeof item === "object" ? decamelize(item) : item,
    };
  }, {});
};
