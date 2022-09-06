const { log } = require('console');
const { response } = require('express');
const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.send('Hello word !');
})

app.get('/bonjour/:prenom', (req, res) => {
    console.log(req.params);
    const text = `Bonjour ${req.params.prenom}`;
    res.send(text);
});

app.get('/articles/:id', (req, res) =>{
        /**modifications de l'URL: 'ecrire + selectionner + touche "Entrer"'
     * pour ajouter des indices à une url, on inscrit dans celle-ci 
     * nos indices directement de la manière suivante : 
     * ? 1erIndice = valeur & 2emIndice = valeur & 3emIndice = valeur ... & NemeIndice = valeur
     */
    console.log(req.params);
    res.send(`Article #${req.params.id} du blog`);

    console.log(req.params);
    console.log(req.query); //Nous permet de voir tout ce que nous avons rajouté dans l'URL
})

//On va adapter notre route "/Bonjour..."
app.get('/Bonjour', (req, res) =>{
    console.log(req.params);

    //maintenant inscrire dans l'URL /bonjour?prenom=jean&nom=Dupont
    console.log(req.query);//verifier dans la console

    const text = `Bonjour ${req.query.prenom} ${req.query.nom}`;

    res.send(text);
});


app.get('/fichier/html', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views/page2.html'));
    console.log("__dirname", __dirname);
    console.log(path.join(__dirname, 'views/page2.html'));
})



app.listen(port, ()=>{

    console.log(`serveur lancé sur le port ${port}`);
})