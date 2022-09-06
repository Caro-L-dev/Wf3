const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/bonjour/:prenom', (req, res) => { 
    // On va personnaliser notre route afin de récupérer la valeur d'une var/const

    /*
    * Désormais il faudra indiquer un nom dans l'url après '/bonjour/monPrenom...'
    * En réalité, nous indiquerons dans l'url aprs ""
    * sera stockée dans une variable propre à Express.
    */

    console.log(req.params);

    const text = `Bonjour ${req.params.prenom}`;

    res.send(text);
});

app.get('/articles/:id', (req, res) => {

    console.log(req.params);
    res.send(`Article #${req.params.id} du blog`);
});

app.get('/fichier/html', (req, res) => {

    res.sendFile(path.join(__dirname, 'views/page2.html'));
    console.log("__dirname", __dirname);
    console.log(path.join( __dirname, 'views/page2.html'));
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});