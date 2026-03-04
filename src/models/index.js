import Usuario from "./Usuario.model.js";
import Direccion from "./Direccion.model.js";
import Perfil from './Perfil.model.js';


Usuario.hasOne(Direccion, {
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'direccion'
});
Direccion.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
});


Usuario.hasOne(Perfil,{
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'perfil'
});
Perfil.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: "usuario"
});



export { Usuario, Direccion, Perfil };
