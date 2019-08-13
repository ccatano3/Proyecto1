const helpers ={};
//revisa  si hay una sesión o no
helpers.isAuthenticated =(req, res, next) =>{
 if(req.isAuthenticated()) {
     return next();
 }
 req.flash('error_msg', 'Usuario no autorizado');
 res.redirect('/usuarios/login');
};

module.exports = helpers;