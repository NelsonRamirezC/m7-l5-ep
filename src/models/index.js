import Usuario from "./Usuario.model.js";
import Direccion from "./Direccion.model.js";
import Perfil from './Perfil.model.js';


Usuario.hasOne(Direccion, {
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Direccion.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
});


Usuario.hasOne(Perfil,{
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Perfil.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
});



export { Usuario, Direccion, Perfil };
