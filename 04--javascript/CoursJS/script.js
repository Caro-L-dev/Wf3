// 2.1 Hello World

function hello() {
  let prenom = "Max";
  prompt("Bonjour", prenom);
};

// hello();

// ---------------------------------------------------------------- //

// 2.2 Opérations & boucles

// 2.2.1 Pyramide de Mario

function pyramid() {
  let upstairs = prompt(
    "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux tu ?"
  );
  let output = "#";
  for (let i = 1; i <= upstairs; i++) {
    output += "#";
    console.log(output);
  }
};

// pyramid();

// 2.2.2 Calculs rapides
function facto() {
  function fact(nbr) {
    let result = 1;
    for (let index = 1; index <= nbr; index++) {
      result = result * index;
    }

    return result;
  };

  let numberOfUser = prompt("De quel nombre veux tu calculer la factorielle ?");

  console.log(fact(numberOfUser));
  console.log(fact(4));
  console.log(fact(5));
  console.log(fact(8));
  console.log(fact(2));
  console.log(fact(1));
};

// facto();

// ---------------------------------------------------------------- //

// 2.3 Analyse de données

// 2.3.1 Startup Nation
function startup() {
  const entrepreneurs = [
    { first: "Steve", last: "Jobs", year: 1955 },
    { first: "Oprah", last: "Winfrey", year: 1954 },
    { first: "Bill", last: "Gates", year: 1955 },
    { first: "Sheryl", last: "Sandberg", year: 1969 },
    { first: "Mark", last: "Zuckerberg", year: 1984 },
    { first: "Beyonce", last: "Knowles", year: 1981 },
    { first: "Jeff", last: "Bezos", year: 1964 },
    { first: "Diane", last: "Hendricks", year: 1947 },
    { first: "Elon", last: "Musk", year: 1971 },
    { first: "Marissa", last: "Mayer", year: 1975 },
    { first: "Walt", last: "Disney", year: 1901 },
    { first: "Larry", last: "Page", year: 1973 },
    { first: "Jack", last: "Dorsey", year: 1976 },
    { first: "Evan", last: "Spiegel", year: 1990 },
    { first: "Brian", last: "Chesky", year: 1981 },
    { first: "Travis", last: "Kalanick", year: 1976 },
    { first: "Marc", last: "Andreessen", year: 1971 },
    { first: "Peter", last: "Thiel", year: 1967 },
  ];

  // Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70.
  let entrepreneursYearsFilter = entrepreneurs.filter(
    (entrepreneur) => entrepreneur.year >= 1970 && entrepreneur.year < 1980
  );

  console.log( "Les entrepreneurs nés dans les années 70 sont :", entrepreneursYearsFilter );

  // Sors un array qui contient le prénom et le nom des entrepreneurs.
  let entrepreneursFullNames = entrepreneurs.map(
    entrepreneur => `${entrepreneur.last} ${entrepreneur.first}`
  );

  console.log( "Les noms et prénoms des entrepreneurs sont :", entrepreneursFullNames );

  // Quel âge aurait chaque inventeur aujourd'hui ?
  let currentAge = entrepreneurs.map(
    entrepreneur => {
      return {nom: entrepreneur.last + " " + entrepreneur.first, age: new Date().getFullYear() - entrepreneur.year}
    }
  );
  
  currentAge.forEach(entrepreneur => {
    console.log(entrepreneur.nom + " aurait " + entrepreneur.age + " ans");
  })

  // Triez les entrepreneurs par ordre alphabétique du nom de famille.
  let lastNameAlphabetic = entrepreneursFullNames.sort();
  console.log("Les entrepreneurs triés par ordre alphabétique du nom de famille :", lastNameAlphabetic );
};

// startup();

// ---------------------------------------------------------------- //

// 2.3.2 Bibliothécaire

function bibliothecaire() {
    const books = [
        { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
        { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
        { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
        { title: 'Les frères Karamazov', id: 450911, rented: 55 },
        { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
        { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
        { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
        { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
        { title: 'La disparition', id: 364445, rented: 33 },
        { title: 'La lune seule le sait', id: 63541, rented: 43 },
        { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
        { title: 'Guerre et Paix', id: 748147, rented: 19 }
      ];

      // Est-ce que tous les livres ont été au moins empruntés une fois ?
      // Quel est livre le plus emprunté ?
      // Quel est le livre le moins emprunté ?
      // Trouve le livre avec l'ID: 873495;
      // Supprime le livre avec l'ID: 133712;
      // Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
};

bibliothecaire();