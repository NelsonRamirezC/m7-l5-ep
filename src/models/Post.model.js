import { Sequelize, DataTypes, Model } from "sequelize";
import db from "../config/db.js";

class Post extends Model {}

Post.init(
    {
        titulo: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        contenido: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Post",
        tableName: "posts",
        timestamps: true,
    },
);


export default Post;