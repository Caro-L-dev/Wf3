// Déclaration d'objet

var a = new Object();
var b = {};

var user = {
    firstname: "John",
    lastname: "DOE"
};

console.log( user.firstname );
console.log( user['firstname'] );

var user2 = new Object();
user2.firstname = "Bob";
user2.lastname = "DOE";



// Lire le contenue d'un objet

for (let key in user) 
{
    // console.log( user.key ); // NE FONCTIONNE PAS
    console.log( user[key] );
}