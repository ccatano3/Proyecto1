const express = require('express');
const enrutador = express.Router();

const Nota = require('../models/RegNotas'); //gracias a Nota puedo utilizar nuevos metodos como agregar, modificar, eliminar nuevas notas

enrutador.get('/notas/agrenota', (req, res) => {
    res.render('notas/nuevanota'); 
});

enrutador.post('/notas/nuevanota', async (req, res) => {
    const {comentario}=req.body;
    const errors = [];
    if (!comentario){
        errors.push({text: 'Por favor ingrese un comentario'});
    }
    if(errors.length > 0){
        res.render('notas/nuevanota', {
           errors,
           comentario 
        });
    }else{
        const newNota = new Nota({comentario});
        await newNota.save();
        res.redirect('/notas');
        console.log(newNota);
    }
}); 

enrutador.get('/notas', (req, res) => {
    res.send('Enviando notas desde la base de datos');
});


module.exports = enrutador;