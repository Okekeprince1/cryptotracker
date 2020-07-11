import axios from 'axios'
import { API_KEY } from '../config';

axios.defaults.headers.common['X-CMC_PRO_API_KEY'] = API_KEY ;

export default axios;