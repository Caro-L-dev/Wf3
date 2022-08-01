const fs = require('fs');

console.log('App.js is OK');
// console.log( process );

let json = "{\"name\":\"john\",\"age\":32}";

// Crée le fichier s'il n'existe pas déjà,
// sinon écrase les dernières données.
fs.writeFileSync('test.json', json);

// -----

fs.writeFileSync('test.txt', "Holà!");

let content = fs.readFileSync('test.txt', "utf8");
fs.writeFileSync('test.txt', `${content}\nHello Buddy`);