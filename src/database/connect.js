const { connect, set } = require('mongoose');

class Connect {
    connect(){
        connect(
            `mongodb+srv://${process.env.MONGO_HOST}`,
            {
                user: process.env.MONGO_USER,
                pass: process.env.MONGO_PASS,
                dbName: process.env.MONGO_COLLECTION,
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useFindAndModify: false
            },
            (err) => {
                if (err) throw err;
                else console.log("Conectado com sucesso ao banco de dados!")
            }
        )
    }
}
  

module.exports = new Connect().connect();
