const express = require('express');
const enrutador = express.Router();

enrutador.get('/usuarios/sigin', (req, res) => {
    res.send('Entrando a la aplicación');
});

enrutador.get('/usuarios/sigout', (req, res) => {
    res.send('Formulario de autenticación para la aplicación');
});


module.exports = enrutador;