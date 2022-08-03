const express = require('express');
const router = express.Router();

// Page definition
// --

router.get('/about', (request, response) => {
    response.render('about', {
        page_name: "about",
    });
});

// Module export 
// --

module.exports = router;