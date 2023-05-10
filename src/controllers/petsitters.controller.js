import {getConnection} from "./../database/database";

const getPetsitters= async (req, res) => {
    try{
        const connection= await getConnection();
        const result = await connection.query("SELECT idpets_sitter, cityid, name, lastname, email, phone, photo_url, edad FROM pets_sitter");
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const getPetsitter = async (req, res) => {
    try{
        const {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("SELECT id, name, programmers FROM language WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const addPetsitter = async (req, res) => {
    try{
        const { name, programmers } = req.body;

        if(name===undefined || programmers===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }
        const language = { name, programmers};
        const connection= await getConnection();
        await connection.query("INSERT INTO language SET ?", language);
        res.json({ message: "Language added "});
    }catch(error){
        res.status(500);
        res.send(error.message);

    }

};

const deletePetsitter = async (req, res) => {
    try{
        const {id} = req.params;
        const connection= await getConnection();
        const result = await connection.query("DELETE FROM language WHERE id = ?", id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

const updatePetsitter = async (req, res) => {
    try{
        const {id} = req.params;
        const { name, programmers } = req.body;

        if(id===undefined || name===undefined || programmers===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }
        const language = {id, name, programmers};
        const connection= await getConnection();
        const result = await connection.query("UPDATE language SET ? WHERE id = ?", [language, id]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);

    }
};

export const methods = {
    getPetsitters,
    getPetsitter,
    addPetsitter,
    deletePetsitter,
    updatePetsitter
};