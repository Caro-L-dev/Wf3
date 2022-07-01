let users = [
    {
        firstname: "John",
        lastname: "DOE",
        age: 16
    },
    {
        firstname: "Jane26",
        lastname: "DOE",
        age: 32
    },
    {
        firstname: "Bob",
        lastname: "DOE",
        age: 21
    },
];

// John DOE n'est pas un utilisateur valide
// Jane26 n'est pas un utilisateur valide
// Bob DOE est un utilisateur valide


// Détailler étapes par étapes (notions JS + regex )

// Boucle sur la liste = tableau des utilisateurs
// for (i = 0; i < users.length; i++)
// {
// Lire un utilisateur
// console.log(users[i]);
// Vérifier le firstname
// Vérifier le lastname
// Vérifier l'age (min 18)
// console.log(users[i]);
//     if (users[i].firstname.match(/^[^a-z]*/i) && users[i].lastname.match(/^[^a-z]*/i) && users[i].age < 18 ) 
//     {
//         console.log(users[i].firstname, users[i].lastname, users[i].age,'Utilisateur invalide !');
//     }
//     else 
//     {
//         console.log(users[i].firstname, users[i].lastname, users[i].age, 'Utilisateur valide !');
//     }
// }

// -------------------------------------------------- //

console.log(users);
// CORRECTION
for (let i = 0; i < users.length; i++) {
    // console.log('-----------');
    // console.log( typeof users );
    // console.log( typeof users[i] );
    // console.log( users[i].firstname );


    // --- Lire un utilisateur ---
    console.log('-----------');
    console.log("Utilisateur : " + i);
    console.log(users[i].firstname);
    console.log(users[i].lastname);
    console.log(users[i].age);

    // --- Tester la validité de l'age ---
    // if ( users[i].age >= 18 )
    // {
    //     console.log("Age OK");
    // }
    // else
    // {
    //     console.log("Age KO");
    // }

    // --- Tester le firstname ---
    // if ( users[i].firstname.match( /^[a-z]+$/i ) )
    // {
    //     console.log("firstname OK");
    // }
    // else
    // {
    //     console.log("firstname KO");
    // }

    // --- Tester le lastname ---
    // if ( users[i].lastname.match( /^[a-z]+$/i ) )
    // {
    //     console.log("lastname OK");
    // }
    // else
    // {
    //     console.log("lastname KO");
    // }

    let isValid = true;

    if (users[i].age < 18) {
        isValid = false;
    }

    if ( !users[i].firstname.match( /^[a-z]+$/i ) ) {
        isValid = false;
    }

    if ( !users[i].lastname.match( /^[a-z]+$/i ) ) {
        isValid = false;
    }

    if (isValid) {
        console.log(`${users[i].firstname, users[i].lastname, users[i].age } is valid`);
    }
    else {
        console.log(`${users[i].firstname, users[i].lastname, users[i].age} is not valid`);
    }
}