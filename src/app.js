import express from 'express';
import path from 'path';
import usuariosRoutes from './routes/usuario.routes.js';
import postRoutes from '../src/routes/post.routes.js';
import morgan from 'morgan';

const app = express();


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

// public directory estática
app.use(express.static(path.resolve("public")));
// RUTAS API
app.use("/usuarios", usuariosRoutes);
app.use("/posts", postRoutes);

// ruta para renderizar front (opcional, sirve si no se usa index estático)
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public', 'index.html'));
});

export default app;

