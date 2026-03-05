import Usuario from "../models/Usuario.model.js";
import Post from "../models/Post.model.js";
import Etiqueta from "../models/Etiqueta.model.js";
import db from "../config/db.js";


export const getAll = async (req, res) => {
    try {
        let posts = await Post.findAll({
            include: [
                {
                    model: Usuario,
                    as: "usuario",
                },
                {
                    model: Etiqueta,
                    as: "etiquetas",
                },
            ],
        });

        res.json({ posts, message: "Ok" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener los datos...",
        });
    }
};

export const getFindByPk = async (req, res) => {
    try {
        let id = req.params.id;

        let post = await Post.findByPk(id, {
            include: [
                {
                    model: Usuario,
                    as: "usuario",
                },
                {
                    model: Etiqueta,
                    as: "etiquetas",
                },
            ],
        });

        res.json({ post, message: "Ok" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener los datos...",
        });
    }
};

export const getEtiquetas = async (req, res) => {
    try {
        let etiquetas = await Etiqueta.findAll();
        res.json({ etiquetas, message: "Ok" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener las etiquetas...",
        });
    }
};


export const create = async (req, res) => {
    try {

        let {titulo, contenido, etiquetas, id_usuario} = req.body;

        let usuario = await Usuario.findByPk(id_usuario);
        let post = await Post.create({titulo, contenido});

        await post.setUsuario(usuario);

        for (const etiquetaNombre of etiquetas) {
            // buscar etiqueta existente o crear nueva si no existe
            let [etiqueta] = await Etiqueta.findOrCreate({
                where: { nombre: etiquetaNombre },
            });

            await post.addEtiqueta(etiqueta);
        }

        res.status(201).json({post, message: "ok"});        

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Error al intentar procesar los datos...",
        });
    }
}