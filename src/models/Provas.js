const { Schema, model } = require('mongoose');

const ProvasSchema = new Schema({
    gabarito   : [String],
    disciplina : String,
    educador   : String,
    tipo       : String
});

module.exports = model('provas', ProvasSchema);