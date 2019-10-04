const request = require('request');

const url = "https://api.darksky.net/forecast/513db1c84fa9354d5d2c0dac5aec4cfb/43.648660,-79.389137?lang=es";

request({url: url, json: true}, (error, response) => {
    // console.log(response.body.currently);
    const data = response.body.currently;
    console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain.`);
});