"use strict";

// Déclaration des constantes
const TVA = 20;

// Déclaration des variables
let montantTVA;
let prixHT;
let prixTTC;

// Affiche une instruction pour l'utilisateur
// Capture la valeur d'entrée prixHT
prixHT = prompt("Saisir le prix Hors Taxe");

// Vérification de l'entrée, si nombre ou pas.
if (isNaN(prixHT))
{
    console.error("Erreur de saisie");
}
else
{
    // Convertion de la chaine prixHT en nombre
    prixHT = parseFloat(prixHT);
    // console.log(prixHT, typeof(prixHT));

    // Calcul du montant de la TVA montantTVA
    montantTVA = prixHT * ( TVA/100 );
    console.log(montantTVA);

    // Calcul du prix TTC pricTTC
    prixTTC = prixHT + montantTVA;

    // Affiche le montant TVA et le prix TTC
    let output = `- Montant TVA : ${montantTVA}<br>- Prix TTC : ${prixTTC}`;
    document.write(output);
}