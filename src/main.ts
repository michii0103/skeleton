import "./components/my-component.js";

const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("WebSocket verbunden");
  socket.send(JSON.stringify({ event: "hello", data: "Hi Server!" }));
});

socket.addEventListener("message", (event) => {
  const msg = JSON.parse(event.data);
  console.log("Server sagt:", msg.data);
  const comp = document.querySelector("my-component");
  if (comp) {
    (comp as any).message = `Server: ${msg.data}`;
  }
});
