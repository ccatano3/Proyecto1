const mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/bdnotas', {
//mongoose.connect('mongodb://localhost/bdnotas', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

 .then(bd => console.log('Base de datos conectada'))
 .catch(err => console.error(err));