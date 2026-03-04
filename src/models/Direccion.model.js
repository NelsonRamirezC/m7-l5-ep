import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Direccion extends Model {}

Direccion.init(
    {
        // Model attributes are defined here
        calle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comuna: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
    },
    {
        sequelize: db,
        modelName: "Direccion",
        tableName: "Direcciones",
        timestamps: false,
    },
);


export default Direccion;