import { toast } from 'react-toastify';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Accept'] = "application/json, text/plain, version=1 */*";

axios.interceptors.response.use(undefined, (error) => {
  if (!error.status) {
    toast.error('Network problem.')
    return Promise.reject(error);
  }

  if(error.response && error.response.status === 401) {
    toast.error('Unauthorized.')
    console.log(error.response);
    return Promise.reject(error);
  }
});

export default axios;

