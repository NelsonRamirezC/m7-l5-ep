import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Etiqueta extends Model {}

Etiqueta.init(
    {
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
    },
    {
        sequelize: db,
        modelName: "Etiqueta",
        tableName: "etiquetas",
        timestamps: true,
    },
);


export default Etiqueta;