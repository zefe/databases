
const mongoose = require('mongoose')
const UsuarioSchema = require('./schema')
module.exports = mongoose.model('Rol', UsuarioSchema)