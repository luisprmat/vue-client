import axios from 'axios';
import { useAuth } from '@/stores/auth';

window.axios = axios;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const auth = useAuth();
      auth.destroyTokenAndRedirectTo()
    }

    return Promise.reject(error);
  }
);

if (localStorage.getItem('access_token')) {
  window.axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('access_token')}`;
}
