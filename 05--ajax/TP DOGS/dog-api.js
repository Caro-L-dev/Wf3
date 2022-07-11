// === TP 1 : Dogs === //

// Se rendre sur cette API : https://dog.ceo/dog-api/ 
// et afficher de magnifiques toutous.


// 1
let button = document.querySelector('button');
let image = document.querySelector('.square');

let selectBox = document.querySelector('select');

// 2
button.addEventListener('click', changeImage);
selectBox.addEventListener('change', selectBreed);

// 3
function changeImage() {
    // console.log('Le bouton a été cliqué');

    let dogsApi = new XMLHttpRequest();
    dogsApi.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    dogsApi.onload = function () {
        if (dogsApi.readyState === 4 && dogsApi.status === 200) {
            // Endpoint
            const url = JSON.parse(dogsApi.responseText).message;
            // image.style.backgroundImage = 'url(' + url + ')';
            image.style.backgroundImage = `url('${url}')`;
            console.log(url);
        }
    }
    dogsApi.send();
}

// === TP 2 : Breeds === //

// Ajouter un sélecteur avec toutes les races
// Si l'utilisateur choisit "Akita", c'est un Akita qui s'affiche 
// en appuyant sur le bouton.


// Récupérer la liste des races  dans la console // DONE
function selectBreed() {
    // console.log('La balise select a été séléctionné');

    let dogsBreedsApi = new XMLHttpRequest();
    dogsBreedsApi.open('GET', 'https://dog.ceo/api/breed/African/images/random', true);
    dogsBreedsApi.onload = function () {
        if (dogsBreedsApi.readyState === 4 && dogsBreedsApi.status === 200) {
            const url = JSON.parse(dogsBreedsApi.responseText).message;
            // console.log(url);

            for (const breed in url) {
                // console.log(`${breed} ${url[breed]}`);
                let opt = document.createElement("option");
                opt.text = `${breed}: ${url[breed]}`;
                selectBox.add(opt, null);
            }
        }
    }
    dogsBreedsApi.send();
};


// Create option using DOM
const newOption = document.createElement('option');
const optionText = document.createTextNode('Ici :');
// set option text
newOption.appendChild(optionText);
// and option value
newOption.setAttribute('value', 'Option Value');
// add the option to the select box
selectBox.appendChild(newOption);


// Cibler une race en particulier dans la console
// Ajouter un event dessus, au clic sur selectOption
// Puis afficher la race selectionnée dans le navigateur 