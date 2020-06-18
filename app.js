const express = require('express'); // on importe express
const app = express(); // création d'une application express
const bodyParser = require('body-parser');// on récupère le bodyparser
const mongoose = require('mongoose'); // on récupère mongoose

const sauceRoutes = require('./routes/sauce'); // on récupère les routes pour la sauce
const userRoutes = require('./routes/user'); // on récupère les routes pour user
const path = require('path'); // on récupère l'élément de node.js permettant d'accéder au chemin de notre systeme de fichiers

/* MONGOOSE */
mongoose.connect('mongodb+srv://OBUser_14:Weu293y0J3z2O2Zv@cluster0-sd7js.mongodb.net/SoPekocko?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


/* CROSS ORIGIN RESOURCE SHARING */
app.use((req, res, next)=> { 
	res.setHeader('Access-Control-Allow-Origin', '*'); //l'origine qui a le droit d'accéder à notre api = tout le monde
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization'); //on autorise certains headers
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // on autorise certaines méthodes
	next()
});

/* BODY PARSER */

app.use(bodyParser.json()); //.json est une méthode de l'objet bodyParser qui va transformer le corps des requêtes en objets JSON

/* CHEMIN D'ACCES DES ENDPOINTS */

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')) ) // on veut que cette requête serve le dossier statique /image dont l'adresse est déterminé par la méthode path.join (avec __dirname = nom du dossier dans lequel on va se trouver auquel on va ajouter "images"

// EXPORT SERVER

module.exports = app; // export de l'application express (pour le serveur node.js)
