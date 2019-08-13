const express = require('express');
const enrutador = express.Router();

const usuario = require ('../models/Usuarios'); //llamo a la base de datos

const passport = require ('passport')

enrutador.get('/usuarios/login', (req, res) => {  //link
    res.render('users/login'); //aca llamo la vista hbs
});

enrutador.post('/usuarios/login', passport.authenticate('local', {
    successRedirect: '/notas',
    failureRedirect: '/usuarios/login',
    failureFlash: true
})); 

enrutador.get('/usuarios/registrou', (req, res) => {
    res.render('users/registrou');
});

enrutador.post('/usuarios/registrou', async (req, res) => {
    const {nombre, email, password, confirmar_password} = req.body;
    const errors = [];
    if (nombre.length <= 0){
        errors.push({text: 'Por favor ingrese su nombre'});
    }
    if (email.length <= 0){
        errors.push({text: 'Por favor ingrese un email'});
    }
    if (password != confirmar_password){
        errors.push({text: 'Las contraseñas no coinciden'});
    }
    if (password.length < 4){
        errors.push({text: 'La contraseña debe contener al menos 4 caracteres'});
    }
    if(errors.length > 0){
        res.render('users/registrou', {errors, nombre,email,password,confirmar_password});
    } else {
     const emailUsuario = await usuario.findOne({email: email});
     if(emailUsuario){
         req.flash('error_msg', 'El email ya se encuentra registrado');
         res.redirect('/usuarios/login');
     }
     const newUsuario = new usuario({nombre, email, password}) //con esto guardo mi usuario
     newUsuario.password = await newUsuario.encriptarPassword(password);
     await newUsuario.save();
     req.flash('success_msg' , 'Usuario registrado exitosamente');
     res.redirect('/usuarios/login');
    }
});


module.exports = enrutador;