const express = require("express");
const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

const app = express();

// Middleware pour gérer les requêtes JSON
app.use(express.json());

// Routes pour les films
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

// Routes pour les utilisateurs
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

module.exports = app; // Export de l'application pour les tests et le serveur
