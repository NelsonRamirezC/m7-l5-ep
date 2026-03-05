import { Sequelize } from "sequelize";

const DATABASE = process.env.DATABASE || "m7_l5_ep_db";
const  USER = process.env.USER || "node";
const  PASSWORD = process.env.PASSWORD || "123456";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || "5433";

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: "postgres",
    quoteIdentifiers: false,
    pool: {
        idle: 10000,
    },
});

export default sequelize;
