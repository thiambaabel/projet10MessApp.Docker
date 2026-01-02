# 1. Image Node officielle
FROM node:20-alpine

# 2. Dossier de travail dans le conteneur
WORKDIR /app

# 3. Copier package.json
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier tout le projet
COPY . .

# 6. Exposer le port (Render utilise le port)
EXPOSE 3000

# 7. Lancer le serveur
CMD ["npm", "start"]
