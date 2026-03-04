import Usuario from "../models/Usuario.model.js";
import Direccion from "../models/Direccion.model.js";
import Perfil from "../models/Perfil.model.js";

export const getAll = async (req, res) => {
    try {
        let usuarios = await Usuario.findAll({
            include: [
                {
                    model: Perfil,
                    attributes: {
                        exclude: ["id_usuario"]
                    }
                },
                {
                    model: Direccion,
                    attributes: {
                        exclude: ["id_usuario"]
                    }
                }
            ],
        });

        res.json({ usuarios, message: "Ok" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener los datos...",
        });
    }
};

export const getFindByPk = async (req, res) => {
    try {
        let id = req.params.id;

        let usuario = await Usuario.findByPk(id, {
            include: {
                model: Direccion,
                attributes: {
                    exclude: ["id_usuario"],
                },
            },
        });

        res.json({ usuario, message: "Ok" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar obtener los datos...",
        });
    }
};

// CREAR NUEVO USUARIO
export const createUsuario = async (req, res) => {
    try {
        const { nombre, apellido, email } = req.body;
        const newUser = await Usuario.create({ nombre, apellido, email });
        res.status(201).json({ usuario: newUser, message: "Usuario creado" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar crear el usuario...",
        });
    }
};

// ACTUALIZAR USUARIO EXISTENTE
export const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const { nombre, apellido, email } = req.body;

        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        await usuario.update({ nombre, apellido, email });
        res.json({ usuario, message: "Usuario actualizado" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar actualizar el usuario...",
        });
    }
};

// BORRAR USUARIO
export const deleteUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await Usuario.destroy({ where: { id } });
        if (!deleted) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({
            error: "Error al intentar eliminar el usuario...",
        });
    }
};
