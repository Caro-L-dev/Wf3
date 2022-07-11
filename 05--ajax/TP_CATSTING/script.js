"use strict";

// API : https://catfact.ninja/docs/api-docs.json

// PAGE RACES

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// 1-a Afficher toutes les races de chat dans un menu défilant.
// 1-b Afficher le nombre de races retournées (resultats).
// 1-c Afficher les informations de la race selectionnée sur la carte de droite.
// 1-d Créer un bouton qui filtre les différentes catégories.


// 2 : CODE ------------------------------------
function showBreeds() {
  //  let response = null;

    const maPromesse = new Promise((resolve) => {
        let catBreedsApi = new XMLHttpRequest();
        catBreedsApi.open("GET", "https://catfact.ninja/breeds", true);
        catBreedsApi.onload = function (event) {
            if (catBreedsApi.readyState === 4) {
                if (catBreedsApi.status === 200) {
                    resolve(JSON.parse(catBreedsApi.responseText))
                } else {
                    console.error(catBreedsApi.statusText);
                }
            }
        };
        catBreedsApi.onerror = function (event) {
            console.error(catBreedsApi.statusText);
        };
        catBreedsApi.send(null);
    });

    maPromesse.then((response) => {
        console.log(response);
    });

    // Je cible l'endroit ou je compte afficher l'ensemble de mes races
    let breeds = document.querySelector('#breeds');
    console.log(breeds);

    // Je  crée des elts li qui receuilleront les races
    // A poursuivre
    let breed = document.createElement('li');
    breed.textContent = 'Persan';
    breeds.body.appendChild(breed);

    // boucle forEach / forIn ?
};

showBreeds();













// -------------------------------------------------------------------------------------------- //