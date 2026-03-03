import Usuario from "./Usuario.model.js";
import Direccion from "./Direccion.model.js";


Usuario.hasOne(Direccion, {
    foreignKey: 'id_usuario',
});
Direccion.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
});





export { Usuario, Direccion };
