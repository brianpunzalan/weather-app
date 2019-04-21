import { preprocessQuery, processQuery } from '../src/query'

require('dotenv').config()
const expect = require('chai').expect
const assert = require('chai').assert
const should = require('chai').should()

describe('#preprocessQuery', function () {
    'use strict';
  
    it('exists', () => 
      expect(preprocessQuery).to.be.a('function'))
    it('should have command and locations property', () => {
      const result = preprocessQuery('./weather New York, 10005, Tokyo, São Paulo, Pluto')
      result.should.have.property('command')
      result.should.have.property('locations')
    })
      
    it('should return command as weather and locations as the following: ["New York, 10005", "Tokyo", "São Paulo", "Pluto"]', () => {
      const assertionValue = ['New York, 10005', 'Tokyo', 'São Paulo', 'Pluto']
      const { command, locations } = preprocessQuery('./weather New York, 10005, Tokyo, São Paulo, Pluto')
      expect(command).to.equal('weather')
      locations.forEach((location, key) => 
        expect(location).to.equal(assertionValue[key]))
    })
})

describe('#processQuery', () => {
  'use strict';

  it('exists', () => 
    expect(processQuery).to.be.a('function'))
  it('resolves', async () => {
    const { data } = await processQuery('weather', 'New York, 10005')
    data.should.have.property('coord')
    data.should.have.property('weather')
    data.should.have.property('main')
    data.should.have.property('name')
  })
})
