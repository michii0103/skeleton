module.exports = {
    apps: [{
        name: 'skeleton',
        script: '/root/skeleton/dist/server/server.js',
        watch: false,
        env: {
            NODE_ENV: 'development',
            PORT: 8080, // Sicherstellen, dass der Port korrekt ist
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 8080, // Sicherstellen, dass der Port korrekt ist
        },
    }, ],
};