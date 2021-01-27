const { Schema, model } = require('mongoose');

const RespostasRelacaoSchema = new Schema({
    resposta_id : {
        type: String,
        required: true
    },
    prova_id    : {
        type: String,
        required: true
    },
    id_aluno    : {
        type: String,
        required: true
    },
});

module.exports = model('respostas_relacao', RespostasRelacaoSchema);