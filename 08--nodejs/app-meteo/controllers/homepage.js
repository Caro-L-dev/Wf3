const express = require('express');
const year = require('../utils/date');
const router = express.Router();
const axios = require('axios').default;


async function getIp() {
    let result = await axios.get('http://api.my-ip.io/ip');
    return await result.data;
};

async function getLocation(ip) {
    let result = await axios.get(`http://ip-api.com/json/${ip}`);
    return await result.data;
};

async function getWeather(latitude, longitude) {
    let result = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
    return await result.data;
};


// Page definition
// --

router.get('/', async (request, response) => {

    // Retrieve API data
    // --

    let ip = await getIp();
    console.log(ip);
    let location = await getLocation(ip);
    console.log(location);
    let weather = await getWeather(
        location.lat,
        location.lon
    );

    // Retrieve Weather data
    // -- 

    // Rendering the response
    // --

    response.render('homepage', {
        page_name: "homepage",
        year: year,

        ip: ip,
        country: location.country,
        city: location.city,
        latitude: location.lat,
        longitude: location.lon
    });
});



// Parse date elements
// --

// Init date with the weather time
// let date = new Date();
// console.log(date);

// Get date elements
// let weekday  = date.getDay();
// let day      = date.getDate();
//     day      =  day <= 9 ? `0${day}`;
// let month    = date.getMonth();
// let hour     = date.getHours();
//     hour     = hour <= 9 ? `0${hour}`;



// Module export 
// --

module.exports = router;