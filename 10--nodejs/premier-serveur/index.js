const http = require('http') 

/*
http est un module de Node permettant de gérer un serveur HTTP.
C'est à dire, un serveur web sur lequel on va pouvoir lancer des requetes.
*/

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200; // code standardisé pour dire OK à la eéponse, tout c'est bien déroulé.
    res.setHeader('Content-Type', 'text/html'); // Meta non visible
    res.end('Hello World'); // Contenu textuel visuel

}) // La méthode createServer de notre module http pour créer notre serveur a été utilisé.

// B - Démarrer le serveur

server.listen(port, hostname, () => {

    console.log(`Server running at http:// ${hostname}:${port}/`);

})

/** la méthode .listen permet de lancer notre serveur
- 1er paramètre : le port utilisé
- 2eme paramètre : l'adresse locale de votre machine, peu importe votre système d'exploitation, 
ce sera toujours 127.0.0.1 (correspondant à localhost)
- 3eme paramètre : une fonction anonyme qui sera executée au démarrage du serveur
 */


