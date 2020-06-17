const mongoose = require('mongoose'); // récupération de mongoose

const sauceSchema = mongoose.Schema({
    userId:{type:String, required:true}, // id utilisateur qui a crée la sauce
    name:{type:String, required:true}, // nom de la sauce
    manufacturer:{type:String, required:true}, // fabricant de la sauce
    description:{type:String, required:true}, // description de la sauce
    mainPepper:{type:String, required:true}, // principal ingrédient dans la sauce
    imageUrl:{type:String, required:true}, // url de l'image de la sauce téléchargée par l'utilisateur
    heat: {type:Number, required:true}, // note de 1 à 10
    likes: {type:Number, required:true}, // nombre d'utilisateur qui aiment la sauce
    dislikes: {type:Number, required:true}, //nombre d'utilisateur qui n'aiment pas la sauce
    usersLiked: {type:String, required:true}, // tableau d'id d'utilisateur ayant aimé la sauce
    usersDisliked: {type:String, required:true}// tableau d'id d'utilisateur n'ayant pas aimé la sauce
});

module.exports = mongoose.model('Sauce', sauceSchema);