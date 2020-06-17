const express = require('express'); // on récupère express
const router = express.Router(); // on crée un router avec la méthode d'express
const sauceCtrl = require('../controllers/sauce'); // on récupère le controleur pour sauce


/* ### ROUTES ### */

/* POST */
router.post ('/', sauceCtrl.createSauce); // on applique la logique métier createThing du controleur à la route POST

/* GET */
router.get('/', sauceCtrl.getAllSauce); // on applique la logique métier getAllSauce du controleur à la route GET

/* GET ONE SAUCE */
router.get('/:id', sauceCtrl.getOneSauce); // on applique la logique métier getOneSauce du controleur à la route GET (ID)

/* PUT */
router.put('/:id', sauceCtrl.modifySauce); // on applique la logique métier modifySauce du controleur à la route PUT

/* DELETE */
router.delete('/:id', sauceCtrl.deleteSauce); // on applique la logique métier deleteSauce du controleur à la route DELETE


/* EXPORT */

module.exports = router;