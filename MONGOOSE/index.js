var mongoose = require('mongoose');
const Rol = require('./models/rol')
const Usuario = require('./models/usuario')
mongoose.connect('mongodb://localhost/cademy', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('open', function() {
    //funcion guardar
    
})

