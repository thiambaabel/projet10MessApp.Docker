const express = require('express');
const path = require("path");
const app = express();
//const PORT = 3000;    remplacé par la ligne suivante pour permettre l'utilisation de la variable d'environnement
const PORT = process.env.PORT || 3000;
 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Tableau qui stocke les messages
let messages = []; 

// GET : route qui permet de récupérer les messages
app.get("/api/messages", (req, res) => {
  res.json(messages);
});

// POST : ajouter un message
app.post("/api/messages", (req, res) => {
  const { pseudo, message } = req.body;

  if (!pseudo || !message) {
    return res.status(400).json({ error: "Le pseudo et le message sont requis." });
  }

  const newMessage = {  // objet pour le message à envoyer
    id: messages.length + 1,
    pseudo,
    message,
    date: new Date().toLocaleString(),
  };

  messages.push(newMessage);

  res.status(201).json(newMessage);
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  //console.log(`Serveur démarré sur http://localhost:${PORT}`); remplacé par la ligne précédente pour permettre le déploiement sur des plateformes comme Render.com
});
