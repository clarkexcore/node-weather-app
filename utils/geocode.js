const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiY2xhcmtleGNvcmUiLCJhIjoiY2sxY2Yzb3BsMHRodDNubmswcWJ0NTcxcSJ9.qmHXNDUeh7iVF2vD9QS_4w&limit=1`;

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to Mapbox.', undefined);
        } else if (response.body.features.length === 0){
            callback('Unable to find the location. Try another search scumbag.', undefined);
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                lon: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    })

}

module.exports = geocode;