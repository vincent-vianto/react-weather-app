import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import 'animate.css'

import { apiCallCurrent, apiCallforecast } from './services'
import { ImageWeather } from './middleware/imageWeather'

import CurrentWeather from './component/currentWeather'
import Forecast from './component/forecast'
import SearchInput from './component/searchInput'
import ErrorWrapper from './component/handlingWrapper/errorWrapper'
import LoadingWrapper from './component/handlingWrapper/loadingWrapper'
import Detail from './component/detailWeather'

const App = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showWeather, setShowWeather] = useState(false)

  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('Jakarta')

  const [weather, setWeather] = useState({})
  const [detail, setDetail] = useState({})
  const [forecast, setForecast] = useState([])
  const [errorMessage, setErrorMessage] = useState({})

  const handleChange = (event) => setQuery(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSearch(query)
    setQuery('')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const currentWeather = await apiCallCurrent(search)
        const forecastList = await apiCallforecast(search)
        setWeather({
          id: currentWeather.data.weather[0].id,
          name: currentWeather.data.name,
          description: currentWeather.data.weather[0].description,
          icon: currentWeather.data.weather[0].icon,
          temp: currentWeather.data.main.temp,
          timezone: currentWeather.data.timezone,
        })
        setDetail({
          clouds: currentWeather.data.clouds.all,
          humidity: currentWeather.data.main.humidity,
          wind: currentWeather.data.wind.speed,
          sunrise: currentWeather.data.sys.sunrise,
          sunset: currentWeather.data.sys.sunset,
          timezone: currentWeather.data.timezone,
        })
        setForecast(forecastList.data.list)

        setLoading(false)
        setShowWeather(true)
        setError(false)
      } catch (error) {
        setLoading(false)
        setErrorMessage(error.response.data)
        setShowWeather(false)
        setError(true)
      }
    }
    if (search !== '') {
      fetchData()
    }
  }, [search])

  return (
    <div className="App" style={ImageWeather(weather.id)}>
      <Container className="mt-4">
        <SearchInput query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
        {loading && <LoadingWrapper />}
        {!loading && showWeather && (
          <Row className="animate__animated animate__fadeIn">
            <Col lg={6} xs={12} className="mt-3">
              <CurrentWeather {...weather} />
            </Col>
            <Col lg={6} xs={12} className="mt-3">
              <Detail {...detail} />
            </Col>
            <Col lg={12} className="mt-3">
              <Forecast forecast={forecast} />
            </Col>
          </Row>
        )}
        {!loading && error && (
          <div className="animate__animated animate__fadeIn">
            <ErrorWrapper {...errorMessage} />
          </div>
        )}
      </Container>
    </div>
  )
}

export default App
