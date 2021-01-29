const { Schema, model } = require('mongoose');
const AlternativaSchema = require("./utils/Alternativas")
const RespostasSchema = new Schema({
    respostas   : [AlternativaSchema],
    notas:{
        type: Number,
        min:[0,'Nenhuma questão foi respondida corretamente'],
        max:10,
        required: true}
});

module.exports = model('respostas', RespostasSchema);