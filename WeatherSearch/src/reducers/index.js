import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'; //adding reducer to the combined reducer

const rootReducer = combineReducers({
  weather: WeatherReducer //this is the weather reducer!
});

export default rootReducer;
