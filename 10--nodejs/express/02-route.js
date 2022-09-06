const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/bonjour', (req, res) => { 
    
    res.send('Hey Hey!'); 
});

app.get('/fichier/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/page1.html'));
    /*
    * sendFile va aller chercher un fichier dans notre arboressence,
    * l'attribut 'path' et la méthode 'join' va nous permettre de concatener notre route.js
    *  au chemin page.html
    */

    // Refresh la page du navigateur pour afficher le contenu du console.log dans le terminal
    console.log("__dirname", __dirname);
    console.log(path.join( __dirname, 'views/page1.html'));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});