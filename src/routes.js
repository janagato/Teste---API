const { Router } = require('express');

const ProvasController = require('./controllers/ProvasController');

const AlunosController = require('./controllers/AlunosController');

const RespostasController = require('./controllers/RespostasController')

const routes = Router();

routes.get('/provas', ProvasController.list)
    .post('/provas', ProvasController.create)
    .delete('/provas', ProvasController.delete);
routes.get('/alunos', AlunosController.index)
    .post('/alunos', AlunosController.create);

routes.post('/respostas', RespostasController.create);

/**
 * Rota de teste
 */
routes.get('/', function (request, response){
    response.send('Olá mundo!');
});

module.exports = routes;