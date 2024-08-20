require('dotenv').config();
const duckdb = require('duckdb');

// Stocker une instance unique de la base de données
let dbInstance;

function connect() {
  if (!dbInstance) {
    dbInstance = new duckdb.Database(process.env.DB_FILE, (err) => {
      if (err) {
        console.error("Erreur lors de la connexion à DuckDB", err);
      } else {
        console.log("Connexion à DuckDB établie avec succès");
      }
    });
  }
  return dbInstance;
}

// Fonction pour fermer la base de données
function closeDatabase(done) {
  if (dbInstance) {
    dbInstance.close((err) => {
      if (err) {
        console.error("Erreur lors de la fermeture de DuckDB", err);
      } else {
        console.log("Connexion à DuckDB fermée avec succès");
      }
      dbInstance = null; // Réinitialiser l'instance
      done();
    });
  } else {
    done();
  }
}

module.exports = {
  connect,
  closeDatabase
};
