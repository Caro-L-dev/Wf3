const express = require('express');
const router = express.Router();

// Page definition
// --

router.get('/', (request, response) => {
    response.render('homepage', {
        page_name: "homepage",
        user: "John"
    });
});

// Module export 
// --

module.exports = router;