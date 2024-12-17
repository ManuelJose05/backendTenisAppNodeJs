const axios = require('axios')
const url = 'https://backtenis-1ecac-default-rtdb.europe-west1.firebasedatabase.app/';

 const getPartidoPendiente = async () => {
    const partidos = await axios.get(url + 'partidosPendientes.json')
    const mapa = new Map(Object.entries(partidos.data))
    const nuevosPartidos = Array.from(mapa)
    return nuevosPartidos[0];
}

const getPartidosPendientes = async () => {
    const partidos = await axios.get(url + 'partidosPendientes.json')
    return partidos.data;
}

const getPartidosFinalizados = async () => {
    const partidosFinalizados = await axios.get(url + 'partidosFinalizados.json')
    return partidosFinalizados.data;
}

const borrarPartidoPendiente = async (id) => {
    await axios.delete(url + 'partidosPendientes/' + id + ".json")
}

const crearPartidoFinalizado = async (partido) => {
    const url = 'https://backtenis-1ecac-default-rtdb.europe-west1.firebasedatabase.app/partidosFinalizados.json';
    await borrarPartidoPendiente(partido.keys().next().value)
    await axios.post(url,partido.values().next().value);
}



module.exports = {
    getPartidoPendiente,
    getPartidosPendientes,
    crearPartidoFinalizado,
    getPartidosFinalizados
}