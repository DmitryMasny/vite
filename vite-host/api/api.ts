
import Axios from 'axios';

export const axios = Axios.create();

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['x-user-token'] = import.meta.env.VITE_AUTH_TOKEN;
