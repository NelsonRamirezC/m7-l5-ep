import Usuario from "./Usuario.model.js";
import Direccion from "./Direccion.model.js";
import Perfil from './Perfil.model.js';
import Post from './Post.model.js';
import Etiqueta from './Etiqueta.model.js';


//1 A 1 ENTRE USUARIO Y DIRECCIÓN
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

//1 A 1 ENTRE USUARIO Y PERFIL
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


//1 A MUCHOS ENTRE USUARIO Y POST
Usuario.hasMany(Post,{
    foreignKey: 'id_usuario',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    as: 'posts'
});
Post.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
})



//MUCHOS A MUCHOS ENTRE POST Y ETIQUETAS

Post.belongsToMany(Etiqueta, { through: 'post_etiquetas', as: "etiquetas", 
    foreignKey: 'id_post',      // Apunta a Post
    otherKey: 'id_etiqueta'     // Apunta a Etiqueta
 });
Etiqueta.belongsToMany(Post, { through: 'post_etiquetas', as: "posts",
    foreignKey: 'id_etiqueta',  // Apunta a Etiqueta
    otherKey: 'id_post' 
});



export { Usuario, Direccion, Perfil };
