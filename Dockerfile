FROM node:18-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# package.json und package-lock.json kopieren und Abhängigkeiten installieren
COPY package*.json ./
RUN npm install

# gesamten Code kopieren
COPY . .

# Anwendung builden (Frontend + Backend)
RUN npm run build

# Exponieren Sie den Port, auf dem Ihr Server läuft (z. B. 8080)
EXPOSE 8080

# Startbefehl: Server starten
CMD ["node", "dist/server/server.js"]