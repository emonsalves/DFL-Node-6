const checkRequest = async (req, res, next) => {
    const params = req.params;
    const query = req.query;
    const body = req.body;
    const url = req.url;

    console.log(
`---------------------------------------------------------------------------------------------------------------------------------------------
    Hoy ${new Date()} Se ha recibido una consulta EN RUTA " ${url} "
---------------------------------------------------------------------------------------------------------------------------------------------`)
    if (Object.values(params) != "" || undefined) {
        console.log(
`---------------------------------------------------------------------------------------------------------------------------------------------
    Trae Data en Params : ${JSON.stringify(params.email)}
---------------------------------------------------------------------------------------------------------------------------------------------`)
    }
    if (Object.values(query) != "" || undefined) {
        console.log(
`---------------------------------------------------------------------------------------------------------------------------------------------
    Trae Data en Query : ${JSON.stringify(query)}
---------------------------------------------------------------------------------------------------------------------------------------------`)
    }
    if (Object.values(body) != "" || undefined) {
        console.log(
`---------------------------------------------------------------------------------------------------------------------------------------------
    Trae Data en Body : ${JSON.stringify(body)}
---------------------------------------------------------------------------------------------------------------------------------------------`)
    }
    next()
}

module.exports = { checkRequest }