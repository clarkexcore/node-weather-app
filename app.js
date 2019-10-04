//Modules
const request = require('request');
const chalk = require("chalk");

//Required Files
const geocode = require('./utils/geocode');

//Get location for the lat/long
// const url_location = "https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiY2xhcmtleGNvcmUiLCJhIjoiY2sxY2Yzb3BsMHRodDNubmswcWJ0NTcxcSJ9.qmHXNDUeh7iVF2vD9QS_4w&limit=1";

// request({url: url_location, json: true}, (error, response) => {
//     if(error){
//         console.log(chalk.red.bold.inverse("Unable to connect to Mapbox Service"));
//     } else if(response.body.features.length === 0) {
//         console.log(chalk.red.bold.inverse("Unable to find the location"));
//     } else {
//         const lat = response.body.features[0].center[1];
//         const long = response.body.features[0].center[0];
    
//         console.log(`The lat is ${lat} and the long is ${long}`);
//     }
// })


// const url = "https://api.darksky.net/forecast/513db1c84fa9354d5d2c0dac5aec4cfb/43.648660,-79.389137?lang=es&units=auto";


// request({url: url, json: true}, (error, response) => {
//     // console.log(response.body.currently);
//     if(error){
//         console.log("Unable to connect to Weather Service.");
//     } else if (response.body.error) {
//         console.log(chalk.red.bold.inverse(response.body.error));
//     } else {
//         const data = response.body.currently;
//         console.log(`${response.body.daily.data[0].summary} It is currently ${data.temperature} degrees out. There is a ${data.precipProbability}% chance of rain.`);
//     }

// });

geocode("toronto", (error, data) => {
    console.log(`Error: ${error}`);
    console.log('Data:', data);
})