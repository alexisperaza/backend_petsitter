const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    nombre: String, 
    apellidos: String, 
    telefono: String
});

module.exports = model('Client', clientSchema);