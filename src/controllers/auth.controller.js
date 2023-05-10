import {getConnection} from "../database/database";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
const saltRounds = 10;

const register = async (req, res) => {
    try{
        const {name, last_name, address, phone,  email, passworduser } = req.body;
        if(name===undefined || last_name ===undefined || address===undefined || phone ===undefined || email===undefined || passworduser===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        const password = bcrypt.hashSync(passworduser.toString(), salt);
        const user = { name, last_name, address, phone, email, password};
        const connection= await getConnection();
        await connection.query("INSERT INTO user SET ?", user);
        const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1h'});
        return res.json({Status: "Success", token:token});
        
    }catch(error){
        res.status(500);
        res.send(error.message);

    }

};

const login = async (req, res) => {
    try{
        const { email, passworduser } = req.body;
        if(email===undefined || passworduser===undefined){
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }
        const user = { email, passworduser};
        const connection= await getConnection();
        await connection.query("SELECT * FROM user WHERE email = ?", user.email, (err, data) => {
            if(err) return res.json({Error: "Login error in server"});
            if(data.length > 0) {
                bcrypt.compare(user.passworduser.toString(), data[0].password, (err, response) => {
                    if(err) return res.json({Error: "Password compare error"});
                    if(response) {
                        const name = data[0].name;
                        const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1h'});
                        return res.json({Status: "Success", token:token});
                    }else {
                        return res.json({Error: "Password not matched"});
                    }
                })
            }else {return res.json({ Error: "No email existed"})}
        });
        return res.json({Status: 'Success'});

    }catch(error){
        res.status(500);
        res.send(error.message);

    }

};

export const methods = {
    register, login
};