const Sauce = require('../models/sauce'); // récupération du modèle


/* ### LOGIQUE METIER ### */

/* POST */
exports.createSauce = (req, res, next)=>{ 
delete req.body._id; // on supprime en amont le faux _id envoyé par le front-end
const sauce = new Sauce({ // on crée une instance de notre classe Sauce
    ...req.body // on lui passe un objet JS contenant les infos du body requises
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
Sauce.updateOne({_id: req.params.id}, {...req.body, _id: req.params.id}) //mise à jour d'une sauce
.then(()=> res.status(200).json({message:'Sauce modifiée'}))
.catch(error => res.status(400).json({error}));
};


/* DELETE */
exports.deleteSauce = (req, res, next) =>{
Sauce.deleteOne({_id: req.params.id}) //suppression d'une sauce
.then(()=> res.status(200).json({message:'Sauce supprimée'}))
.catch(error => res.status(400).json({error}));
};

