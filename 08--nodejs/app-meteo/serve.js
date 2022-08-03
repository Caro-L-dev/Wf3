const express = require("express");
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;


// Explique à Express que les fichiers de vue (pages) sont en HTML.
app.engine('.html', ejs.__express);

// Définition du répertoire "views".
app.set('views', path.join(__dirname, 'views'));

// Définition du moteur de rendu.
app.set('view engine', 'html');


// Page routing
// --

app.get('/', (request, response) => {
  // response.send('homepage');
    response.render('homepage');
});

app.get('/contact', (request, response) => {
    response.render('contact');
});

app.get('/about', (request, response) => {
    response.render('about');
});


// Start server
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
});