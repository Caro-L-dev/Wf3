"use strict";

let fruits = [
    "Pomme",
    "Orange",
    "Nashi"
];

// Boucle For
for (let i = 0; i < fruits.length; i++) 
{
    console.log( i, fruits[i] );
}

console.info('------------------');

// Boucle While
var i = 0;

while (i < fruits.length) 
{
    console.log( fruits[i] );
    i++;   
}

console.info('------------------');

fruits = [];

while (fruits.length)
{
    console.log( fruits[0] );
    fruits.shift();
}

console.info('------------------');

// Boucle Do while

fruits = [
    "fraise",
    "kiwi"
];

do {
    console.log( fruits[0] );
    fruits.shift();
} while (fruits.length);