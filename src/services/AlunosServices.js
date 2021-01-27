const Alunos = require('../models/Alunos');

class AlunosServices {

    async indexAlunos(){
        return await Alunos.find();
    }

    async insertAluno( data ){
        return await Alunos.create( data );
    }

}

module.exports = new AlunosServices();