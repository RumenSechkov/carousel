const config = {
  axios: {
    baseURL: process.env.API_PICSUM,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  },
  paths: {
    getPagedImages: '/v2/list',
    getRandomImage: '',
  },
};

export { config };
