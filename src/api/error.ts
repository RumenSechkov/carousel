import { AxiosError } from 'axios';

const error = (error: AxiosError) => {
  if (error.response) {
    switch (error.response.status) {
      case 400:
        console.error('Bad Request (400)');
        return error;
      case 401:
        console.error('Unauthorized (401)');
        return error;
      case 403:
        console.error('Forbidden (403)');
        return error;
      case 404:
        console.error('Not Found (404)');
        return error;
      case 500:
        console.error('Internal Server Error (500)');
        return error;
      default:
        console.error('General Server Error');
        return error;
    }
  } else {
    console.error('No response from the server or the request was cancelled');
    return error;
  }
};

export default error;
