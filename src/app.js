const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require('cookie-parser');

//Routes
import authRoutes from "./routes/auth.routes";
import clientesRoutes from "./routes/clientes.routes";
import petSittersRoutes from './routes/petsitters.routes';

const app = express();

//setings 
app.set('port',4000);

//middleware morgan muestra un detalle de los listados rutas tipo de respuesta
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
//Routes
app.use("/api/auth", authRoutes);
app.use("/api/clientes", clientesRoutes);
app.use('/api/petsitters',petSittersRoutes)


export default app;
