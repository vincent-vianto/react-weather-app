import React, { useRef } from 'react'
import './style.css'
import moment from 'moment'
import useDraggableScroll from 'use-draggable-scroll'
import { icons } from '../../middleware/importAssets'

const Forecast = (props) => {
  const forecast = props.forecast

  const elRef = useRef(null)
  const { onMouseDown } = useDraggableScroll(elRef)

  const dayPicker = (time) => {
    const dateNow = moment(Date.now())
    const dateDt = moment(time)
    let dayDiff =
      dateNow.diff(dateDt, 'day') === 0
        ? 'Today'
        : dateNow.diff(dateDt, 'day') === -1
        ? 'Tomorrow'
        : dateDt.format('D MMM')
    return dayDiff
  }

  return (
    <div className="mt-3">
      <h1 className="mb-2">Timeline</h1>
      <div className="forecastWrapper" ref={elRef} onMouseDown={onMouseDown}>
        {forecast &&
          forecast.map((item, index) => (
            <div className="forecastBlock" key={index}>
              <h6>{dayPicker(item.dt_txt)}</h6>
              <h6>{moment(item.dt_txt).format('LT')}</h6>
              <img
                src={icons[`${item.weather[0].icon}.svg`]}
                alt={item.weather[0].icon}
                draggable={false}
                width={100}
                height={100}
              />
              <h6>{item.weather[0].description}</h6>
            </div>
          ))}
      </div>
    </div>
  )
}
export default Forecast
