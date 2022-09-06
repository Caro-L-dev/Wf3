const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home');
})

app.get('/hello/:name', (req, res) => {

    const data = {
        //  name: req.params.name
    }

    // res.render('pages/hello', data);
    res.render('pages/hello', { name: req.params.name });
})



app.listen(port, () => {
    console.log(`Lancement du serveur sur le port ${port}`);
})

// params = tout ce qu'on rajoute dans l'url.