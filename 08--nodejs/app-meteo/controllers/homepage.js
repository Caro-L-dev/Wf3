const express = require('express');
const year = require('../utils/date');
const router = express.Router();
const axios = require('axios').default;

// ARRAY
// --

const day_names = new Array(7);
day_names[0] = "Dimanche";
day_names[1] = "Lundi";
day_names[2] = "Mardi";
day_names[3] = "Mercredi";
day_names[4] = "Jeudi";
day_names[5] = "Vendredi";
day_names[6] = "Samedi";

const month_names = new Array(12);
month_names[0] = "Janvier";
month_names[1] = "Février";
month_names[2] = "Mars";
month_names[3] = "Avril";
month_names[4] = "Mai";
month_names[5] = "Juin";
month_names[6] = "Juillet";
month_names[7] = "Aout";
month_names[8] = "Septembre";
month_names[9] = "Octobre";
month_names[10] = "Novembre";
month_names[11] = "Décembre";



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

let times = weather.hourly.time;
let temperatures = weather.hourly.temperature_2m;
let humidity = weather.hourly.relativehumidity_2m;
let wind = weather.hourly.windspeed_10m;


// Build new Weather Data array
// --

let wd = {};

times.forEach((time, index) => {
    // Parse date elements
    // --

    // Init date with the weather time
    let date = new Date();
    console.log(date);

    // Get date elements
    let weekday = date.getDay();
    let day = date.getDate();
    day = day <= 9 ? `0${day}` : day;
    let month = date.getMonth();
    let hour = date.getHours();
    hour = hour <= 9 ? `0${hour}` : hour;
    let min = date.getMinutes();
    min = min <= 9 ? `0${min}` : min;

    // Define the "wd key" wd = weather data | like "Monday 01 January"
    let key = `${day_names[weekday]} ${day} ${month_names[month]}`;

    // Create the "wd key" if not exist
    if (wd[key] == undefined) 
    {
        wd[key] = [];
    }

    // Add weather data by times in the "wd key"
    wd[key].push({
        time: `${hour}:${min}`,
        temperature: temperatures[index],
        humidity: humidity[index],
        wind: wind[index],
    })
});







// Module export 
// --

module.exports = router;