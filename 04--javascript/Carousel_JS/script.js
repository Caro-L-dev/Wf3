"use strict";

// 1 : PSEUDO-CODE ---------------------------------
// Objectif : 
// Au clic de l'utilisateur -> les images défilent
// dans un ordre précis.

// Option 1 :
// Modifier grace au bg image -> en modifiant la source.
// Option 2 :
// Mettre une balise img

// Futurs problèmes
// L'évènement click doit s'activer uniquement au clic sur l'image.
// Lorsque l'on  arrive à la 5eme image : on retourne au départ.

// Style :
// Hover : border
// Div ou ...

// Outils :
// addEventListener()
// querySelector()
// Fonctions
// Boucles ???
// Tableau (pour stocker les images ) : les sources


// 2 : CODE ----------------------------------------

// Cibler les élèments
let carousel = document.querySelector('.carousel');

let images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg'
];

// Ajouter l'écouteur d'event
carousel.addEventListener('click', changeUrl );

let index = 0;

function changeUrl() {
    index++;
    if ( index == images.length ) {
        index = 0;
    }
    console.log(images[index]);
    carousel.style.backgroundImage = "url('./images/" + images[index] + "')";
};