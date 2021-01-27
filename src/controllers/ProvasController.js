const _provas = require('../services/ProvasServices');

module.exports = {

    async index(request, response){
        try{
            const result = await _provas.indexProvas();
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    },

    async create(request, response){
        try{
            const result = await _provas.insertProva(request.body);
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    },
    async list(request, response){
        try{
            const result = await _provas.listProva(request.query)
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    },
    async delete(request, response){
        try{
            const result = await _provas.deleteProva(request.query);
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
    }
}
}