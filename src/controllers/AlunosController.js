const _alunos = require('../services/AlunosServices');

module.exports = {

    async index(request, response){
        try{
            const result = await _alunos.indexAlunos();
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    },

    async create(request, response){
        try{
            const result = await _alunos.insertAluno(request.body);
            return response.status(200).json(result);
        }catch (err){
            return response.status(400).json({Error: err.message});
        }
    }
}