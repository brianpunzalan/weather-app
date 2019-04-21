# Console Weather APP

## Overview
This is a Weather App for getting weather data by making a query. It uses the [OpenWeatherMap API](https://openweathermap.org)

## Pre-requisites
Please create `.env` file for the Environment variables at the root directory. This would store the *OpenWeatherMap API key* that would be used.

    WEATHER_API_TOKEN=<YOUR API TOKEN>


## Getting Started
To make a test, execute

    bash$ npm test

To start test and development, execute

    bash$ npm start

## Usage
The query follows the following format 

    './weather <city, postal code> or <city>, <city, postal code> or <city>, ... '

At the browser, go to the Developers Console to execute queries. Please see sample below:

    > query('./weather New York, 10005, Tokyo, São Paulo, Pluto')
    // Results to 5 weather data for locations New York, 10005, Tokyo, São Paulo and Pluto
