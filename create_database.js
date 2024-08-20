const fs = require('fs');
const db = require('./database');

const sql = fs.readFileSync('./express_quests.sql', 'utf8');

db.exec(sql, (err) => {
  if (err) {
    console.error('Erreur lors de l\'exécution du fichier SQL', err);
  } else {
    console.log('Base de données et tables créées avec succès');
  }
});
