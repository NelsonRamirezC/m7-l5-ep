import express from 'express';
import usuariosRotes from './routes/Usuarios.routes.js'

const app = express();


//MIDDLEWARES

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//RUTAS API
app.use("/usuarios", usuariosRotes);



export default app;

