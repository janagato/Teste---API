const { Schema, model } = require('mongoose');

const AlunosSchema = new Schema({
    nome   : {
        type: String,
        required: true
    },
    turma : {
        type: String,
        required: true
    
    },
});

module.exports = model('alunos', AlunosSchema);