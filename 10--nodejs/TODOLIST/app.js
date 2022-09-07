const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;


// Pour utiliser la session.
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    // Pour utiliser la session.
    if (!req.session.tasks) {
        req.session.tasks = [];
    };

    // La variable tasks stocke les élèments de notre session.
    res.render('todolist', { tasks: req.session.tasks });

});

// const tasks = [

//     {
//         title: "Apprendre à programmer",
//         done: false,
//     },
//     {
//         title: "Faire les courses",
//         done: true,
//     }

// ];

// console.log(tasks);

app.post('/task', (req, res) => {

    console.log(req.body);

    if (req.body.task) {

        // .push ajoute une nouvelle tache sous forme d'objet dans la liste.
        req.session.tasks.push({
            title: req.body.task,
            done: false
        })
    }

    res.redirect('/');

});



app.get('/task/:id/done', (req, res) => {

    // CONDITION = Assure toi d'avoir un identifiant avant d'effectuer la tache == SECURITE.
    // Est ce que l'identifiant existe ?
    // C'est pour s'assurer d'etre au bon endroit.
    if (req.session.tasks[req.params.id]) {
        req.session.tasks[req.params.id].done = true;
    }

    res.redirect('/');
});

app.get('/task/:id/delete', (req, res) => {

    if (req.session.tasks[req.params.id]) {
        // Supprime une tache passée en phase "terminée".
        req.session.tasks.splice(req.params.id, 1) = true;
    }

    res.redirect('/');
});


app.listen(port, () => {
    console.log(`🚀 Lancement du serveur sur le PORT ${port} ✨`);
});