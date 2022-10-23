import axios from 'axios'

const apiWeatherKey = process.env.REACT_APP_API_WEATHER_KEY
const baseURLWeather = process.env.REACT_APP_API_WEATHER_URL

export const apiCallCurrent = (search) => {
  return axios.get(`${baseURLWeather}/weather?q=${search}&appid=${apiWeatherKey}&units=metric`)
}

export const apiCallforecast = (search) => {
  return axios.get(`${baseURLWeather}/forecast?q=${search}&appid=${apiWeatherKey}&units=metric`)
}
