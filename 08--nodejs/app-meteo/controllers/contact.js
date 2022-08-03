const express = require('express');
const router = express.Router();

// Page definition
// --

router.get('/contact', (request, response) => {
    response.render('contact', {
        page_name: "contact",
    });
});

// Module export 
// --

module.exports = router;