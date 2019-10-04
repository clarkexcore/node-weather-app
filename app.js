//Required Local Files
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//Command Line Argument
const city = process.argv[2];

if(!city){
    console.log("Please Provide City");
} else {
    geocode(city, (error, data) => {
        if(error){
            return console.log(error);
        }
        forecast(data.lat, data.lon, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(data.location);
            console.log(`${forecastData.summary} It is currently ${forecastData.currentTemp} degrees outside, with a ${forecastData.precip}% chance of rain.`);
        })
    });
}

