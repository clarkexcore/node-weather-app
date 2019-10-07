//Required Local Files
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//Command Line Argument
const city = process.argv[2];

if(!city){
    console.log("Please Provide City");
} else {
    geocode(city, (error, {lat, lon, location}) => {
        if(error){
            return console.log(error);
        }
        forecast(lat, lon, (error, {summary, currentTemp, precip}) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(`${summary} It is currently ${currentTemp} degrees outside, with a ${precip}% chance of rain.`);
        })
    });
}

