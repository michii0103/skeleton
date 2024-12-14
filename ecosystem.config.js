module.exports = {
    apps: [{
        name: "skeleton", // Der Name der Anwendung in PM2
        script: "/root/skeleton/dist/server/server.js", // Der Pfad zur Datei, die ausgeführt wird
        instances: 1, // Anzahl der Instanzen (1 für Single-Instance)
        exec_mode: "fork", // "fork" oder "cluster" (für Multi-Instanz)
        interpreter: "node", // Der Node.js-Interpreter
        env: {
            NODE_ENV: "production", // Umgebungsvariable (z. B. production oder development)
        },
        watch: false // Dateiüberwachung deaktivieren (für Production)
    }]
};