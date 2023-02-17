import axios from 'axios';

export const BASE_URL='http//localhost:3000/api'

export const INSTANCE = axios.create({
    baseurl : BASE_URL ,
    timeout : 25000,
}
)