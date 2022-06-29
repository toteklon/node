console.clear();

import express from 'express';
import dotenv from 'dotenv';
// router de cuenta
import cuentaRouter from './routes/cuenta.route.js';


// leer archivo con variables de entorno
dotenv.config();
// obtener variables de entorno
const PORT = process.env.PORT;

const expressApp = express();

//middleare para detectar body
expressApp.use(express.json());
expressApp.use(express.text());

// usar router de cuenta
expressApp.use("/cuenta", cuentaRouter);



expressApp.listen(PORT, () =>
	console.log(`Servidor levantado en el puerto ${PORT}`)
);