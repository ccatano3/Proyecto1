const express = require('express');
const enrutador = express.Router();

const Nota = require('../models/RegNotas'); //gracias a Nota puedo utilizar nuevos metodos como agregar, modificar, eliminar nuevas notas

enrutador.get('/notas/agrenota', (req, res) => {
    res.render('notas/nuevanota'); 
});

enrutador.post('/notas/nuevanota', async (req, res) => { //async le dice que abrá procesos asincronos en newNota.save
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
        await newNota.save(); //esto se hace para que el servidor no se quede esperando una respuesta de lo que guarde en la bd, sino que tambien escuche otras peticiones
        req.flash('success_msg', 'Comentario realizado con éxito');
        res.redirect('/notas');
        
    }
}); 

enrutador.get('/notas', async (req, res) => {
    const notas = await Nota.find().sort({fecha: 'desc'}); //aqui muestra de primero la ultima nota o comentario que se publica
    res.render('notas/vernotas', { notas });
});
//con esto trae el id del comentario que voy a modificar
enrutador.get('/notas/editar/:id', async (req, res) => {
    const notas = await Nota.findById(req.params.id); //pasarle el id que me esta pasando el usuario del comentario qe voy a modificar
    res.render('notas/editarnotas', { notas });
});

//con esto estamos actualizando el dato
enrutador.put('/notas/editarnotas/:id', async (req,res) => {
    const {comentario}=req.body;
    await Nota.findByIdAndUpdate(req.params.id, {comentario});
    res.redirect('/notas');
});

enrutador.delete('/notas/eliminar/:id' , async (req, res) => {
 await Nota.findByIdAndDelete(req.params.id);
 res.redirect('/notas');
});



module.exports = enrutador;