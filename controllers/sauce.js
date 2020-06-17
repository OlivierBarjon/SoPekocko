const Sauce = require('../models/sauce'); // récupération du modèle
const fs = require('fs'); // récupération du package fs de node.js pour nous permettre d'effectuer des opérations sur le systeme de fichiers


/* ### LOGIQUE METIER ### */

/* POST */
exports.createSauce = (req, res, next)=>{ 
    const sauceObject = JSON.parse(req.body.thing); // on extrait l'objet JSON de notre req.body.thing (qui est dorénavant un objet JS sous forme de chaîne de caractère) en transformant cette chaîne en objet
    delete sauceObject._id; // on enlève l'id de sauceObject
    const sauce = new Sauce({ // on crée une instance de notre classe Sauce
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // le frond en ne connaissant pas l'url de l'image (c'est le middleware multer qui le génère), il faut le définir manuellement dans un template littéral : protocol, host du serveur (la racine du serveur ou localhost:3000), répertoire, nom du fichier.
});
try {
    sauce.save(); // on enregistre notre sauce dans la base de donnée
    res.status(201).json({message : 'Sauce enregistrée'})
} 
catch(error) {
    res.status(400).json({ error });
};
};


/* GET */
exports.getAllSauce = (req, res, next) =>{ 
	Sauce.find()// récuparation de la liste complète des sauces
		.then(sauces => res.status(200).json(sauces))
		.catch(error =>res.status(400).json({ error }));
};


/* GET ONE SAUCE */
exports.getOneSauce = (req, res, next) =>{ 
Sauce.findOne({_id: req.params.id}) // récupération d'une sauce unique
    .then(sauces => res.status(200).json(sauces))
    .catch(error =>res.status(400).json({ error }));
};


/* PUT */
exports.modifySauce = (req, res, next)=> { 
    const thingObject = req.file ? // on crée l'objet thingObject et on utilise l'opérateur ternaire "? {} : {}" pour savoir si req.file existe (si l'image existe)
    { // si le fichier existe
      ...JSON.parse(req.body.thing), // on fait comme pour la route POST
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };  // si req.file n'existe pas, on envoi simplement les éléments
Sauce.updateOne({_id: req.params.id}, {...thingObject, _id: req.params.id}) //mise à jour d'une sauce
.then(()=> res.status(200).json({message:'Sauce modifiée'}))
.catch(error => res.status(400).json({error}));
};



exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id }) // avant de supprimer l'objet de la base, on va le chercher (on prend celui qui a l'id qui correspond au paramètre de la requête) pour avoir l'url de l'image (comme ça on aura accès au nom du fichier et pourra le supprimer)
      .then(thing => { // on veut récupérer le nom du fichier précisément
        const filename = sauce.imageUrl.split('/images/')[1]; // on récupère l'url de l'image retourné par la base et on la split autour de la chaine de caractère "/images/". On récupère donc uniquement le nom du fichier
        fs.unlink(`images/${filename}`, () => { // on appelle la fonction "unlink" de fs qui permet de supprimer le fichier (1er arg : chemin de ce fichier). Le deuxième arg étant un callback qu'on lance une fois le fichier supprimé
          Sauce.deleteOne({ _id: req.params.id }) // ce callback supprime le thing de la base de donnée
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  };