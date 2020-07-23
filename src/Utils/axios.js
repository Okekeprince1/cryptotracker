import axios from 'axios';
const API_KEY  = process.env.crypto_tracker_api;

axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = API_KEY ;

export default axios;