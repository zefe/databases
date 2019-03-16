const { Schema } = require('mongoose')

mondule.exports = {
    name: String,
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    }
}