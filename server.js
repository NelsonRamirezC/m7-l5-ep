import db from "./src/config/db.js";
import 'dotenv/config';
import app from "./src/app.js";

import "./src/models/index.js";

const init = async() => {

    try {
        //await db.authenticate();
        await db.sync({force: true, alter: true});

        app.listen(3000, () => {
            console.log("Servidor escuchando en http://localhost:3000");
        });
    } catch (error) {
        console.log(error);
    }
};

init();