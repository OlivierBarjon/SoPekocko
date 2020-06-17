const express = require('express'); // on récupère express afin de pouvoir créer un routeur
const router = express.Router(); // on crée un routeur
const userCtrl = require('../controllers/user'); // on récupère le controleur pour user

/* ### ROUTES ### */

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

/* EXPORT */
module.exports = router;

