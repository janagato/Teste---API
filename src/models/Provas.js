const { Schema, model } = require('mongoose');
const AlternativaSchema = require("./utils/Alternativas")
const ProvasSchema = new Schema({
    gabarito   : {
        type: [AlternativaSchema],
        required: true
    },
    disciplina : {
        type: String,
        required: true
    },
    educador   : {
        type: String,
        required: true
    },
    tipo       : {
        type: String,
        required: true
    },
});

module.exports = model('provas', ProvasSchema);