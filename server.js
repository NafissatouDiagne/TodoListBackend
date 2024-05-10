// Chargement des variables d'environnement à partir du fichier .env
require('dotenv').config();

// Importation du module mongoose pour la gestion de la base de données MongoDB
const mongoose = require('mongoose');

// Connexion à la base de données MongoDB en utilisant l'URL spécifiée dans les variables d'environnement
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Gestion des erreurs de connexion à la base de données
mongoose.connection.on("error", (error) => {
    console.log("Erreur de connexion à MongoDB : " + error.message);
});

// Confirmation de la connexion réussie à la base de données
mongoose.connection.once("open", () => {
    console.log("Connexion à MongoDB établie !");
});

// Importation du modèle User
require("./models/tacheModels");

// Importation de l'application Express
const app = require('./app');

// Démarrage du serveur sur le port spécifié
const server = app.listen(8000, () => {
    console.log('Le serveur écoute sur le port 8000');
});
