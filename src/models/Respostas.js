const { Schema, model } = require('mongoose');

const RespostasSchema = new Schema({
    respostas   : [String]
});

module.exports = model('respostas', RespostasSchema);