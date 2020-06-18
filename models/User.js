const mongoose = require('mongoose'); // récupération de mongoose
const uniqueValidator = require('mongoose-unique-validator'); // récupération du package gérant la propriété "unique" afin d'éviter d'avoir plusieurs utilisateurs avec la même adresse mail

const userSchema = mongoose.Schema({
    userId:{type:String}, 
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true}

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);