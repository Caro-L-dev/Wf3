"use strict";

// Objectif : Controle du formulaire lors de la soumission,
// ou lorsque l'utilisateur quitte le champ.

// Récupération du noeud form
let form = document.getElementsByName('registration');
    form = form[0];
    console.log(form);

// let firstname = form.firstname;
// console.log( firstname );

// Controle du formulaire
// --

// Lors de la soumission
form.addEventListener('submit', event => {

    // Cette variable considère que le formulaire est valide avant les tests
    var isValid = true;

    // On stoppe la soumission du form
    // if (!isValid)
    // {
        event.preventDefault();
    // }
    

});

// Controle du champ "firstname" lorsque l'utilisateur quitte le champ
// form.firstname.addEventListener('blur', checkFirstname );
form.firstname.addEventListener('blur', checkLastname );

// Fonctions
// --

// Fonction de controle du champ "firstname"
// function checkFirstname()
// {
//     return true;
// }

// Controle de la data
// --

// Champ obligatoire
if (firstname.required && firstname.value.length == 0)
{
    console.log("Le prénom est obligatoire");

    let error = document.createElement('DIV');
    error.classList.add('invalid-feedbacks');
    error.innerText = "Le prénom est obligatoire"

    return false;
}

// Fonction de controle du champ "lasttname"
function checkLastname()
{
    console.log('Control of lastname');
}