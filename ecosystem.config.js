import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

export default {
    apps: [{
        name: "skeleton",
        script: "./server.js",
        instances: 1,
        exec_mode: "fork",
        env: {
            NODE_ENV: "production",
        },
    }, ],
};