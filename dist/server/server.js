import express from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, ".."))); // __dirname zeigt auf dist/server, deshalb .. = dist
app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});
const server = createServer(app);
const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
    console.log("Client verbunden");
    ws.on("message", (message) => {
        const msg = JSON.parse(message.toString());
        console.log("Vom Client empfangen:", msg);
        ws.send(JSON.stringify({ event: "response", data: `Echo: ${msg.data}` }));
    });
    ws.on("close", () => console.log("Client getrennt"));
});
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
