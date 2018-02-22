import axios from 'axios';
import { API_KEY } from '../config/config';
import { FETCH_WEATHER } from '../constants/ActionTypes';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export default function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`
    const req = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: req
    }
}