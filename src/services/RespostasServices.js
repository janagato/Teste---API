const Respostas = require('../models/Respostas');

class RespostasServices {
    async insertResposta(data){
        return await Respostas.create(data);
    }

}

module.exports = new RespostasServices();