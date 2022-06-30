// Déclaration d'objet

var a = new Object();
var b = {};

var user = {
    firstname: "John",
    lastname: "DOE"
}

console.log(`Hello ${user.firstname}, how are you?`);

var user2 = {
    firstname2: "Bob",
    lastname2: "n"
}

// Lire le contenu d'un objet

for ( const  key in user)
{
    console.log( user[key] );
}