// Portée de VAR           

// Déclaration de la variable "a"
var a = 42;

// Affichage de la variable "a"
console.log( "a", a );

// Déclaration d'une fonction
function MyFunction()
{
    // Appel de la variable "a" qui possède une portée globale
    console.log( "a", a );

    // Déclaration de la variable "b"
    var b = 21;

    //Affichage de la variable "b"
    console.log( "b", b );
}

// Appel d'une fonction
MyFunction();

// Affichage de la variable "b"
// Génére une erreur de références.
console.log( "b", b );