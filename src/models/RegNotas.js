const mongoose = require ('mongoose');
const { Schema } = mongoose; //esquema de la base de datos

const EsquemaNota = new Schema ({
    comentario: {type: String, required: true},
    fecha:{type: Date, default: Date.now}
});

module.exports = mongoose.model('Nota', EsquemaNota)