require('dotenv').config(); // Charger les variables d'environnement
const app = require('./src/app');

const port = process.env.APP_PORT || 5000; // Utiliser le port défini dans le .env ou le port 5000 par défaut

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
