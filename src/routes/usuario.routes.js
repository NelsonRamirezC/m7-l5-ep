import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js";

const router = Router();

//OBTENER TODOS LOS USUARIOS
router.get("/", usuarioController.getAll);

//FILTRAR USUARIO POR ID
router.get("/id/:id", usuarioController.getFindByPk);

//CREAR USUARIO
router.post("/", usuarioController.create);

//ACTUALIZAR USUARIO
router.put("/id/:id", usuarioController.update);

//ELIMINAR USUARIO
router.delete("/id/:id", usuarioController.destroy);


export default router;
