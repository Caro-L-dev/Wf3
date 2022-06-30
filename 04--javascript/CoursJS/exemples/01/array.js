// Déclaration de tableau

// var a = new Array();
// var b = [];

// console.log("a", typeof a);
// console.log("b", typeof b);

// var a_arbres = new Array(
//     "Sequoia",
//     "laurier",
//     "cèdre",
//     "chene",
//     "érable"
// );

// console.log("a_arbres", typeof a_arbres);
// console.table(a_arbres);

// console.log( "-------" );

// var c = new Array(10);
// console.log( c );

console.log("---------------");
// Ajouter une entrée (méthode "array.push()");

// var a = [];

// console.table( a );

// a.push('Pommes');
// console.table( a );

// a.push('Oranges');
// a.push('Papayes');
// console.table( a );


// Affiche toutes les lignes du tableau une à une

// for (let i = 0; i < a.length; i++) 
// {
//     console.log( a[i] );
// }

console.log('-----------------------');
myFruitsBaskets = ["Pommes", "Poires", "Bananes"];
var output = "";

// Recréer la méthode join()
// - Parcourir un tableau
// - Concaténation
// - Condition

// Sortie: Pommes, Poires, Bananes
// NON:  , Pommes, Poires, Bananes
// NON: Pommes, Poires, Bananes,

for ( let i = 0; i < myFruitsBaskets.length; i++)
{
    if (output.length != 0)
    {
        output += ",";

    }
    output += myFruitsBaskets[i];
}

console.log( output );
