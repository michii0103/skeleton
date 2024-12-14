module.exports = {
    apps: [{
        name: 'skeleton',
        script: '/root/skeleton/dist/server/server.js',
        watch: false,
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }, ],
};