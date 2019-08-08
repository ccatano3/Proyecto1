const express = require('express');
const enrutador = express.Router();

enrutador.get('/notas', (req, res) => {
    res.send('Enviando notas desde la base de datos');
});


module.exports = enrutador;