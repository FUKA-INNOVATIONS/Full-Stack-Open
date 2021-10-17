import axios from 'axios';

//const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const baseUrl = 'http://api.weatherstack.com';

const getCityWeather = city => {
  const request = axios.get(`http://api.weatherstack.com/current?access_key=8bbc7ba49cf51638b6d53b456452927b&query=${ city }&unit=m`)
  request.then(res => {
    //console.log('clog in service: ', res.data)
    return res.data
  })
};

export default { getCityWeather };