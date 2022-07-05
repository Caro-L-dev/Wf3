"use strict";

const INVALID_FEEDBACK = "invalid-feedback";
const PASSWORD_MIN = 6;
const PASSWORD_MAX = 12;
const PASSWORD_SPECIAL_CHARS = "#@!?-_*";


// Recupération du noeux <form>
// --

let form = document.querySelector('[name=registration]');

requiredSymbol();



// Fonctions
// --

/**
 * Check the firstname value and show error if is not correct
 * 
 * @return bool
 */
function checkFirstname()
{
    let firstname = form.firstname;

    // supprime le msg d'erreur
    resetError(firstname);


    if (firstname.required && firstname.value.length == 0)
    {
        setError(firstname, "Le prénom est obligatoire");
        return false;
    }

    if (!firstname.value.match(/^[a-z]+$/i))
    {
        setError(firstname, "Le prénom n'est pas valide");
        return false;
    }

    return true;
}


/**
 * Check the lastname value and show error if is not correct
 * 
 * @return bool
 */
function checkLastname()
{
    let lastname = form.lastname;

    // supprime le msg d'erreur
    resetError(lastname);


    if (lastname.required && lastname.value.length == 0)
    {
        setError(lastname, "Le Nom est obligatoire");
        return false;
    }

    if (!lastname.value.match(/^[a-z]+$/i))
    {
        setError(lastname, "Le Nom n'est pas valide");
        return false;
    }

    return true;
}


function checkEmail()
{
    let email = form.email;

    resetError(email);

    if (email.required && email.value.length == 0)
    {
        setError(email, "L'adresse email est obligatoire");
        return false;
    }

    if (!email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    {
        setError(lastname, "Le Nom n'est pas valide");
        return false;
    }

    return true;
}

function checkPassword()
{
    let password = form.plain_password;

    resetError(password);

    // required
    if (password.required && password.value.length == 0)
    {
        setError(password, "Le mot de passe est obligatoire");
        return false;
    }

    // Minuscule
    if (!password.value.match(/[a-z]/))
    {
        setError(password, "Le mot de passe doit avoir un caractère minuscule");
        return false;
    }

    // Majuscule
    if (!password.value.match(/[A-Z]/))
    {
        setError(password, "Le mot de passe doit avoir un caractère majuscule");
        return false;
    }

    // Nombre
    if (!password.value.match(/[0-9]/))
    {
        setError(password, "Le mot de passe doit avoir un chiffre");
        return false;
    }

    // Caractère spécial
    // let re_spec = new RegExp(`[${PASSWORD_SPECIAL_CHARS}]`);
    // let re_spec = new RegExp("["+PASSWORD_SPECIAL_CHARS+"]");
    // if (!re_spec.test(password.value))
    // {
    //     setError(password, `Le mot de passe doit avoir un caractère spécial (${PASSWORD_SPECIAL_CHARS})`);
    //     return false;
    // }

    // Min 6
    if (!(password.value.length >= PASSWORD_MIN))
    {
        setError(password, `Le mot de passe doit contenir ${PASSWORD_MIN} caractères minimum`);
        return false;
    }

    // Max 12
    if (!(password.value.length <= PASSWORD_MAX))
    {
        setError(password, `Le mot de passe doit contenir ${PASSWORD_MAX} caractères maximum`);
        return false;
    }

    return true;
}

function checkPasswordConfirmation()
{
    let plain = form.plain_password;
    let confirm = form.confirm_password;

    resetError(confirm);

    if (confirm.value != plain.value)
    {
        setError(confirm, "les mots de passe doivent être identique")
        return false;
    }

    return true;
}


/**¨
 * Generate error messages
 * 
 * @param HtmlNode field
 * @param string message
 */
function setError(field, message)
{
    let error = document.createElement('DIV');
        error.classList.add(INVALID_FEEDBACK);
        error.innerText = message;

    field.parentNode.appendChild(error);
}

/**
 * Remove errors elements
 * 
 * @param HtmlNode field 
 */
function resetError(field)
{
    let errors = field.parentNode.querySelectorAll(`.${INVALID_FEEDBACK}`);
    errors.forEach(error => error.remove());
}

function requiredSymbol()
{
    // Get all required input
    let elements = form.querySelectorAll('[required]');

    elements.forEach(element => {
        let parent = element.parentNode;

        // Find the sibling <label> of the <input>
        let label = parent.getElementsByTagName('label');
            label = label[0];
        
        // Apply the required class to the <label>
        if (label)
        {
            label.classList.add('required'); // Required class is defined by CSS
        }
    });
}






// Controle du formulaire
// --

form.addEventListener('submit', event => {

    var isValid = true;

    if (!checkFirstname()) isValid = false;
    if (!checkLastname()) isValid = false;
    if (!checkEmail()) isValid = false;
    if (!checkPassword()) isValid = false;
    if (!checkPasswordConfirmation()) isValid = false;

    if (!isValid)
    {
        event.preventDefault();
    }

});



// Controle des champs "onBlur"
// --

form.firstname.addEventListener('blur', checkFirstname);
form.lastname.addEventListener('blur', checkLastname);
form.email.addEventListener('blur', checkEmail);
form.plain_password.addEventListener('blur', checkPassword);
form.confirm_password.addEventListener('blur', checkPasswordConfirmation);