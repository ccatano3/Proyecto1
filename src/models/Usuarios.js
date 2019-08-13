const mongoose= require('mongoose');
const { Schema} =mongoose;
const bcrypt = require('bcryptjs'); //modulo que llamo para que me ayude a encriptar las contraseñas de los usuarios

const UsuarioSchema = new Schema({
    nombre: {type: String, required: true},
    email: {type: String, required: true}, 
    password: {type: String, required: true},
    fecha: {type: Date, default: Date.now}
});

//aqui empezamos por cifrar las contraseñas de los usuarios
UsuarioSchema.methods.encriptarPassword = async (password) => {
 const salt = await bcrypt.genSalt(10);
 const hash = bcrypt.hash(password,salt);
 return hash;
};

UsuarioSchema.methods.compararPassword = async function (password) {
 return await bcrypt.compare(password, this.password); //aca me esta diciendo que compare la contraseña del usuario con la que quedó registrada en la base de datos
};

module.exports = mongoose.model ('Usuario', UsuarioSchema);