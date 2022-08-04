const express = require('express');
const year = require('../utils/date');
const router = express.Router();
// const axios = require('axios').default;

// Page definition
// --

router.get('/', (request, response) => {
    response.render('homepage', {
        page_name: "homepage",
        year: year,

        // ip: ip,

        // country: location.country,
        // city: location.city,
        // latitude: location.lat,
        // longitude: location.lon,

        // temperature_unit: temperature_unit,
        // humidity_init: humidity_unit,
        // windspeed_unit: windspeed_unit,

        // wd: wd,
    });
});

// Module export 
// --

module.exports = router;