const mongoose = require('mongoose'); // récupération de mongoose
const uniqueValidator = require('mongoose-unique-validator'); // récupération du package gérant la propriété "unique" afin d'éviter d'avoir plusieurs utilisateurs avec la même adresse mail ????????????

const userSchema = mongoose.Schema({
    //userId:{type:String}, // c'est le frontend qui crée cette propriété à partir d '_id généré par MongoDb
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}

});

userSchema.plugin(uniqueValidator); // on applique le validateur au schéma ?????????????????

module.exports = mongoose.model('User', userSchema);