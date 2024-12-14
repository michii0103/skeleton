import express from "express";
import https from "https";
import { WebSocketServer } from "ws";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === "production";

const app = express();

app.use(express.static(path.join(__dirname, ".."))); // __dirname zeigt auf dist/server, deshalb .. = dist

app.get("/test", (req, res) => {
  res.send("Das ist ein Test").status(200);
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Server initialisieren
let server;
if (isProduction) {
  // HTTPS-Server für Produktion
  const options = {
    key: fs.readFileSync("/etc/letsencrypt/live/codelabspace.de/privkey.pem"),
    cert: fs.readFileSync(
      "/etc/letsencrypt/live/codelabspace.de/fullchain.pem"
    ),
  };
  server = https.createServer(options, app);
  console.log("Server läuft im Produktionsmodus mit HTTPS");
} else {
  // HTTP-Server für Entwicklung
  server = http.createServer(app);
  console.log("Server läuft im Entwicklungsmodus mit HTTP");
}

const ws_server = new WebSocketServer({ server });

ws_server.on("connection", (ws_client) => {
  ws_client.on("message", (message) => {
    const msg = JSON.parse(message.toString());
    console.log("Vom Client empfangen:", msg);
    process.stdout.write(
      `DEBUG: Vom Client empfangen: ${JSON.stringify(msg)}\n`
    );
    ws_client.send(
      JSON.stringify({ event: "response", data: `asdsad Echo: ${msg.data}` })
    );
  });
  ws_client.on("close", () => console.log("Client getrennt"));
});

// Server starten
const PORT = isProduction ? 443 : 8080; // 443 für Prod, 8080 für Dev
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
