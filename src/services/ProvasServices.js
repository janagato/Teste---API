const Provas = require('../models/Provas');

class ProvasServices {

    async indexProvas(){
        return await Provas.find();
    }

    async insertProva( data ){
        return await Provas.create( data );
    }
    async listProva(query){
        return await Provas.find(query)
    }
    async deleteProva(query){
        if(!query) throw new Error("a query está vazia")
        return await Provas.deleteOne(query)
    }
}

module.exports = new ProvasServices();