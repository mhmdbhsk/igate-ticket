import Axios, { AxiosRequestConfig } from 'axios';
import toast from 'react-hot-toast';

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 60000,
  maxContentLength: 500 * 1000 * 1000,
});

axiosInstance.interceptors.request.use(async (config: AxiosRequestConfig) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  };
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error?.response?.data?.message);
    toast.error(error?.response?.data?.message || 'Server error');

    if (error.response?.status === 401) {
      if (typeof window === 'undefined') {
        console.error('Unauthorized request');
      } else {
        window.location.href = '/login';
      }
    }

    if (
      error?.response?.config?.method !== 'post' &&
      error?.response?.config?.method !== 'put' &&
      error?.response?.config?.method !== 'delete'
    ) {
      if (error.response?.error) {
        toast.error(error.response.error);
      }
      if (error.response?.status === 403) {
        // return;
      }
      if (error.response?.status === 502) {
        // return;
      }
      if (error.response?.status === 500) {
        // return;
      }
      if (error.response?.status === 404) {
        // return;
      }
      if (error.response?.status === 400) {
        // return;
      }
      if (error.response?.status === 422) {
        // return;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
