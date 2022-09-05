#!/usr/bin/env node
//console.log('Hello World');


const axios = require('axios');
// Nous créons une constante que nous nommons Axios dans laquelle nous allons chercher le module 'axios'.

async function main() {

    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    //get nous permet de récupérer l'URL de notre API.
    //await : attend la promesse avant d'éxécuter la suite du programme.

    //console.log(response);

    // Je récupère le taux actuel du BITCOIN.
    const rate = response.data.bpi['EUR'].rate;
    console.log(` > 1 BTC = ${rate} EUR`);

    // Je récupère la date actuelle.
    const updateAt = response.data.time.updated;
    console.log(` Nous sommes le ${updateAt}.`);
}

main();