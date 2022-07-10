"use strict";

// EXERCICE 1 - Simulateur de discussion

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// Développer un script qui va demander les informations suivantes à l’utilisateur :

// - “Veuillez entrer un premier prénom” → ex: Stella
// - “Veuillez entrer un second prénom” → ex: Marcus
// - “Veuillez entrer un premier état du jour” → ex: Très bien
// - “Veuillez entrer un second état du jour” → ex: Plutôt bien oui
// - “Veuillez entrer une heure” → ex: 11
// - “Veuillez entrer un jour” → ex: mardi

// Une fois ces informations stockées dans des variables, affichez la discussion suivante dans votre **console** :

// - **Stella** : Bonjour !
// - **Marcus** : Bonjour **Stella !** Comment vas-tu ?
// - **Stella** : **Très bien**, et toi ?
// - **Marcus** : **Plutôt bien oui**, je te remercie.
// - **Stella** : Quelle heure est-il ?
// - **Marcus** : Il est **11** heures**.**
// - **Stella** : D’acc, merci.
// - **Marcus** : Où manges-tu aujourd’hui ?
// - **Stella** : Je rentre chez moi comme les **mardi**s
// - **Marcus** : D’acc.

// **Instructions :**

// → Les éléments en **vert** doivent-être stockés dans des variables afin de permettre la possibilité d’évolution dans le temps.

// → Veuillez ajouter des commentaires pour expliquer votre code. (une habitude à prendre)

// 2 : CODE ------------------------------------

function exo1() {
  let firstName = "Stella";
  let secondName = "Marcus";
  let stateDay = "Très bien";
  let secondStateDay = "Muy bien";
  let hour = 11;
  let day = "mardi";

  console.log(`${firstName}: Bonjour !`);
  console.log(`${secondName}: Bonjour ${firstName}! Comment vas tu ?`);
  console.log(`${stateDay}: et toi ?`);
  console.log(`${firstName}: Quelle heure est-il ?`);
  console.log(`${secondName}: Il est ${hour} heures.`);
};

// exo1();

// -------------------------------------------------------------------------------------------- //

// EXERCICE 2 - Conditions

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// Dans votre **console**, développez un programme qui part de l’age de l’utilisateur (que vous lui demandez bien évidemment).

// En fonction de l’age de l’utilisateur, affichez si celui-ci est majeur ou mineur avec les phrases suivantes :

// - “Vous êtes mineur”
// - “Hey ! Vous êtes majeur !“

// En partant du même programme, tu peux ajouter une option supplémentaire :

// Lorsque l’utilisateur a 21 ans ou plus, il a la majorité internationale. Alors il faut lui préciser ! 🙂

// 2 : CODE ------------------------------------

function exo2() {
  let ageCondition = 21;

  if (ageCondition >= 18) {
    console.log("Hey ! Vous êtes majeur !");
  } else if (ageCondition >= 21) {
    console.log("Hey ! Vous êtes majeur de façon internationale !");
  } else {
    console.log("Vous êtes mineur");
  }
};

// exo2();

// -------------------------------------------------------------------------------------------- //

// EXERCICE 3 - Boucles

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// Développez un script qui récupère un chiffre de 0 à 10 (fournis par l’utilisateur) et retourne un affichage semblable à celui ci-dessous :

// ```jsx
// l'affichage si l'utilisateur tape 5
// 1 ->
// 2 ->
// 3 ->
// 4 ->
// 5 -> ...

// l'affichage si l'utilisateur tape 3
// 1 ->
// 2 ->
// 3 -> ...
// ```

// Si l’utilisateur donne un chiffre supérieur à 10, la fonction retournera la phrase suivante :

// “Vous êtes trop gourmand...”

// 2 : CODE ------------------------------------

function exo3() {
  let number = 9;

  if (number > 10) {
    console.log("Vous etes trop gourmand");
  } else {
    for (let i = 1; i <= number; i++) {
      let messageAffiche = i + " ->";

      if (number == i) {
        messageAffiche += " ...";
      }

      console.log(messageAffiche);
    }
  }
};

// exo3();

// -------------------------------------------------------------------------------------------- //

// EXERCICE 4 - Cut the word

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// Pour cet exercice. Votre objectif est de créer une fonction (ou d’utiliser une fonction prédéfinies)
// qui supprime les premier et dernier caractères d'une chaîne.
// Vous avez un paramètre, la chaîne d'origine.
// Vous n'avez pas à vous soucier des chaînes de moins
// de deux caractères, elles doivent resortir telle qu’elles sont.

// 2 : CODE ------------------------------------

function exo4() {
  let myString = "Javascript";
  let result = myString.slice(1, -1);

  console.log(result);
};

// exo4();

// -------------------------------------------------------------------------------------------- //

// EXERCICE 5 - Happy birthday

// 1 : PSEUDO-CODE ----------------------------
// Objectif :
// Créez une fonction qui va récupérer une date d’anniversaire de l’utilisateur au format suivant : “17-01-2022”.
// Si le jour et le mois coincident avec le jour et le mois actuelle, affichez à l’utilisateur la phrase suivante “Joyeux anniversaire ! Tu obtiens une promotion de 30% sur tous les articles !”.
// Sinon affichez “En ce moment, une promotion de 15% sur tous les articles”

// 2 : CODE ------------------------------------

function exo5() {
  let birthDate = console.log(
    "Quelle est votre date de naissance ?",
    "jj/mm/aaaa"
  );
  // Une regexp de vérification de la syntaxe jj/mm/aaaa
  let reg = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
  while (!reg.test(birthDate)) {
    // Si la syntaxe est incorrect
    console.log("Erreur. Respectez le format : jj/mm/aaaa"); //  Signale une erreur
    birthDate = console.log(
      "Quelle est votre date de naissance ?",
      "jj/mm/aaaa"
    ); // Et redemande à nouveau
  }
  let currentDate = new Date(); // Date actuelle.
  let currentMonth = currentDate.getMonth() + 1;
  let currentDay = currentDate.getDate();

  let age = currentDate.getFullYear() - RegExp; // Age sauvegardé.
};

// exo5();

// -------------------------------------------------------------------------------------------- //

// EXO test : TABLEAUX + BOUCLES
function basicLoopOnArray() {
  let tableau = ["chat", "chien", "patate"];

  for (let index = 0; index < tableau.length; index++) {
    console.log(tableau[index]);
  };
};

basicLoopOnArray();

// Affiche 1.2.3.4 etc jusqu'à 25.
function loopIndex() {
  let number = 25;

  for (let index = 1; index <= number; index++) {
    console.log(index);
  };
};

loopIndex();