// // Import des modules nécessaires
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import contactRoutes from './routes/contact.js';

// // Chargement des variables d'environnement (.env)
// dotenv.config();

// // Création de l'application Express
// const app = express();

// // Middlewares globaux
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,
// }));
// app.use(express.json());     // Parse automatiquement le JSON du body

// app.get('/', (req, res) => {
//   res.send('Hello, le serveur fonctionne !');
// })

// // Routes
// app.use('/api', contactRoutes);

// // Port d'écoute (prend celui de .env ou 5000 par défaut)
// const PORT = process.env.PORT || 5050;

// // Démarrage du serveur
// app.listen(PORT, () => {
//   console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
// });

import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  res.status(200).json({ message: 'Test réussi !' });
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
