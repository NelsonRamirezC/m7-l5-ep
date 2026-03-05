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
    const t = await db.transaction();
    try {
        let {titulo, contenido, etiquetas, id_usuario} = req.body;

        let usuario = await Usuario.findByPk(id_usuario, { transaction: t });
        
        if (!usuario) {
            await t.rollback();
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        let post = await Post.create({titulo, contenido}, { transaction: t });
        await post.setUsuario(usuario, { transaction: t });

        for (const etiquetaNombre of etiquetas) {
            // buscar etiqueta existente o crear nueva si no existe
            let [etiqueta] = await Etiqueta.findOrCreate({
                where: { nombre: etiquetaNombre },
                transaction: t
            });

            await post.addEtiqueta(etiqueta, { transaction: t });
        }

        await t.commit();
        res.status(201).json({post, message: "ok"});        

    } catch (error) {
        await t.rollback();
        console.log(error);
        res.status(500).json({
            error: "Error al intentar procesar los datos...",
        });
    }
}