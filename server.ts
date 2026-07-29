import app from "./index.html";

const PORT = +(process.env.PORT || 8080);

Bun.serve({
    port: PORT,
    development: {
        hmr: true,
        console: true,
    },
    routes: {
        "/": app,
    }
});

console.log(`Server running at http://localhost:${PORT}`);