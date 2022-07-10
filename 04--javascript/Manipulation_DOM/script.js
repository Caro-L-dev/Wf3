"use strict";

// EXERCICE 1

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1-a Afficher des photos de petites tailles sur la zone de droite.
// 1-b Lorsqu'une des photos est cliquée, celle-ci s'affiche automatiquement sur la mainPic.
// 2 (bonus) Ajouter la légende en passant par l'attribut "alt" de la balise

// 2 : CODE ------------------------------------

function displayPics(images) {
  let mainPic = document.querySelector(".mainPic");
  // console.log(mainPic);

  let legend = document.querySelector(".legend");
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

function copyPaste() {
  let inputInitial = document.querySelector("#init");
  let inputPaste = document.querySelector("#paste");

    inputInitial.addEventListener("keyup", () => {
        inputPaste.value = inputInitial.value;
  });
};

copyPaste();

// EXERCICE 3

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1- Saisissez un nombre et affichez automatiquement sa valeur carrée et sa valeur cube.

// 2 : CODE ------------------------------------

function calculNumber() {
    let number = document.querySelector("#number");
    let initNumber = document.querySelector("#initNumber");
    let carreNumber = document.querySelector("#carreNumber");
    let cubeNumber = document.querySelector("#cubeNumber");
  
    number.addEventListener("keyup", () => {
        initNumber.textContent = number.value;
        carreNumber.textContent = number.value * number.value;
        cubeNumber.textContent = number.value * number.value * number.value;
    });
};
  
calculNumber();

// EXERCICE 4

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1- Afficher un carré bleu ainsi qu'un bouton nommé "bouge".
// 1-b Lors d'un clic sur le bouton, le carré se déplace.

// 2 : CODE ------------------------------------

function blueSquareMove() {
    let square = document.querySelector(".square");
    let squareBtn = document.querySelector('#squareBtn');

    squareBtn.addEventListener("click", () => {

        if (!square.style.marginLeft || square.style.marginLeft == '0px') {
            if (!square.style.marginTop || square.style.marginTop == '0px') {
                square.style.marginTop = '100px';
            }
            else {
                square.style.marginLeft = '100px';
            }
        }
        else {
            if (!square.style.marginTop || square.style.marginTop == '0px') {
                square.style.marginLeft = '0px';
            }
            else {
                square.style.marginTop = '0px';
            }
        }
    });
};

blueSquareMove();

// EXERCICE 5

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1- Afficher un carré vert qui bouge au moment du scroll avec la souris.

// 2 : CODE ------------------------------------

let greenSquarePosition = 0;

function squareScroll() {
    let squareGContainer = document.querySelector(".square-container");
    let squareG = document.querySelector(".squareG");

    squareGContainer.addEventListener("wheel", (event) => {
        // empêche de scroller toute la fenêtre
        event.preventDefault();

        if(event.deltaY > 0 && greenSquarePosition >= 100) {
            // on scroll vers le bas -> on va à gauche
            greenSquarePosition = greenSquarePosition - 100
            squareG.style.marginLeft = greenSquarePosition + 'px';

        } else if (greenSquarePosition <= 600) {
            // on scroll vers le haut -> on va à droite
            greenSquarePosition = greenSquarePosition + 100
            squareG.style.marginLeft = greenSquarePosition + 'px';
        }
    });
};

squareScroll();