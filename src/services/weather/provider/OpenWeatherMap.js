import axios from "axios"
import moment from "moment"

class OpenWeatherMap {
  constructor(token) {
    const url = 'https://api.openweathermap.org'
    const category = 'data'
    const version = '2.5'
    const api = 'weather'
    this.token = token
    this.baseURL = `${url}/${category}/${version}/${api}`
    this.request = this.request.bind(this)
  }

  request(q) {
    const parameters = q.split(",")
    const city = parameters[0]
    const postalCode = parameters[1] || null
    const params = new URLSearchParams()
    params.append('appid', this.token)
    params.append('q', city.trim())
    if (postalCode !== null) {
      params.append('zip', postalCode.trim())
    }

    return new Promise((resolve, reject) => {
      let dateTime = moment().format('LLLL')
      axios.get(this.baseURL + '/?' + params.toString())
        .then(response => {
          resolve({ dateTime: dateTime, location: q, data: response.data })
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default OpenWeatherMap