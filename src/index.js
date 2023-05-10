import app from "./app";
const { dbConnection } = require('./database/dbmongo');

// se encarga de arrancar esta funcion principal
 async function main (){
    
    await dbConnection();
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);

    
};

main();