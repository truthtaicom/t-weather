import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

instance.interceptors.response.use(
  (config) => {
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

export default instance;
