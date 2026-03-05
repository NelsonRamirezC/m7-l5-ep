import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Perfil extends Model {}

Perfil.init(
    {
        // Model attributes are defined here
        nombreUsuario: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        biografia: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        preferencias: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        }
    },
    {
        sequelize: db,
        modelName: "Perfil",
        tableName: "perfiles",
        timestamps: false,
    },
);


export default Perfil;