import React, { useEffect, useState } from 'react'
import './style.css'
import moment from 'moment'
import { Row, Col } from 'react-bootstrap'
import { icons } from '../../middleware/importAssets'

const Detail = (props) => {
  const { clouds, humidity, wind, sunrise, sunset, timezone } = props

  return (
    <div className="detailWrapper">
      <Row>
        <Col xs={6} lg={4}>
          <div className="detailBlock">
            <div className="iconWithText">
              <h4>Wind</h4>
            </div>
            <div className="iconWithText">
              <img src={icons['wind.svg']} alt="wind" width={40} height={40} />
            </div>
            <h6>{Math.round(wind)} m/s</h6>
          </div>
        </Col>
        <Col xs={6} lg={4}>
          <div className="detailBlock">
            <div className="iconWithText">
              <h4>Sunrise</h4>
            </div>
            <div className="iconWithText">
              <img src={icons['sunrise.svg']} alt="wind" width={40} height={40} />
            </div>
            <h6>{moment.utc(sunrise, 'X').add(timezone, 'seconds').format('LT')}</h6>
          </div>
        </Col>
        <Col xs={6} lg={4}>
          <div className="detailBlock">
            <div className="iconWithText">
              <h4>Sunset</h4>
            </div>
            <div className="iconWithText">
              <img src={icons['sunset.svg']} alt="wind" width={40} height={40} />
            </div>
            <h6>{moment.utc(sunset, 'X').add(timezone, 'seconds').format('LT')}</h6>
          </div>
        </Col>
        <Col xs={6}>
          <div className="detailBlock">
            <div className="iconWithText">
              <h4>Humidity</h4>
            </div>
            <div className="iconWithText">
              <img src={icons['droplet.svg']} alt="wind" width={40} height={40} />
            </div>
            <h6>{humidity}%</h6>
          </div>
        </Col>
        <Col xs={6}>
          <div className="detailBlock">
            <div className="iconWithText">
              <h4>Cloudiness</h4>
            </div>
            <div className="iconWithText">
              <img src={icons['cloudy.svg']} alt="wind" width={40} height={40} />
            </div>
            <h6>{clouds}%</h6>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Detail
