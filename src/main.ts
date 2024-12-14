import "./components/main-element.js";

const wsHost = window.location.hostname; // Dynamisch die aktuelle Domain/IP-Adresse abrufen
export const socket = new WebSocket(`ws://${wsHost}:8080`);
export const context = ensureContext();

socket.addEventListener("open", () => {
  console.log("WebSocket verbunden");
  socket.send(JSON.stringify({ event: "hello", data: "Hi Server!" }));
});

socket.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  console.log("Server sagt:", msg.data);
  const comp = document.querySelector("main-element");
  if (comp) {
    (comp as any).message = `Server hat geantwortet: ${msg.data}`;
  }
});

function ensureContext(): string {
  const key = "context";
  if (!localStorage.getItem(key))
    localStorage.setItem(key, String(Math.random() * 100000000));
  return localStorage.getItem(key) as string;
}
