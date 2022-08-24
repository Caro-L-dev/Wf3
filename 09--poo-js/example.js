let hello = "Hello World!";

console.log(hello.toLowerCase());

// === 

let person = {
    name: {
        firstName: "James",
        lastName: "Bond"
    },
    age: 36,
    hello: function() {
        console.log("Hello everyone, my name is " + this.name.firstName + "... "
        + this.name.firstName + " "+ this.name.lastName);
    }
};

person.hello();

person.height = 187;

person.ageYear = function() {
    this.age++;
    console.log("Congratulations! You are now " + this.age + " years old.");
    console.log("-----------------------");
};

person.ageYear();

// ===

/* EXERCICES ===

/* === EXO 1 ===

/*  
    1. Créer un objet nommé animal, 
    choisissez 3 propriétés (variable dans un objet)
    à y inclure ainsi qu'une méthode.
*/

let animal = {
    name: "marmot",
    fur: "grey",
    cuteness: "adorable",
    sayHi: function () {
        console.log(this.name + " stares at you on a rock");
    }
};

/*
    2. Utiliser la méthode (fonction dans un objet)
    de cet objet.
*/

animal.sayHi();

/*
    2. Ajouter une propriété et une méthode de votre choix.
*/

animal.place = "Savoie";

animal.home = function() {
    console.log("Well, "+ this.name + " stayed to " + this.place + " today.");
    console.log("-----------------------");
};

animal.home();

