// Import du composant "https" de node, pour executer une requete  sur une adresse Https.
var https = require('https');

// Import du composant args.
// Si on ne récupère pas les arguments, l'utilisateur ne pourra pas choisir sa devise,
// et le script sera statique au lieu d'etre dynamique.
const args = require('./args');

// Definition de la devise par défaut.
let defaultCurrency = "USD";

// Définition de la devise souhaitée.
let currency = args.currency ?? defaultCurrency;

// Dans le terminal, tapez
// node btc.js currency=EUR ou currency=YEN
// console.log( currency );

// ---

// Définition des sections de l'url
const options = {
    host: "api.coindesk.com",
    path: "/v1,bpi,currentprice.json",
};

// J'execute la requete (http.request) sur le serveur définit par "options".
// Je stocke l'éxécution de la requete dans une variable (const request)
// Si la requete est OK, j'éxécute la fonction de callback.
const request = https.request(options, response => {

    // Défintion d'une variable "data" qui nous servira à stocker les données
    var data = "";

    // Lorsque la "response" reçoit des données, j'attrape les données pour les
    // ajouter à la variable "data".
    response.on('data', chunck => {
        data += chunck;
    });

    response.on('end', () => {
        //  console.log( typeof data );

        // Convertion des données "text" en "json".
        let json = JSON.parse(data);

        // Récupération de la liste des prix du BTC (Bitcoin Price Index)
        let bpi = json.bpi;
        //console.log( bpi[currency] );

        // Récupération du prix du BTC dans la devise souhaitée.
        let price = bpi[currency];

        // Si "price" contient une donnée, j'affiche le taux de change.
        if (price) {
            console.log( `1 BTC vaut ${price.rate} ${currency}` );
        }
        // Si "price" ne contient pas de donnée, j'affiche un message de devise inconnue.
        else {
            console.log("La devise est inconnue");
        }
    });

});

// Si la requete est KO, j'affiche un message d'erreur.
request.on('error', function (e) {
    console.log(e.message);
});


// console.log( process );
