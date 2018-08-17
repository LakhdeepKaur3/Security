import axios from 'axios';
import {store} from './index';

const instance = axios.create({
    baseURL:'http://localhost:3000/api'
});


export default instance;