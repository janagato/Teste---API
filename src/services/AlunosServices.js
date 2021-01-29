const Alunos = require('../models/Alunos');

class AlunosServices {

    async indexAlunos(){
        return await Alunos.find();
    }

    async insertAluno( data ){
        count++;
        if (count > 100){
            throw new Error("Limite de alunos atingido: 100")
        }
        return await Alunos.create( data );
    }

}

module.exports = new AlunosServices();