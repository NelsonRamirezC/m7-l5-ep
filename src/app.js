import express from 'express';
import path from 'path';
import usuariosRotes from './routes/Usuarios.routes.js'

const app = express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// public directory estática
app.use(express.static(path.resolve("public")));

// RUTAS API
app.use("/usuarios", usuariosRotes);

// ruta para renderizar front (opcional, sirve si no se usa index estático)
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

export default app;

