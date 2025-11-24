import { AxiosError } from 'axios';
import { createApiClient } from '@api-client';
import { config } from './config';
import { PagedImage } from './types';

const ApiClient = createApiClient(config.axios);
const cancelTokens = {};

const getPagedImages = async (page: number = 1, limit: number = 100) => {
  const cancelToken = ApiClient.cancelToken(cancelTokens, 'getPagedImages');
  const response = await ApiClient.get(
    `${config.paths.getPagedImages}?page=${page}&limit=${limit}`,
    cancelToken.token,
  );

  if (!(response instanceof AxiosError)) return response.data as PagedImage[];
};

const getRandomImage = async (width: number = 200, height: number = 300) => {
  const cancelToken = ApiClient.cancelToken(cancelTokens, 'getRandomImage');
  const response = await ApiClient.get(
    `${config.paths.getRandomImage}/${width}/${height}`,
    cancelToken.token,
  );

  if (!(response instanceof AxiosError)) return response.data;
};

export { getPagedImages, getRandomImage };
