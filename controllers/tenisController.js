const adaptador = require('../dataBase/adaptadorTenis')

const getPartidoPendiente = async (req,res) => {
    try {
        const partidos = await adaptador.getPartidoPendiente();
        res.status(200).send({status: "Ok",data: partidos})
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED",message:error.message})
    }
}

const getPartidosPendientes = async (req,res) => {
    try {
        const partidos = await adaptador.getPartidosPendientes();
        res.status(200).send({status: "Ok",data: partidos})
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED",message:error.message})
    }
}

const getPartidosFinalizados = async (req,res) => {
    try {
        const partidos = await adaptador.getPartidosFinalizados();
        res.status(200).send({status: "Ok",data: partidos})
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED",message:error.message})
    }
}

const crearPartidoFinalizado = async (req,res) => {
    const partido = req.body
    console.log(req.body)
    if (!partido) res.status(400).send({status: "FAILED",message:"NO DATA"});

    const mapa = new Map(Object.entries(partido));

    try {
        const partidoFinalizado = await adaptador.crearPartidoFinalizado(mapa);
        res.status(200).send({status: "Ok",data: partidoFinalizado})
    } catch (error) {
        res.status(error.status || 500).send({status: "FAILED",message:error.message})
    }
}

module.exports = {
    getPartidoPendiente,
    getPartidosPendientes,
    getPartidosFinalizados,
    crearPartidoFinalizado
}