const {Schema} = require("mongoose");
const AlternativaSchema = new Schema({
    questao: Number,
			peso: Number,
			resposta: String

})
module.exports = AlternativaSchema