import { Router } from "express";
import * as postController from "../controllers/post.controller.js";

const router = Router();

//OBTENER TODOS LOS POSTS
router.get("/", postController.getAll);

//OBTENER ETIQUETAS (para el formulario)
router.get("/etiquetas", postController.getEtiquetas);

//FILTRAR POSTS POR ID
router.get("/id/:id", postController.getFindByPk);

//CREAR POSTS
router.post("/", postController.create);




export default router;
