const axios = require('axios');
const {response} = require('express');

async function main(){



    console.log(process.argv);

    const currency = process.argv[2];

    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json'); //get nous permet de récuperer l'URL de notre API
    // await : attent la promesse avant d'exécuter la suite du programme

    const updatedAt = response.data.time.updated; //récupérer la date actuel

    const rate = response.data.bpi[currency].rate;//rate = cours actuel

    console.log(` > 1 BTC = ${rate} ${currency} (${updatedAt})`);


}

// Ecrire EUR dans le terminal pour voir les valeurs s'appliquer dessus.

main();