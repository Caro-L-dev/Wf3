// FOR
console.log("FOR");

for( let i = 0; i < 5; i++ )
{
    console.log( "For", i );
}

console.log('-----');

// WHILE
console.log("WHILE");

let i = 0;

while ( i < 5 )
{
    console.log("While", i);
    i++;
}

console.log('-----');

var fruits = ["Pommes", "Poires", "Bananes"];

while ( fruits.length )
{
    console.log( "While", fruits[0] );
    fruits.shift(); // Retire le 1er élèment du tableau pour éviter de 
    // boucler sur Pommes à l'infini
}

console.log('-----');

// DO WHILE
console.log("DO WHILE");

let j = 0;

do {
    console.log( "Do While", j );
    j++;
} while ( j < 10 )

console.log('-----');

// FOR EACH
console.log("FOR EACH");

var fruits = ["Pommes", "Poires", "Bananes"];

fruits.forEach( function ( fruit, f ) {
    console.log( "ForEach", f, fruit );
});

console.log('-----');

fruits.forEach(( fruit, f ) => {
    console.log( "ForEach", f, fruit );
});

console.log('-----');

// FOR IN
// for (key in object) { code à répéter }

var user = {
    firstname: "John",
    lastname: "DOE",
    age: 36
}

for ( key in user )
{
    console.log( "For In", key, user[key] );
}
// FOR OF

var fruits = ["Pommes", "Poires", "Bananes"];
for ( value of fruits )
{
    console.log( "For of", value );
}
of
{
 ...
}