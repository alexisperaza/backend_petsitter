const clientModel = require('../models/cliente.model');

class ClientService {
    ClientService(){}

    async getClients(){
        try {
            return await clientModel.find();
        }catch(error){
            return error;
        }
    }

    async saveClient (client = new clientModel()) {
        try {
            var clientSaved;
            await clientModel.create(client).then((value) =>{
                clientSaved = value;
            });
            return clientSaved;
        } catch (error) {
            console.log(error);
        }
    }

    async deleteClient(idc) {
        console.log(idc);
        var clientDeleted;
        try {
            await clientModel.findOneAndRemove({
                _id: idc
            }).then( (value) => {
                console.log(value);
                clientDeleted = value;
            });

            return clientDeleted;
        } catch (error) {
            console.log(error);

        }
    }

    async updateClient(idClient) {

        var clientUpdated;
        try {
            await clientModel.findOneAndUpdate({
                _id: idClient._id
            }, idClient).then( (value) => {

                clientUpdated = idClient;
            });

            return clientUpdated;
        } catch (error) {
            console.log(error);

        }
    }
}

module.exports = new ClientService();