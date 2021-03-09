import axios from 'axios';

import { toastError } from '../components/common/Toast';
import { config } from '../config/config';

const baseUrl = config().apiUrl;

axios.interceptors.request.use(
  function (config) {
    config.headers.Authorization = localStorage.getItem('tokenValue');
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const get = (url, params = '', config = {}) =>
  axios
    .get(baseUrl + url, {
      ...config,
      params,
    })
    .then(res => res.data)
    .catch(err => handleError(err));

export const post = (url, payload, config = {}) =>
  axios
    .post(baseUrl + url, payload, config)
    .then(res => res.data)
    .catch(err => handleError(err));

export const put = (url, payload) =>
  axios
    .put(baseUrl + url, payload)
    .then(res => res.data)
    .catch(err => handleError(err));

export const remove = (url) =>
  axios
    .delete(baseUrl + url)
    .then(res => res.data)
    .catch(err => handleError(err));

export const handleError = (error) => {
  const { response } = error;
  if (error && response && response.data.message) {
    throw response.data.message;
  } else if (response && response.data && response.data.errorMessage) {
    if (response.data && response.data.status) {
      toastError(response.data.errorMessage);
    } else if (
      response.data &&
      response.data.status
    ) {
      toastError(response.data.errorMessage);
    } else {
      throw response.data.errorMessage;
    }
  }
  throw error;
};