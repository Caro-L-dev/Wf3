# Electron

<https://www.electronjs.org/>  

Electron est un framework pour construire des applications de bureau en utilisant JavaScript, HTML et CSS. En intégrant Chromium et Node.js dans son exécutable, Electron vous permet de maintenir une base de code JavaScript et de créer des applications multiplateformes qui fonctionnent sur Windows, macOS et Linux — aucune expérience de développement d'applications natives n'étant requise.

---

### Initialiser le projet

`npm init`  

### Récupérer le dossier node_modules

`npm install`

### Installation Electron

`npm install electron --save-dev`

### Lancer le serveur Electron

 `-> npm start`  
`-> npm run start`

### Afficher sur le navigateur

 `-> localhost:3000`

#### Extension Vs Code

 Ejs Language support

 ---

# Exercice Meteo App 
Note : Vive les console.log

1. Récupération de l'adresse IP via l'api : <http://api.my-ip.io/ip>
2. Récupération de la géocalisation sur la base de l'ip via l'api : <http://ip-api.com/json/${ip>}
3. Récupération des données météo sur la base de la latitude/longitude via l'api: <https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude={longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m>

4. Traitement des données météo

- Créer un tableau multidimentionnel

```
- Première dimension = 
    [
        'date1' = [],
        'date2' = [],
        'date3' = []
    ]

    'date1' = [{
        time: '00:00',
        temperature: '00',
        ...
    }]

- Seconde dimension = 
   'date1' = [{
            time: '00:00',
            temperature: "00",
            humidity: "00",
            wind: "00",
        }],