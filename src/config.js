import { config } from "dotenv";
//nos permite configurar las variables de entorno de env
config();

export default {
    host: process.env.HOST ||"",
    database: process.env.DATABASE ||"",
    user: process.env.USER ||"",
    password: process.env.PASSWORD || ""
}