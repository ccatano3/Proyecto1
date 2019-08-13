const express = require('express');
const path = require('path');
const exphbs = require ('express-handlebars');
const methodOverride = require ('method-override');
const session = require('express-session'); //guardar los datos de usuario a traves de una sesión
const flash = require ('connect-flash');
const passport = require('passport');

//iniciando variables app por apli
const apli = express();
require ('./conexionBD'); //aqui estamos llamando la conexion a la bd
require ('./config/auten');

//configuraciones
apli.set('port', process.env.PORT || 3000);
apli.set('views', path.join(__dirname, 'views')); //este me permite unir metodos
apli.engine('.hbs', exphbs ({
 defaultLayout: 'plantilla',
 layoutsDir: path.join(apli.get('views'), 'layouts'),
 partialsDir: path.join(apli.get('views'), 'partials'),
 extname: '.hbs'
})); 

apli.set('view engine', 'hbs'); //para utliizar las configuraciones de arriba

//funciones antes de ser ejecutadas al servidor
apli.use(express.urlencoded({extended: false}));
apli.use(methodOverride('_method'));
apli.use(session({
    secret: 'mihazbajolamanga',
    resave: true,
    saveUninitialized: true

}));
apli.use(passport.initialize());
apli.use(passport.session());
apli.use(flash());

//variables globales
apli.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    
    next();
});


//rutas
apli.use(require('./routes/inicioroutes'));
apli.use(require('./routes/usuarios'));
apli.use(require('./routes/notas'));



//archivos estaticos
apli.use(express.static(path.join(__dirname, 'public')));

//iniciar nuestro servidor (servidor escuchando)
apli.listen(apli.get('port'), () => {
    console.log('Servidor en el puerto', apli.get('port'));
  });