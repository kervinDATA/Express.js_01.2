const { connect } = require("./database");

const query = process.argv[2];
const db = connect(); // Obtenir l'instance de la base de données

db.all(query, (err, result) => {
  if (err) {
    console.error("Erreur lors de l'exécution de la requête", err);
  } else {
    console.table(result);
  }
});
