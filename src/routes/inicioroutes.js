const express = require('express');
const enrutador = express.Router(); 

enrutador.get('/', (req, res) => {
    res.render('iniciov'); //con esto se envia lo que tiene el archivo index.hbs
});

enrutador.get('/acercad', (req, res) => {
    res.render('acercav');
});

module.exports = enrutador;
