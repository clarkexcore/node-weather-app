const request = require('request');

const forecast = (lat, lon, callback) => {
    const url = `https://api.darksky.net/forecast/513db1c84fa9354d5d2c0dac5aec4cfb/${lat},${lon}?units=auto`;

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback("Unable to connect to Weather API", undefined);
        } else if (response.body.error) {
            callback(response.body.error, undefined);
        } else {
            const data = {
                currentTemp: response.body.currently.temperature,
                summary: response.body.daily.data[0].summary
            }
            callback(undefined, data);
        }
    })

}

module.exports = forecast;