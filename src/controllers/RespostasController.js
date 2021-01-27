const _respostas = require('../services/RespostasServices');

module.exports = {

    async create(request, response){
        try{
            const result = await _respostas.insertResposta(request.body);
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    }
}