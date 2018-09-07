import axios from 'axios';

const API_KEY = '210ee604a63c8f3f30dce05759a6f974'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//some URL formatting. getting the original url to take in our API key
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    //this is the final url 
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('Request:', request);
    //AJAX Request to GET a Promise to payload
    return {
        type: FETCH_WEATHER, 
        payload: request
    };
}