const {Schema} = require("mongoose");
const AlternativaSchema = new Schema({
    questao: Number,
            peso: {
                type: Number,
                min: 1,
                max: 1,
                required: true},
	resposta: String

})
module.exports = AlternativaSchema;