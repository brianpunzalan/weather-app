import { getService } from './services'

export const preprocessQuery = q => {
  // Removes '\u002C' in the accepted unicode to correctly classify the string for <city, postal code> format
  const regex = new RegExp(`([\\u0000-\\u002B|\\u002D-\\uFFFF]+,[\\s]*[0-9]+[^,])|([\\u0000-\\u002B|\\u002D-\\uFFFF]+)`, 'gu')
  // split query string with " " as seperator
  let queryParameters = q.split(" ")
  // get the command string after './'
  const command = queryParameters[0].split("./")[1]
  // remove the command string and construct the command query (locations string)
  queryParameters.shift()
  const query = queryParameters.join(" ")

  // store all locations into an array
  let locations = []
  let result = null;
  while((result = regex.exec(query)) !== null) {
    locations.push(result[0].trim())
  }

  return {
    command, 
    locations 
  }
}

export const processQuery = (command, location) => {
  const Service = getService(command)
  const WeatherApi = new Service(process.env.WEATHER_API_TOKEN)
  return WeatherApi.request(location)
}

const query = async q => {
  const { command, locations } = preprocessQuery(q)
  const promiseData = locations.map(
    location => processQuery(command, location))

  await Promise.all(promiseData)
    .then(list => {
      list.forEach(item => 
        console.log('Weather Data for ' + item.location, item.data))
    })
}

global.query = query

export default query