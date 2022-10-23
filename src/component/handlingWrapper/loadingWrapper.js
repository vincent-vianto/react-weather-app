import React from 'react'
import './style.css'
import ReactLoading from 'react-loading'

const LoadingWrapper = (props) => {
  return (
    <div className="loaderWrapper">
      <ReactLoading type="spinningBubbles" height={150} width={150} />
      <h3>Loading</h3>
    </div>
  )
}

export default LoadingWrapper
