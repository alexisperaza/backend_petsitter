const clientService = require("../services/cliente.service")

const getClients = async(req, res) => {
    res.json({
        clients: await clientService.getClients()
    });
}

const saveClient = async(req, res) => {
    console.log(req.body);
    res.json({
        client: await clientService.saveClient(req.body)
    });
}

const updateClient = async(req, res) => {
    res.json({
        client: await clientService.updateClient(req.body)
    })
}

const deleteClient = async(req, res) => {
    res.json({
        cliente: await clientService.deleteClient(req.params.id)
    })
}


module.exports = {getClients, saveClient, updateClient, deleteClient};