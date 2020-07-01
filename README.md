## SoPeckoko

Le frontend se trouve dans le sous-module "dwj-projet6"
Pour déployer le projet intégral sur votre poste de travail, lancez la commande suivante :

`git clone --recurse-submodules https://github.com/OlivierBarjon/SoPekocko`


IMPORTANT: les données concernant la secret key token et celles concernant la connection à la Bdd MongoDB sont présentes dans des variables d'environnement dont vous trouverez la liste dans le fichier .env.tmpl (il vous suffit d'ajouter les votres et de renommer le fichier en ".env" pour faire fonctionner le programme)

Dans un  terminal lancez les commandes suivantes (depuis le répertoire "dwj-projet6") :

1 : `npm install`
2 : `npm start` 
(si une erreur s'affiche, lancez la commande `npm install node-sass` avant de relancer la commande `npm start`)

Dans un autre terminal, lancez les commandes suivantes (depuis le répertoire racine "SoPekocko") :

1 : `npm install`
2 : `nodemon server`


Rendez-vous sur `http://localhost:4200/`


