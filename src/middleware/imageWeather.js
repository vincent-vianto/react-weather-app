import { images } from './importAssets'

export const ImageWeather = (weatherId = null) => {
  let weatherImageUrl = ''

  if (weatherId) {
    if (weatherId <= 804 && weatherId >= 800) weatherImageUrl = images['sunny.png']
    else if (weatherId <= 781 && weatherId >= 701) weatherImageUrl = images['sunny.jpg']
    else if (weatherId <= 321 && weatherId >= 300) weatherImageUrl = images['cloudy.jpg']
    else if (weatherId <= 531 && weatherId >= 500) weatherImageUrl = images['rainy.jpg']
    else weatherImageUrl = images['thunder.png']
  }

  return {
    background: `linear-gradient( rgba(0, 0, 0, 0.758), rgba(0, 0, 0, 0.758) ), url(${weatherImageUrl}) no-repeat center/cover`,
  }
}
