import axios, { AxiosRequestConfig, CancelToken, CancelTokenSource } from 'axios';
import reportError from './error';

const cancelToken = (cancelTokens: { [key: string]: CancelTokenSource }, callName: string) => {
  if (cancelTokens[callName]) cancelTokens[callName].cancel();
  const cancelToken = axios.CancelToken.source();
  cancelTokens[callName] = cancelToken;

  return cancelToken;
};

const createApiClient = (config: AxiosRequestConfig) => {
  const BaseClient = axios.create(config);
  BaseClient.interceptors.request.use(
    (config) => {
      if (config.method === 'post') {
        config.transformRequest = [(data) => JSON.stringify(data.data)];
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  const get = (url: string, cancelToken: CancelToken) =>
    BaseClient.get(`${BaseClient.defaults.baseURL}${url}`, { cancelToken })
      .then((response) => response)
      .catch(reportError);

  const put = (url: string, body: object, cancelToken: CancelToken) =>
    BaseClient.put(`${BaseClient.defaults.baseURL}${url}`, { body: body }, { cancelToken })
      .then((response) => response)
      .catch(reportError);

  const post = (url: string, body: object, cancelToken: CancelToken) =>
    BaseClient.post(`${BaseClient.defaults.baseURL}${url}`, { body: body }, { cancelToken })
      .then((response) => response)
      .catch(reportError);

  const patch = (url: string, body: object, cancelToken: CancelToken) =>
    BaseClient.patch(`${BaseClient.defaults.baseURL}${url}`, { body: body }, { cancelToken })
      .then((response) => response)
      .catch(reportError);

  const remove = (url: string, cancelToken: CancelToken) =>
    BaseClient.delete(`${BaseClient.defaults.baseURL}${url}`, { cancelToken })
      .then((response) => response)
      .catch(reportError);

  return { get, put, post, patch, remove, cancelToken };
};

export { createApiClient };
