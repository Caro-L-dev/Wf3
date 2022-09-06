const express = require('express');
const app = express(); // Initialisation d'express sous forme de fonction, elle meme stockée dans une variable.
const port = 3000;

app.get('/', (req, res) => { // 1er argument -> '/' pour la route ici notre index.js(acceuil)
    
    res.send('Hello world!'); // On envoie la r&ponse client.

});

app.listen(port, () => {
    /*
    * Listen = écoute ce qui va se passer sur le port (arg 1),
    * puis éxécute cette fonction CALLBACK au lancement du serveur.
    */
    console.log(`Serveur lancé sur le port ${port}`);
});