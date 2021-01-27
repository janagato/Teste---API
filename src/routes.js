const { Router } = require('express');

const routes = Router();

/**
 * Rota de teste
 */
routes.get('/', function (request, response){
    response.send('Dorme bem, meu amor. Te amo muito!');
});

module.exports = routes;