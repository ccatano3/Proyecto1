const passport = require('passport');
const passportLocal = require('passport-local').Strategy;

const usuarios = require('../models/Usuarios');

passport.use(new passportLocal({
  usernameField: 'email'
}, async (email,password, done) => {
    const usu = await usuarios.findOne ({email: email});
    if(!usu){
        return done (null, false, {message: 'Usuario no registrado'});
    }else{
        const usufind = await usu.compararPassword(password);
        if(usufind){
            return done(null, usu);
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}));

//almacenar usuario en una sesión
passport.serializeUser((usu, done) => {
    done(null, usu.id);
});

passport.deserializeUser((id, done) =>{
    usuarios.findById(id, (err,usu) => {
        done(err,usu);
    });
});
