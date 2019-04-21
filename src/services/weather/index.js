// Could include extend by adding different kinds of Weather providers
import { 
  OpenWeatherMap 
} from './provider'

// By default, OpenWeatherMap is the provider
const weather = 
  (provider = OpenWeatherMap) => provider

export default weather