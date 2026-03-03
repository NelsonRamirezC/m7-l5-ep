import { Router } from "express";
import * as UsuarioController from "../controllers/Usuarios.controller.js";

const router = Router();

//OBTENER TODOS LOS USUARIOS
router.get("/", UsuarioController.getAll);

//FILTRAR USUARIO POR ID
router.get("/id/:id", UsuarioController.getFindByPk);

//CREAR USUARIO
router.post("/", UsuarioController.createUsuario);

//ACTUALIZAR USUARIO
router.put("/id/:id", UsuarioController.updateUsuario);

//ELIMINAR USUARIO
router.delete("/id/:id", UsuarioController.deleteUsuario);


export default router;
