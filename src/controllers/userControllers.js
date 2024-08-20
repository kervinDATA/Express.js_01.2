const database = require("../../database");

const getUsers = (req, res) => {
  database
    .query("SELECT * FROM users")
    .then(([users]) => {
      res.json(users); // Renvoie tous les utilisateurs en JSON
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la requête" }); // Renvoie JSON en cas d'erreur
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("SELECT * FROM users WHERE id = ?", [id])
    .then(([users]) => {
      if (users[0]) {
        res.json(users[0]); // Renvoie l'utilisateur trouvé
      } else {
        res.status(404).json({ error: "Utilisateur non trouvé" }); // 404 en JSON
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Erreur lors de la requête" }); // Renvoie JSON en cas d'erreur
    });
};

module.exports = {
  getUsers,
  getUserById,
};
