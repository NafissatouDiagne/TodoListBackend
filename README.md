# Todo List App

Ceci est une application Todo List simple développée avec Angular, Express et MongoDB. L'application permet aux utilisateurs de créer, afficher et supprimer des tâches à faire.

## Fonctionnalités

- **Création de tâches**: Les utilisateurs peuvent créer de nouvelles tâches en spécifiant un titre, une description, une date d'échéance et une heure.
- **Affichage des tâches**: Les utilisateurs peuvent voir toutes les tâches qu'ils ont créées, triées par catégories telles que "Aujourd'hui", "Tâches Terminées", "Tâches En Cours" et "Tous "(tous les taches).
- **Suppression des tâches**: Les utilisateurs peuvent supprimer les tâches qu'ils n'ont plus besoin de faire.
- **Interface conviviale**: L'interface utilisateur est simple et conviviale, permettant une expérience utilisateur fluide.

## Technologies Utilisées

- **Frontend**: Angular
- **Backend**: Express.js (Node.js)
- **Base de données**: MongoDB 
- **Autres dépendances**: mongoose (pour la gestion de la base de données), ng-bootstrap(pour les composants d'interface utilisateur)

## Installation

1. Clonez ce dépôt.
2. Assurez-vous que vous avez Node.js, Angular CLI et MongoDB installés sur votre machine.
3. Dans le répertoire racine du projet, exécutez `npm install` pour installer les dépendances du backend.
4. Accédez au dossier `client` et exécutez `npm install` pour installer les dépendances du frontend.
5. Configurez votre base de données MongoDB en fonction de votre environnement.
6. Lancez le backend en exécutant `nodemon server` dans le répertoire racine du projet.
7. Lancez le frontend en exécutant `ng serve` dans le dossier `client`.

Assurez-vous que votre serveur MongoDB est en cours d'exécution et que vous avez configuré correctement les informations de connexion dans le backend.
