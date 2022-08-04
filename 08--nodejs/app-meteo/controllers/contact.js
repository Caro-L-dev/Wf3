const express = require('express');
const year = require('../utils/date');
const router = express.Router();

// Page definition
// --

router.get('/contact', (request, response) => {
    response.render('contact', {
        page_name: "contact",

        year: year,
    });
});

// Module export 
// --

module.exports = router;