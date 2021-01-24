import axios from 'axios';

import paths from './paths';
import { history } from './history';

const CORS = 'https://cors-anywhere.herokuapp.com/';
export const baseURL = `https://github.com/`;
export const baseApiUrl = `https://api.github.com/`;

const interceptor = ({ headers, ...config }) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!headers.Accept) {
    headers.Accept = 'application/json';
  }

  if (!headers.Authorization && accessToken) {
    headers.Authorization = `token ${accessToken}`;
  }

  if (config.url.indexOf('api:') === 0) {
    return {
      ...config,
      headers,
      baseURL: baseApiUrl,
      url: config.url.slice(4)
    };
  }

  return { ...config, headers };
};

const unauthorized = async error => {
  if (error.response && error.response.status === 401) {
    if (!error.response.config.url.includes('login')) {
      if (window.location.pathname !== paths.login) {
        history.go(paths.login);
      }
    }
  }
  return Promise.reject(error);
};

axios.defaults.baseURL = `${CORS}${baseURL}`;

axios.interceptors.request.use(interceptor, e => Promise.reject(e));
axios.interceptors.response.use(r => r, unauthorized);
