import React, { useEffect, useState } from 'react'
import './style.css'
import moment from 'moment'
import { icons } from '../../middleware/importAssets'

const CurrentWeather = (props) => {
  const { name, description, icon, temp, timezone } = props

  const [date, setDate] = useState(new Date())

  function refreshTime() {
    setDate(new Date())
  }

  useEffect(() => {
    const timerId = setInterval(refreshTime, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="currentBlock">
      <div className="iconWithText">
        <img src={icons[`pin.svg`]} alt="pin" width={40} height={40}/>
        <h3>{name}</h3>
      </div>
      <div className="iconWithText">
        <h1>{Math.round(temp)}&deg;C</h1>
        <img src={icons[`${icon}.svg`]} alt={icon} width={70} height={70} />
      </div>
      <h5>{description}</h5>
      <small>
        {moment()
          .utcOffset(timezone / 60)
          .format('MMMM Do YYYY, h:mm:ss A')}
      </small>
    </div>
  )
}

export default CurrentWeather
