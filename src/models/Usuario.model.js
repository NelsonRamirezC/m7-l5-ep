import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Usuario extends Model {}

Usuario.init(
    {
        // Model attributes are defined here
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "Usuario", // We need to choose the model name,
        tableName: "Usuarios",
        timestamps: false,
    },
);


export default Usuario;