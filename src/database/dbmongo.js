const mongoose = require('mongoose');
const dbConnection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        console.log('Mongodb..');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {
    dbConnection
}   