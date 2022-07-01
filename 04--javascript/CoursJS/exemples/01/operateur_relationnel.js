var arbres = new Array("sequoia", "laurier", "cèdre", "chêne", "érable");

console.table(arbres);

console.log( 3 in arbres );
console.log( 10 in arbres );


var maVoiture = {fabricant: "Honda", modèle: "Accord", year: 1998};

console.log( "modèle" in maVoiture );
console.log( "year" in maVoiture );