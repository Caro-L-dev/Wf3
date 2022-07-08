"use strict";

// EXERCICE 1

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1-a Afficher des photos de petites tailles sur la zone de droite.
// 1-b Lorsqu'une des photos est cliquée, celle-ci s'affiche automatiquement sur la mainPic.
// 2 (bonus) Ajouter la légende en passant par l'attribut "alt" de la balise 
// + focus en rouge sur la border.

// 2 : CODE ------------------------------------

function displayPics(images) {
    let mainPic = document.querySelector('.mainPic');
    // console.log(mainPic);

    let legend = document.querySelector('.legend');
    //console.log(legend);

    mainPic.src = images.src;
    legend.innerHTML = images.alt;
    mainPic.parentElement.style.display = "block";
};

// displayPics();

// -------------------------------------------------------------------------------------------- //

// EXERCICE 2

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1- Saisissez un texte et affichez automatiquement la meme valeur en dessous.

// 2 : CODE ------------------------------------

function sameText() {

};