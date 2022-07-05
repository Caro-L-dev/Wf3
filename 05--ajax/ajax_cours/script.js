// Création du XMLHttpRequest Object
// const xhr = new XMLHttpRequest();
// // Initialiser et parametrer notre requete.
// xhr.open('GET', 'https://randomuser.me/api/', true);
// // Gestion de la réponse
// xhr.onload = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }
// // On envoie la requete.
// xhr.send();

// ---------------------------------- //
// Display a dog image!

// Création du XMLHttpRequest Object
const dogApi = new XMLHttpRequest();
// Initialiser et parametrer notre requete.
dogApi.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
// Gestion de la réponse
dogApi.onload = function () {
    if (dogApi.readyState === 4 && dogApi.status === 200) {
        console.log(JSON.parse(dogApi.responseText));
      //  screen.style.backgroundImage = JSON.parse(dogApi.responseText).message
    }
}
// On envoie la requete.
dogApi.send();

// ---- 
// Cibler le button
let btn = document.getElementsByTagName('button');
btn = btn[0];
console.log(btn);

// J'écoute un event
btn.addEventListener('click', () => {
    console.log(btn);
});


// Conditions pour le button
if ( dogApi.message === dogApi.status.success) {
    displayImg();
}
else
{
    console.log("Erreur 404 !");
}


function displayImg()
{
    console.log("J'affiche une image de chien random dans mon rectangle");

    let rect = document.getElementsByClassName('rectangle');
        rect = rect[0];
        console.log(rect);

        let img = document.getElementsByTagName('img');
        img = img[0];
        console.log(img);

    dogApi.message
}