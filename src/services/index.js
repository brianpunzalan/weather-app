import weather from './weather'

// You could add different other kinds of commands in the registry
const commandRegistry = {
  "weather": weather
}

export const getService = (key, provider) => {
  return commandRegistry[key](provider)
}

export default commandRegistry