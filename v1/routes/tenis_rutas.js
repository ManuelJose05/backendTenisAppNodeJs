const express = require('express');
const tenisController = require('../../controllers/tenisController')
const routes = express.Router()

routes.get("/",tenisController.getPartidoPendiente)

routes.get("/pendientes",tenisController.getPartidosPendientes)

routes.get("/finalizados",tenisController.getPartidosFinalizados)

routes.post("/finalizados",tenisController.crearPartidoFinalizado)

//EXPORTAR SIEMPRE ROUTES SIN LLAVES
module.exports = routes