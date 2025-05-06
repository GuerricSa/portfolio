// Import des modules nécessaires
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';

// Chargement des variables d'environnement (.env)
dotenv.config();

// Création de l'application Express
const app = express();

// Middlewares globaux
app.use(cors({
  origin: '*', // Autorise toutes les origines (pour tester)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Autorise certains types de requêtes
}));
app.use(express.json());     // Parse automatiquement le JSON du body

app.get('/', (req, res) => {
  res.send('Hello, le serveur fonctionne !');
})

// Routes
app.use('/api', contactRoutes);

// Port d'écoute (prend celui de .env ou 5000 par défaut)
const PORT = process.env.PORT || 5050;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
