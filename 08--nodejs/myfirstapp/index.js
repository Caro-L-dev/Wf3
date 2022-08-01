const express = require("express");
const path = require('path');
const args = require("./args");
const ejs = require('ejs');

const app = express();
const port = args.port;


// Explique à Express que les fichiers de vue (pages) sont en HTML
app.engine('.html', ejs.__express);

// Définition du répertoire "views"
app.set('views', path.join(__dirname, 'views'));

// Définition du moteur de rendu
app.set('view engine', 'html');


// Page routing
// --

app.get('/', (request, response) => {
    // response.send('Home');
    response.render('homepage');
});

app.get('/contact', (request, response) => {
    response.render('contact');
});

app.get('/about', (request, response) => {
    response.render('about');
});


// Server start
app.listen(port, () => {
    console.log(`Server Port: ${port}`);
});
