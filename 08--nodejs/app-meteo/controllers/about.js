const express = require('express');
const year = require('../utils/date');
const router = express.Router();

// Page definition
// --

router.get('/about', (request, response) => {
    response.render('about', {
        page_name: "about",

        year: year,
    });
});

// Module export 
// --

module.exports = router;