const { Schema, model } = require('mongoose');
const AlternativaSchema = require("./utils/Alternativas")
const RespostasSchema = new Schema({
    respostas   : [AlternativaSchema],
    notas:{
        type: Number,
        required: true
    }

});

module.exports = model('respostas', RespostasSchema);