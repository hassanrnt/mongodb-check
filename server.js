const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes/index');

const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connectez-vous à la base de données
connectDB();

// Utilisation des routes
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
