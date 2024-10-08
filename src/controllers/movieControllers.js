const database = require("../../database");

const getMovies = (req, res) => {
  database
    .query("SELECT * FROM movies")
    .then(([movies]) => {
      res.json(movies); // Renvoie tous les films en JSON
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la requête" }); // Renvoie JSON en cas d'erreur
    });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("SELECT * FROM movies WHERE id = ?", [id])
    .then(([movies]) => {
      if (movies[0]) {
        res.json(movies[0]); // Renvoie le film trouvé
      } else {
        res.status(404).json({ error: "Film non trouvé" }); // 404 en JSON
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la requête" }); // Renvoie JSON en cas d'erreur
    });
};

module.exports = {
  getMovies,
  getMovieById,
};
