import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, ".."))); // __dirname zeigt auf dist/server, deshalb .. = dist

app.get("/test", (req, res) => {
  res.send("Das ist ein Test").status(200);
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

const server = createServer(app);
const ws_server = new WebSocketServer({ server });

ws_server.on("connection", (ws_client) => {
  ws_client.on("message", (message) => {
    const msg = JSON.parse(message.toString());
    console.log("Vom Client empfangen:", msg);
    process.stdout.write(
      `DEBUG: Vom Client empfangen: ${JSON.stringify(msg)}\n`
    );
    ws_client.send(
      JSON.stringify({ event: "response", data: `Echo: ${msg.data}` })
    );
  });
  ws_client.on("close", () => console.log("Client getrennt"));
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
