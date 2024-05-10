// Importation du module express
const express = require('express');

// Initialisation de l'application Express
const app = express();

// Middleware pour analyser les requêtes JSON
app.use(express.json());

// Middleware pour gérer les requêtes CORS (Cross-Origin Resource Sharing)
app.use(require("cors")());

// Middleware pour gérer les routes des utilisateurs
app.use("/api", require("./routes/taches_routes"));


// Gestion des erreurs 404 (Not Found)
const errorHandlers = require('./handlers/errorHandlers');
app.use(errorHandlers.notFound);

// Gestion des erreurs MongoDB
app.use(errorHandlers.mongoseErrors);

// Gestion des erreurs de développement (affichage complet des erreurs)
if (process.env.ENV === 'DEVELOPMENT') {
    app.use(errorHandlers.developmentErrors);
} else {
    // Gestion des erreurs en production (affichage d'erreurs minimales)
    app.use(errorHandlers.productionErrors);
}

// Exportation de l'application Express pour une utilisation dans d'autres modules
module.exports = app;