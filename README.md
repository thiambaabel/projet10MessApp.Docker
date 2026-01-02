
                 Structure du projet
message-app/
├── src/
│ └── server.js
├── package.json
├── package-lock.json
├── .dockerignore
├── Dockerfile
└── README.md

                 Création du fichier Dockerfile(À la racine du projet, créez un fichier Dockerfile ):
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"] 

                  Création du fichier .dockerignore(Ce fichier permet d’exclure les fichiers inutiles de l’image Docker) :
node_modules
npm-debug.log
.git
.env
                Mise en ligne du projet sur GitHub(Initialiser le dépôt Git) :
git init
git add .
git commit -m "Initial commit"
                
                Déploiement sur Render
 Création du service
Connection à Render
Clique sur New + → Web Service
Connection sur notre compte GitHub
Sélectionnez de notre dépôt

                Configuration du service
Environment : Docker
Branch : main
Root Directory : (laisser vide)
Dockerfile Path : Dockerfile
Plan : Free (ou autre)
Render détectera automatiquement le Dockerfile.

 Variables d’environnement: port 3000
              Lancement du déploiement
Clique sur Create Web Service
Render construit l’image Docker
Le conteneur est déployé automatiquement
Une URL publique nous est fournie :

                 RÉCAPITULATIF DES FICHIERS AJOUTÉS

✔️ Dockerfile
✔️ .dockerignore
✔️ modification du PORT
✔️ push sur GitHub
✔️ Render en mode Docker
