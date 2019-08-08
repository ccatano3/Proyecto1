const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notas-db-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

 .then(bd => console.log('Base de datos conectada'))
 .catch(err => console.error(err));