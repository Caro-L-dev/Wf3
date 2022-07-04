"use strict";

// Récupération du noeux HTML .light
let light = document.getElementsByClassName('light');
    light = light[0];
    console.log(light);

// Récupération du noeux button
let btns = document.querySelectorAll('[data-switch]');

// Boucle sur la liste des boutons car plusieurs btns
// Anticipe la possibilité d'en avoir plus dans le futur
btns.forEach( btn => {
    console.log( btn.dataset );

    // Pour chaque btn, on écoute le "click"
    btn.addEventListener('click', () => {

        console.log(btn);
        console.log(btn.dataset);

        // Si l'attribut du "data-switch" du bouton vaut "ON"
        // La fonction switchOnTheLight est éxécutée.
        if ( btn.dataset.switch == "on")
        {
            switchOnTheLight();
        }
        // Si l'attribut du "data-switch" du bouton vaut "OFF"
        // La fonction switchOffTheLight est éxécutée.
        else
        {
            switchOffTheLight();
        }
    });
});

function switchOnTheLight()
{
    console.log(" Allume la lumière ");
    light.classList.add('on');
}

function switchOffTheLight()
{
    console.log(" Eteind la lumière ");
    light.classList.remove('on');
}