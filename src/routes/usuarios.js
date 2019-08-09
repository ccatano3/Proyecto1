const express = require('express');
const enrutador = express.Router();

enrutador.get('/usuarios/login', (req, res) => {  //link
    res.render('users/login'); //aca llamo la vista hbs
});

enrutador.get('/usuarios/registrou', (req, res) => {
    res.render('users/registrou');
});


module.exports = enrutador;