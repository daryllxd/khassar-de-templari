import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Accept'] = "application/json, text/plain, version=1 */*";

export default axios;
